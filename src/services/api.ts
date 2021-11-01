import request from '../utils/request'

// const BASE_URL = 'http://localhost:3000'
const BASE_URL = ''

export const getArticleList = () => {
  return request.get(`${BASE_URL}/article/list`)
}

export const getArticleDetail = (id: string) => {
  return request.get(`${BASE_URL}/article/detail`, { id })
}
