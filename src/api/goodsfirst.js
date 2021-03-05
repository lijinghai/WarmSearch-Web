import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/goodsfirst',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/goodsfirst',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/goodsfirst',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/goodsfirst',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/goodsfirst',
    method: 'put',
    data
  })
}

export function deleteUser(id) {
  return request({
    url: '/goodsfirst/delete',
    method: 'post',
    params: { id }
  })
}
