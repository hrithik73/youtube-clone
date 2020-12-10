import React, { useState } from 'react'
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native"


import SearchBarHeader from '../components/SearchBarHeader';
import Screen from '../components/Screen'
import useApi from '../hooks/useApi';
import VideoCard from "../components/VideoCard"


const SearchScreen = () => {

    const [query, setQuery] = useState()
    const [data, getData] = useApi()

    const naviagtion = useNavigation()

    const onSubmitHandler = () => {
        getData(query)

    }


    return (
        <Screen style={styles.container} >
            <SearchBarHeader
                query={query}
                onPress={input => setQuery(input)}
                onSubmit={onSubmitHandler}
            />
            <FlatList
                data={data}
                keyExtractor={(item) => item.etag}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => naviagtion.navigate("Player", { id: item.id })} >
                        <VideoCard data={item.snippet} />
                    </TouchableOpacity>
                }
            />

        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
    }
})
export default SearchScreen