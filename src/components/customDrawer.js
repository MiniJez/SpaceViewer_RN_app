import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Header, ListItem } from 'react-native-elements'
import colors from '../constants/colors'
import Accordion from 'react-native-collapsible/Accordion';

const menuList = [
    {
        name: "Mars weather",
        iconName: "partly-sunny",
        iconType: "ionicon",
        screenName: "MarsWeatherScreen",
        section: 0
    },
    {
        name: 'Mars rover',
        iconName: "robot-industrial",
        iconType: "material-community",
        chevronIconName: ["keyboard-arrow-up", "keyboard-arrow-down"],
        chevronIconType: "material",
        child: [
            {
                name: "Curiosity",
                screenName: "CuriosityScreen"
            },
            {
                name: "Opportunity",
                screenName: "OpportunityScreen"
            },
            {
                name: "Spirit",
                screenName: "SpiritScreen"
            }
        ],
        section: 1
    }
]

const CustomDrawerComponent = ({ navigation }) => {

    const [activeSection, setActiveSection] = useState([])

    const _renderHeader = (section) => {
        return (
            <ListItem
                title={section.name}
                leftIcon={{ name: section.iconName, type: section.iconType }}
                bottomDivider
                chevron={section.chevronIconName ? { name: section.section === activeSection[0] ? section.chevronIconName[1] : section.chevronIconName[0] , type: section.chevronIconType, size: 20 } : null}
                onPress={ section.screenName ? () => navigation.navigate(section.screenName) : null }
            />
        )
    }

    const _renderContent = (section) => {
        return section.child ?
            section.child.map((value, index) => {
                return (
                    <ListItem
                        key={index}
                        title={value.name}
                        bottomDivider
                        titleStyle={{ marginLeft: "16%" }}
                        containerStyle={{backgroundColor: '#eaf2fa'}}
                        onPress={ () => navigation.navigate(value.screenName) }
                    />
                )
            })
            :
            null
    }

    const _updateSections = (index) => {
        setActiveSection(index)
    }

    return (
        <View>
            <Header
                centerComponent={{ text: "MENU", style: { color: "white", fontSize: 20 } }}
                containerStyle={{ backgroundColor: colors.menu }}
            />
            <Accordion
                sections={menuList}
                activeSections={activeSection}
                renderHeader={_renderHeader}
                renderContent={_renderContent}
                onChange={_updateSections}
            />
        </View>
    )
}

export default CustomDrawerComponent