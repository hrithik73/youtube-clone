import { useState } from 'react';
import api from "../api/api"

export default () => {

    const [data, setData] = useState([])

    const getData = async (term) => {
        console.log(term)
        const response = await api.get("./search", {
            params: {
                q: term
            }
        })
        // console.log(response.data.items)
        // const result = JSON.parse(response.data.items)
        // console.log(result)
        setData(response.data.items)
    }

    return [data, getData]


}




