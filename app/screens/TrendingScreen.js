import React from 'react'
import { StyleSheet } from 'react-native';

import Screen from "../components/Screen"
import Header from "../components/Header"

const TrendingScreen = () => {
    return (
        <Screen style={styles.container} >
            <Header />
        </Screen>

    );
}

const styles = StyleSheet.create({
    container: {
    }
})
export default TrendingScreen