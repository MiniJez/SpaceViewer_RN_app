import React from 'react'
import { View, Text } from 'react-native'
import HeaderComponent from '../../components/header'

const HomeScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1 }}>
            <HeaderComponent navigation={navigation}/>
        </View>
    )
}

export default HomeScreen