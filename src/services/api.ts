import request from '../utils/request'
const BASE_URL = 'http://localhost:3000'

export const getArticleList = () => {
  return request.get(`${BASE_URL}/getArticleList`)
}
