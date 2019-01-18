import axios from 'axios'

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 60000
})

client.interceptors.response.use(({ data }) => {
  return data === 'OK' ? null : data
}, error => Promise.reject(error))

export default client