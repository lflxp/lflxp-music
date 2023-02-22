import axios from 'axios'
import Vue from 'vue'

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API_URL_LOCAL
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
      error.response ? error.response.data.message : error.message
    )
    return error
  }
)

// 获取音乐历史
export function getHistoryList() {
  return request.get('/api/music/history/list')
}

// 添加音乐历史
export function addtHistoryList(data) {
  return request.post('/api/music/history/add', {
    param: {
      data: data
    }
  })
}

// 删除音乐历史
export function deltHistoryList(id) {
  return request.delete('/api/music/history/delete?id=' + id)
}

// 本地音乐
export function localList() {
  return request.get('/api/music/local/list')
}

// 远程下载
export function download(data) {
  return request.post('/api/music/local/download', {
    param: {
      data: data
    }
  })
}
