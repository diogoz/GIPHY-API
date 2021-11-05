import React from 'react'
import { ActivityIndicator } from 'react-native'

const Loading = ({isLoading}) => {
    return (
        isLoading ? (
            <ActivityIndicator
                color="white"
                size={40}
                style={{margin: 20}}
             />
        ) : null
    )
    
}

export default Loading
