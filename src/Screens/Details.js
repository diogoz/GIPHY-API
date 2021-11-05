import React from 'react';
import { View, Text, ImageBackground, StyleSheet, StatusBar, SafeAreaView, Image, Linking } from 'react-native';
import {Ionicons} from 'react-native-vector-icons'

const Details = ({route, navigation}) => {
  const data = route.params.item;
  return (
    <ImageBackground source={require("../../assets/BG.png")} style={styles.container}> 
      <SafeAreaView>
        <View style={styles.header}> 
          <Ionicons 
            name="chevron-back" 
            size={40} 
            color="white" 
            onPress={() => navigation.goBack()}
          />

          <Text style={styles.mainText}>Resultados</Text>
        </View>
      <View style={styles.imageContainer}> 
        <Image
          style={{flex: 1}}
          source={{uri: data.images.original.url}}
          resizeMode='contain'
        />
      </View>

      <View style={styles.description}> 
        <Text style={styles.title}>{data.title}</Text>
        <Ionicons name='globe' size={40} color='white' onPress={() => Linking.openURL(data.images.original.url)} />
      </View>
      </SafeAreaView>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  container: {
    flex : 1,
    paddingTop: StatusBar.currentHeight
  },
  mainText: {
    fontSize: 22,
    color: 'white',
    width: '80%',
  },
  header:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    width: "100%",
    height: "50%",
    backgroundColor: "rgba(171, 171, 171, 0.8)"
  },
  description: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 18,
    color: 'white',
  },
  
})

export default Details;