import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/electronic',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/electronic',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/electronic',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/electronic',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/electronic',
    method: 'put',
    data
  })
}

export function deleteUser(id) {
  return request({
    url: '/electronic/delete',
    method: 'post',
    params: { id }
  })
}
