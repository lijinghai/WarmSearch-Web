import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/log',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/log',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/log',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/log',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/log',
    method: 'put',
    data
  })
}

export function deleteUser(id) {
  return request({
    url: '/log/delete',
    method: 'post',
    params: { id }
  })
}
