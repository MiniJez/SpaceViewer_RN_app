import React, { useEffect, useState } from 'react'
import { View, ActivityIndicator, ScrollView, Image } from 'react-native'
import HeaderComponent from '../../components/header'
import { connect } from 'react-redux'
import { getRoverImage } from '../../redux/actions/roverActions'
import { Button, Card, Icon, Text } from 'react-native-elements'
import { createLoadingSelector } from '../../redux/selectors/loadingSelector'
import { getRover } from '../../redux/selectors/roverSelector'
import colors from '../../constants/colors'
import { mapEach2Values } from '../../utils'

const CuriosityScreen = (props) => {

    const { navigation } = props

    const [sol, setSol] = useState(0)
    const [page, setPage] = useState(1)
    const [rover, setRover] = useState(null)

    useEffect(() => {
        _getImage(sol, page)
    }, [sol])

    useEffect(() => {
        setRover(props.rover)
    }, [props.rover])

    useEffect(() => {
        console.log(props)
    })

    const _getImage = (sol, page) => {
        props.getRoverImage('curiosity', sol, page)
    }

    const _onPressNext = () => {
        setSol(sol + 1)
    }

    const _renderCard = (value, i) => {
        return (
            <Card containerStyle={{ width: '43%', padding: 0, margin: 15 }}>
                <Image
                    source={{ uri: value[0].img_src }}
                    style={{ width: '100%', height: 175 }}
                    PlaceholderContent={<ActivityIndicator size="small" color={colors.headerBlue} />}
                    resizeMode="contain"
                />
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Icon
                        name="share"
                        type="material-community"
                        style={{ margin: 5 }}
                        color={colors.headerBlue}
                    />
                    <Icon
                        name="info-outline"
                        style={{ margin: 5 }}
                        color={colors.headerBlue}
                    />
                </View>
            </Card>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <HeaderComponent navigation={navigation} />
            {
                rover && rover.photos && rover.photos.length ?
                    <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 15, marginLeft: 20 }}>
                            <Icon
                                name="robot-industrial"
                                type="material-community"
                                size={30}
                            />
                            <Text h2 h2Style={{ marginLeft: 10 }}>Curiosity</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            {
                                page > 1 ?
                                    <Button
                                        title="Back"
                                        containerStyle={{ flex: 1, marginHorizontal: 18 }}
                                        icon={
                                            <Icon
                                                name="arrow-left"
                                                type="foundation"
                                                color="white"
                                                containerStyle={{ marginRight: 10 }}
                                            />
                                        }
                                    />
                                    :
                                    <View style={{ flex: 1, marginHorizontal: 18 }} />
                            }
                            <Button
                                title="Next"
                                containerStyle={{ flex: 1, marginHorizontal: 18 }}
                                icon={
                                    <Icon
                                        name="arrow-right"
                                        type="foundation"
                                        color="white"
                                        containerStyle={{ marginLeft: 10 }}
                                    />
                                }
                                iconRight
                                onPress={_onPressNext}
                            />
                        </View>
                        {
                            mapEach2Values(rover.photos, (value, i) => {
                                console.log(value)
                                return (
                                    <View key={i} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        {
                                            _renderCard(value, i)
                                        }
                                        {
                                            value[1] ?
                                                _renderCard(value, i + 1)
                                                :
                                                null
                                        }
                                    </View>
                                )
                            })
                        }
                    </ScrollView>
                    :
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <ActivityIndicator size="large" color={colors.headerBlue} />
                    </View>
            }
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        loadingRover: createLoadingSelector(['GET_ROVER_IMAGE'])(state),
        rover: getRover(state)
    }
}

const mapDispatchToProps = {
    getRoverImage
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CuriosityScreen)