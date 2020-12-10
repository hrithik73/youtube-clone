import React, { useEffect } from 'react'
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import Header from "../components/Header"
import Screen from "../components/Screen"

import useApi from '../hooks/useApi'
import VideoCard from '../components/VideoCard';


const HomeScreen = ({ navigation }) => {


    const [data, getData] = useApi()


    if (!data) {
        return null
    }

    useEffect(() => {
        getData("React-Native")
    }, [])

    return (
        <Screen style={styles.container} >
            <Header />
            {/* <VideoCard data={data.snippet} /> */}

            <FlatList
                data={data}
                keyExtractor={(item) => item.etag}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => navigation.navigate("Player", { item: item })} >
                        <VideoCard data={item.snippet} />
                    </TouchableOpacity>
                }
            />

            {/* <Button title="Get Data" onPress={getData} /> */}

        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
    }
})
export default HomeScreen