import React from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements'

const HomeScreen = () => {
    return (
        <View>
            <Text>Hello !</Text>
            <Icon
                reverse
                name='ios-american-football'
                type='ionicon'
                color='#517fa4'
            />
        </View>
    )
}

export default HomeScreen