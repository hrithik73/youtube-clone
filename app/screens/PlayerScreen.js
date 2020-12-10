import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";

import color from "../config/color"
// import api from "../api/api"
import Screen from "../components/Screen"



const PlayerScreen = ({ route }) => {
    const item = route.params.item
    const id = item.id

    const [playing, setPlaying] = useState(true)

    return (
        <Screen style={styles.container} >
            <View style={styles.playerContaier}  >
                <YoutubePlayer
                    height={300}
                    play={playing}
                    videoId={id.videoId}
                // onChangeState={onStateChange}
                />
            </View>
            <Text style={styles.title} >{item.snippet.title}</Text>

        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    playerContaier: {
        height: 225,
        // backgroundColor: "red"
    },
    title: {
        fontSize: 20,
        color: color.white
    }
})
export default PlayerScreen