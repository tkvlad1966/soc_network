import * as axios from 'axios';

const instanse = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'b30605cc-6c34-4df2-95dd-3f0009408dc3'
    }
})

export const API = {
    getUsers({ page = 1, count = 10 }) {
        return instanse.get(`users?page=${page}&count=${count}`)
            .then(response => {
                return response.data
            })
    },
    getUserProfile(userId) {
        return instanse.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getAuthorization() {
        return instanse.get(`/auth/me`,
            { sameSite: 'none', secure: true }
        )
    },
    postFollow(userId) {
        return instanse.post(
            `follow/${userId}`, {}
        )
    },
    delFollow(userId) {
        return instanse.delete(
            `follow/${userId}`
        )
    }
}

// export const getUsers = ({ page = 1, count = 10 }) => {
//     return instanse.get(`users?page=${page}&count=${count}`)
//         .then(response => response.data)
// }
// export const getUserProfile = (userId) => {
//     return instanse.get(`profile/${userId}`)
//         .then(response => response.data)
// }
// export const getAuthorization = () => {
//     return instanse.get(`/auth/me`,
//         { sameSite: 'none', secure: true }
//     )
// }
// export const postFollow = (userId) => {
//     return instanse.post(
//         `follow/${userId}`, {}
//     )
// }
// export const delFollow = (userId) => {
//     return instanse.delete(
//         `follow/${userId}`
//     )
// }