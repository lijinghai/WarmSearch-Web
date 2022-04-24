import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/suser',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/suser',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/suser',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/suser/add',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/suser',
    method: 'put',
    data
  })
}

export function deleteUser(id) {
  return request({
    url: '/suser/delete',
    method: 'post',
    params: { id }
  })
}
