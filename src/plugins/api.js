import axios from 'axios'

const baseURL = 'http://localhost:3000/'

const apiService = axios.create({
    baseURL
})

export { apiService }