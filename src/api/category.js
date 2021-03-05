import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/category/all',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/category',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/category',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/category',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/category',
    method: 'put',
    data
  })
}

export function deleteUser(id) {
  return request({
    url: '/category/delete',
    method: 'post',
    params: { id }
  })
}
