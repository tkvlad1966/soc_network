import { baseUrl } from "../../../utils/constants"
import * as axios from 'axios';

export const getUsers = ({ page, count }) => {
    return axios
        .get(
            `${baseUrl}users?page=${page}&count=${count}`,
        )
}
export const getUserProfile = (userId) => {
    return axios
        .get(
            `${baseUrl}/profile/${userId}`,
        )
}
export const getAuthorization = () => {
    return axios
        .get(
            `${baseUrl}/auth/me`,
            { withCredentials: true }
        )
}