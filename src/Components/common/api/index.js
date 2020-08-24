import * as axios from 'axios';

const instanse = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '49fcc7a6-93ef-4ac6-9181-4b2c76f5a553'
    }
})

export const getUsers = ({ page = 1, count = 10 }) => {
    return instanse.get(`users?page=${page}&count=${count}`)
        .then(response => response.data)
}
export const getUserProfile = (userId) => {
    return instanse.get(`profile/${userId}`)
        .then(response => response.data)
}
export const getAuthorization = () => {
    return instanse.get(`/auth/me`,
        { sameSite: 'none', secure: true }
    )
}
export const postFollow = (userId) => {
    return instanse.post(
        `follow/${userId}`, {}
    )
}
export const delFollow = (userId) => {
    return instanse.delete(
        `follow/${userId}`
    )
}