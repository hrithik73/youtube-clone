// Key
//AIzaSyD5mEDcp9t26K31BfcO3IOLmYHc4eHq9-E
//AIzaSyD5mEDcp9t26K31BfcO3IOLmYHc4eHq9-E

// https://www.googleapis.com/youtube/v3/search


import axios from "axios"
const KEY = "AIzaSyD5mEDcp9t26K31BfcO3IOLmYHc4eHq9-E"

export default axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 1000,
        key: KEY
    }
})

    // /search?q=React&key=[YOUR_API_KEY] HTTP/1.1