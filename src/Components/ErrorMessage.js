import React from 'react'
import {Text, StyleSheet } from 'react-native'

const ErrorMessage = ({errorMessage}) => {
    return ( errorMessage ?
        <Text style={styles.messageError}>Estamos tendo problemas ao carregar os dados.</Text> : null
    )
    
}

const styles = StyleSheet.create({
    messageError: {
        fontSize: 20,
        marginTop: 40,
        color: 'white',
        width: '80%',
        textAlign: 'center',
        alignSelf: 'center',
    }
})

export default ErrorMessage;
