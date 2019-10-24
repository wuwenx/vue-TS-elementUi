import axios from 'axios'

let instance: any = {};
instance = axios.create({
    baseURL: "",
})
instance.interceptors.request.use((config) => {
    return config;
}, (error) => {
    return Promise.reject(error);
})
instance.interceptors.response.use((response) => {
    return response.data ;
}, (error) => {
    return Promise.reject(error);
})
export default instance;