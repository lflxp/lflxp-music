import router from '@/router'
import axios from 'axios'
import Vue from 'vue'

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API_URL
})

request.interceptors.response.use(
  (response) => {
    window.response = response

    if (response.status === 200 || response.data.code === 200) {
      return response.data
    }
    return Promise.reject(response)
  },
  (error) => {
    Vue.prototype.$mmToast(
      error.response ? error.response.errorMessage : error.errorCode
    )
    if (error.response.status === 401) {
      window.location.href = '/login'
    } else {
      return error
    }
  }
)

export default request
