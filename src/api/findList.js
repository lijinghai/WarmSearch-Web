import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/findlist',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/findlist',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/findlist',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/findlist/all',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/findlist',
    method: 'put',
    data
  })
}

export function deleteUser(id) {
  return request({
    url: '/findlist/delete',
    method: 'post',
    params: { id }
  })
}
