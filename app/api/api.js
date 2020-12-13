// https://www.googleapis.com/youtube/v3/search

import { KEY } from "@env"
import axios from "axios"

console.log(KEY)

export default axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 1000,
        key: KEY
    }
})
