import React from 'react'
import { Header } from 'react-native-elements'
import { Image } from 'react-native'
import images from '../constants/images'

const HeaderComponent = ({navigation}) => {

    const _openDrawer = () => {
        navigation.openDrawer();
    }

    const ImageHeader = () => {
        return (
            <Image 
                source={images.logo}
                resizeMode='contain'
                style={{ width: 150, marginBottom: 5 }}
            />
        )
    }

    return (
        <Header
            leftComponent={{ icon: 'menu', size: 35, color: '#fff', onPress: _openDrawer }}
            centerComponent={ <ImageHeader/> }
        />
    )
}

export default HeaderComponent