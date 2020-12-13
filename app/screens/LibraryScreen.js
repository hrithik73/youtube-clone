import React from 'react'
import { View, StyleSheet } from 'react-native';
import Header from "../components/Header"
import Screen from "../components/Screen"
const LibraryScreen = () => {
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
export default LibraryScreen