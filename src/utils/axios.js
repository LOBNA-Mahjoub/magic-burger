import axios from 'axios'

let instance = axios.create({
    baseURL: 'http://51.75.20.206:3100/'
})
instance.interceptors.response.use(null, (error) => {
    if (error.response) {
        if (error.response.status === 404)
            console.log("we have Error Here !!")
    }
    return Promise.reject(error)
})
export default instance