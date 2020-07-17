import React from 'react'
import { View, Text } from 'react-native'
import HeaderComponent from '../../components/header'

const OpportunityScreen = ({navigation}) => {
    return(
        <View style={{ flex: 1 }}>
            <HeaderComponent navigation={navigation} />
            <Text>Opportunity</Text>
        </View>
    )
}

export default OpportunityScreen