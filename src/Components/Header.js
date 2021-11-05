import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native';
import {Ionicons} from 'react-native-vector-icons';

let searchedText = ""
const Header = ({navigation, inputText, setInputText, loadData}) => {
    return (
        <View> 
            <View style={styles.header}>
                <Ionicons 
                name="chevron-back" 
                size={40} 
                color="white" 
                onPress={() => navigation.goBack()}
                />

                <TextInput
                style={styles.input} 
                placeholder='Pesquisar' 
                autoCapitalize='none' 
                autoCorrect={false}
                value={inputText}
                onChangeText={(value) => setInputText(value)}
                onSubmitEditing={() => {
                    searchedText= inputText;
                    loadData(inputText);
                }}
                />

                <Ionicons 
                name="search" 
                size={40} 
                color="white"
                style={styles.inputStyle} 
                onPress={() => {
                    searchedText= inputText;
                    loadData(inputText);
                }}
                />
        </View>
        {searchedText !== '' ? 
        (<Text style={styles.textResult}>
            Mostrando resultados para <Text style={styles.textVariable}>
                {searchedText}</Text></Text>) : null}
      </View>       

    )
}
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      input: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 25,
        fontSize: 20,
        paddingHorizontal: 20 
      },
      textResult: {
          fontSize: 16,
          color: 'white',
          margin: 15,
      },
      textVariable: {
          fontWeight: 16,
          color: 'white',
          fontWeight: 'bold',
      },
      inputStyle: {
          marginHorizontal: 5
      }
});

export default Header
