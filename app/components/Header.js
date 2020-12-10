import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { useNavigation } from "@react-navigation/native"

import { MaterialIcons } from '@expo/vector-icons';

import color from "../config/color"

const Header = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.container} >
            <Image style={styles.logo} source={require("../assets/logo/logo-dark.png")} />

            <View style={styles.logoscontainer} >


                <TouchableOpacity style={styles.icon} >
                    <MaterialIcons name="cast" size={25} color={color.white} />
                </TouchableOpacity>


                <TouchableOpacity style={styles.icon}>
                    <MaterialIcons name="videocam" size={25} color={color.white} />
                </TouchableOpacity>


                <TouchableOpacity style={styles.icon} onPress={() => { navigation.navigate("Search") }} >
                    <MaterialIcons name="search" size={25} color={color.white} />
                </TouchableOpacity>


                <TouchableOpacity style={styles.icon}>
                    <MaterialIcons name="account-circle" size={25} color={color.white} />
                </TouchableOpacity>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 50
    },
    logo: {
        height: 22,
        width: 98,
        marginLeft: 10,
    },
    logoscontainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingLeft: 10
    },
    icon: {
        paddingLeft: 10
    }
})
export default Header