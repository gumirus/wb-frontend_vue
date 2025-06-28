import axios from 'axios'

const API_KEY = 'E6kUTYrYwZq2tN4QEtyzsbEBk3ie'
const BASE_URL = 'http://109.73.206.144:6969'

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: API_KEY,
  },
})

export const fetchData = (endpoint, params = {}) =>
  api.get(`/${endpoint}`, { params })
