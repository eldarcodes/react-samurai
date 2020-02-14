import * as axios from 'axios'

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  withCredentials: true,
  headers: {
    'API-KEY': 'd782167b-ff37-48fa-b238-38e0d1b9f401'
  }
})

export const usersAPI = {
  getUsers(pageNumber = 1, pageSize = 8) {
    return instance.get(`/users?page=${pageNumber}&count=${pageSize}`)
  },
  authMe() {
    return instance.get(`/auth/me`)
  },
  getProfile(userId) {
    return instance.get(`/profile/${userId}`)
  },
  unfollow(userId) {
    return instance.delete(`/follow/${userId}`)
  },
  follow(userId) {
    return instance.post(`/follow/${userId}`)
  }
}
