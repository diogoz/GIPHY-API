import React, {useState} from 'react';
import {StyleSheet, StatusBar, 
SafeAreaView, ImageBackground,  Keyboard, FlatList, 
TouchableOpacity, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import API_KEY from '../API_KEY';
import Header from '../Components/Header';
import InfoText from '../Components/InfoText';
import Loading from '../Components/Loading';
import ErrorMessage from '../Components/ErrorMessage';

const {width} = Dimensions.get('window');
const COLUMN_SIZE = width /2;
const IMAGE_SIZE = COLUMN_SIZE * 0.9;

let pagina = 0;

const Results = ({route}) => {
  const navigation = useNavigation();
  const choose = route.params.choose
  const link = `https://api.giphy.com/v1/${choose}/search`;
  const [inputText, setInputText] = useState('');
  const [data, setData] = useState([]);
  const [showMessage, setShowMessage] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const loadData = async (inputText) => {
    Keyboard.dismiss();
    setShowMessage(false);
    errorMessage && setErrorMessage(false);
    setIsLoading(true);
    try {
      const response = await axios.get(link, {
        params:{
          api_key: API_KEY,
          q: inputText,
          lang: 'pt',
          limit: 20,
          offset: pagina * 20,
        }
      })
      pagina++
      setData([...data, ...response.data.data]);
    } catch (error) {
      setErrorMessage(true);
    }
    setIsLoading(false);
  }

  return (
    <ImageBackground source={require("../../assets/BG.png")} style={styles.container}> 
      <SafeAreaView style={styles.view}>
        <Header
          navigation={navigation}
          inputText={inputText}
          setInputText={setInputText}
          loadData={loadData} 
        />

        <FlatList
          data={data}
          keyExtractor={(element) => element.id}
          onEndReachedThreshold={0.05}
          onEndReached={loadData}
          ListFooterComponent={
            <>
             <InfoText showMessage={showMessage}/>
            <Loading isLoading={isLoading}/>
            <ErrorMessage errorMessage={errorMessage}/>
            </>
          }
          ListFooterComponentStyle={styles.footerFlatlist}
          numColumns={2}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('Details', {item: item})}
              >
              <Image
                style={styles.image}
                source={{uri: item.images.preview_gif.url,}}
              />
               </TouchableOpacity>
            );
          }}
        />
    </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }, 
  view: {
    marginTop: StatusBar.currentHeight
  },
  image: {
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
    margin: IMAGE_SIZE * 0.05,
  },
  footerFlatlist: {
    marginBottom: 80,
  },
 
});
export default Results;