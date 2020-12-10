import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native"

import color from '../config/color';

const SearchBarHeader = ({ onSubmit, onPress, query }) => {

    const naviagtion = useNavigation()

    return (
        <View style={styles.container} >
            <MaterialIcons
                name="arrow-back"
                size={24}
                color="white"
                onPress={() => naviagtion.navigate("Home")} />
            <TextInput
                value={query}
                style={styles.input}
                placeholder="Search Youtube"
                placeholderTextColor={color.white}
                onChangeText={onPress}
                onSubmitEditing={onSubmit}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        flexDirection: "row",
        height: 50,
        alignItems: "center"
        // justifyContent: "center"
    },
    input: {
        flex: 1,
        paddingLeft: 10,
        borderRadius: 10,
        marginLeft: 20,
        backgroundColor: "#434343",
        height: "100%",
        // width: "100%",
        justifyContent: "center",
        color: color.white,

    }
})
export default SearchBarHeader