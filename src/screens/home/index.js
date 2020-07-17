import React from 'react'
import { View } from 'react-native'
import HeaderComponent from '../../components/header'
import { connect } from 'react-redux'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <HeaderComponent navigation={navigation} />
        </View>
    )
}

function mapStateToProps(state) {
    return {
        state
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen)