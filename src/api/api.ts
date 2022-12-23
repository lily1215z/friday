import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '7d5807d9-4ee9-47bf-981f-fcc2c567bea3'
    }
})

export const authAPI = {
    test() {
        return instance.get<any>(`auth/me`)
    },
}