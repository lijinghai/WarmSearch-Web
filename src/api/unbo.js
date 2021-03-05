import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/unbo',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/unbo',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/unbo',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/unbo',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/unbo',
    method: 'put',
    data
  })
}

export function deleteUser(id) {
  return request({
    url: '/unbo/delete',
    method: 'post',
    params: { id }
  })
}
