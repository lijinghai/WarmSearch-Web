import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/pcrecent',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/pcrecent',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/pcrecent',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/pcrecent/all',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/pcrecent',
    method: 'put',
    data
  })
}

export function deleteUser(id) {
  return request({
    url: '/pcrecent/delete',
    method: 'post',
    params: { id }
  })
}
