import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/sfind/all',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/sfind',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/sfind',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/sfind/all',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/sfind',
    method: 'put',
    data
  })
}

export function deleteUser(id) {
  return request({
    url: '/sfind/delete',
    method: 'post',
    params: { id }
  })
}
