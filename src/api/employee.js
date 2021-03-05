import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/user',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/user',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/user',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/user',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/user',
    method: 'put',
    data
  })
}

export function deleteUser(id) {
  return request({
    url: '/user/delete',
    method: 'post',
    params: { id }
  })
}
