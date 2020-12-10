import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native';

const VideoCard = ({ data }) => {

    return (
        <View style={styles.container} >
            <Image style={styles.Image} source={{ uri: data.thumbnails.high.url }} />
            <View style={styles.detailsContainer} >
                <Image style={styles.chanelThumb} source={{ uri: "https://picsum.photos/200/300" }} />
                <View style={styles.titleContainer} >
                    <Text style={styles.title} >{data.title}</Text>
                    <Text style={{ color: "grey" }} >{data.channelTitle} • 444k views • 1 Year Ago</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: "red"
        paddingTop: 10
    },
    chanelThumb: {
        height: 40,
        width: 40,
        borderRadius: 20,
        marginRight: 5
    },
    detailsContainer: {
        flexDirection: "row",
        paddingTop: 5,
        // justifyContent: "center",
        alignItems: "center"
    },
    Image: {
        height: 210,
        width: "100%",
        borderRadius: 2
    },
    title: {
        fontSize: 15,
        color: "white"
    },


})
export default VideoCard