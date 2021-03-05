import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/teacher',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/teacher',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/teacher',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/teacher',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/teacher',
    method: 'put',
    data
  })
}

export function deleteUser(id) {
  return request({
    url: '/teacher/delete',
    method: 'post',
    params: { id }
  })
}
