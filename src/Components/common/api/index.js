import { baseUrl } from "../../../utils/constants"
import * as axios from 'axios';

export const getUsers = ({ page, count }) => {
    return axios
        .get(
            `${baseUrl}users?page=${page}&count=${count}`,
            { withCredentials: true }
        )
}
export const getUserProfile = (userId) => {
    return axios
        .get(
            `${baseUrl}profile/${userId}`,
        )
}
export const getAuthorization = () => {
    return axios
        .get(
            `${baseUrl}/auth/me`,
            { withCredentials: true, sameSite: 'none', secure: true }
        )
}
export const postFollow = (userId) => {
    return axios
        .post(
            `${baseUrl}follow/${userId}`, {}, {
            withCredentials: true,
            headers: {
                'API-KEY': '49fcc7a6-93ef-4ac6-9181-4b2c76f5a553'
            }
        }
        )
}
export const delFollow = (userId) => {
    return axios
        .delete(
            `${baseUrl}follow/${userId}`, {
            withCredentials: true,
            headers: {
                'API-KEY': '49fcc7a6-93ef-4ac6-9181-4b2c76f5a553'
            }
        }
        )
}