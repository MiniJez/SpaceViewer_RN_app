import React from 'react'
import { View, Text } from 'react-native'
import HeaderComponent from '../../components/header'

const SpiritScreen = ({navigation}) => {
    return(
        <View style={{ flex: 1 }}>
            <HeaderComponent navigation={navigation} />
            <Text>Spirit</Text>
        </View>
    )
}

export default SpiritScreen