import React from 'react';
import { createStackNavigator, HeaderBackground } from "@react-navigation/stack"

import HomeScreen from "../screens/HomeScreen"
import PlayerScreen from "../screens/PlayerScreen"
import SearchScreen from '../screens/SearchScreen';
import SearchBarHeader from "../components/SearchBarHeader"
import color from '../config/color';

const Stack = createStackNavigator()

const StackNavigator = () => {


    return (
        <Stack.Navigator  >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Player"
                component={PlayerScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    headerShown: false
                }}
            />

        </Stack.Navigator>
    )

}

export default StackNavigator