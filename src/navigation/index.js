import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/home'
import CustomDrawerComponent from '../components/customDrawer'
import CuriosityScreen from '../screens/curiosity'
import OpportunityScreen from '../screens/opportunity'
import SpiritScreen from '../screens/spirit'
import MarsWeatherScreen from '../screens/marsWeather'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Opportunity"
                component={OpportunityScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Curiosity"
                component={CuriosityScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Spirit"
                component={SpiritScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="MarsWeather"
                component={MarsWeatherScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={(props) => <CustomDrawerComponent {...props} />}>
                <Drawer.Screen
                    name="HomeStack"
                    component={HomeStack}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator