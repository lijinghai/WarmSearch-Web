import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/pccarousel',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/pccarousel',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/pccarousel',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/pccarousel/all',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/pccarousel',
    method: 'put',
    data
  })
}

export function deleteUser(id) {
  return request({
    url: '/pccarousel/delete',
    method: 'post',
    params: { id }
  })
}
