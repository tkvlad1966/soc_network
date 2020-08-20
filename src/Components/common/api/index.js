import { baseUrl } from "../../../utils/constants"
import * as axios from 'axios';

export const getUsers = ({ page, count }) => {
    return axios
        .get(
            `${baseUrl}users?page=${page}&count=${count}`,
        )
}
export const getUserProfile = () => {
    return axios
        .get(
            `${baseUrl}/profile/2`,
        )
}