import * as axios from "axios";

const instanse = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "b30605cc-6c34-4df2-95dd-3f0009408dc3",
  },
});

export const UserAPI = {
  getUsers({ page = 1, count = 10 }) {
    return instanse
      .get(`users?page=${page}&count=${count}`)
      .then((response) => {
        return response.data;
      });
  },
  postFollow(userId) {
    return instanse.post(`follow/${userId}`, {});
  },
  delFollow(userId) {
    return instanse.delete(`follow/${userId}`);
  },
};

export const ProfileAPI = {
  getUserProfile(userId) {
    return instanse.get(`profile/${userId}`).then((response) => {
      return response.data;
    });
  },
  updateStatus(status) {
    return instanse.put(`profile/status`, { status: status });
  },
  savePhoto(file) {
    const formData = new FormData();
    formData.append("image", file);
    return instanse.put(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  getStatus(userId) {
    return instanse.get(`profile/status/${userId}`);
  },
  saveProfile(profile) {
    return instanse.put(`profile`, profile);
  },
};

export const AuthAPI = {
  getAuthorization() {
    return instanse.get(`/auth/me`, { sameSite: "none", secure: true });
  },
  login(email, password, remembreMe, captcha) {
    return instanse.post(`/auth/login`, {
      email,
      password,
      remembreMe,
      captcha,
    });
  },
  logout() {
    return instanse.delete(`/auth/login`);
  },
};

export const securityAPI = {
  getCaptchaUrl() {
    return instanse.get("security/get-captcha-url");
  },
};

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
