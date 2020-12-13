import React from 'react'
import { View, StyleSheet } from 'react-native';

import Screen from "../components/Screen"
import Header from "../components/Header"
const SubscriptionScreen = () => {
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
export default SubscriptionScreen