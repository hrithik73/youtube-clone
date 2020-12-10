import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { MaterialIcons } from '@expo/vector-icons';


import TrendingScreen from '../screens/TrendingScreen';
import SubscriptionScreen from '../screens/SubscriptionScreen';
import LibraryScreen from '../screens/LibraryScreen';
import StackNavigator from './StackNaviagator';
import color from '../config/color'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                style: {
                    backgroundColor: color.black
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={StackNavigator}
                options={{
                    tabBarIcon: ({ size, color }) =>
                        <MaterialIcons name="home" size={size} color={color} />
                }}
            />
            <Tab.Screen
                name="Trending"
                component={TrendingScreen}
                options={{
                    tabBarIcon: ({ size, color }) =>
                        <MaterialIcons name="whatshot" size={size} color={color} />
                }}
            />
            <Tab.Screen
                name="Subscription"
                component={SubscriptionScreen}
                options={{
                    tabBarIcon: ({ size, color }) =>
                        <MaterialIcons name="subscriptions" size={size} color={color} />
                }}
            />
            <Tab.Screen
                name="Library"
                component={LibraryScreen}
                options={{
                    tabBarIcon: ({ size, color }) =>
                        <MaterialIcons name="folder" size={size} color={color} />
                }}
            />

        </Tab.Navigator>
    )
}

export default TabNavigator