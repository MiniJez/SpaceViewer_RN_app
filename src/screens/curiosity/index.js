import React from 'react'
import { View, Text } from 'react-native'
import HeaderComponent from '../../components/header'

const CuriosityScreen = ({navigation}) => {
    return(
        <View style={{flex: 1}}>
            <HeaderComponent navigation={navigation} />
            <Text>Curiosity</Text>
        </View>
    )
}

export default CuriosityScreen