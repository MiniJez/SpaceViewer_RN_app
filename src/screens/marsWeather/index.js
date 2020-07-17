import React from 'react'
import { View, Text } from 'react-native'
import HeaderComponent from '../../components/header'

const MarsWeatherScreen = ({ navigation }) => {
    return(
        <View style={{ flex: 1 }}>
            <HeaderComponent navigation={navigation}/>
            <Text>Mars Weather</Text>
        </View>
    )
}

export default MarsWeatherScreen