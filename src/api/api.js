import axios from 'axios'

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      'API-KEY': 'abf932ff-843c-4242-a8c0-7301c7f966d4'
   }
})

export const usersAPI = {
   getUsers(currentPage = 1, pageSize = 10) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
         .then(response => response.data)
   },

   unfollowUser(user) {
      return instance.delete(`follow/${user.id}`)
         .then(response => response.data)
   },

   followUser(user) {
      return instance.post(`follow/${user.id}`, {})
         .then(response => response.data)
   }
}