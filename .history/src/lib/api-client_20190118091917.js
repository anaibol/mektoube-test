export default axios.create({
  baseUrl: `${process.env.REACT_APP_API_URL}/api`,
  withCredentials: true,
  timeout: 60000
})

client.interceptors.response.use(({ data }) => {
  return data === 'OK' ? null : data
}, error => Promise.reject(error))