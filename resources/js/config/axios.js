import Vue from 'Vue'
import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8000'
})

// before a request is made
instance.interceptors.request.use(config => {
  
    config.headers['Content-Type'] = 'application/json'
    config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('mp3player.jwt')

    return config
})

export default instance