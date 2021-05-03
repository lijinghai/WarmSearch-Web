import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/pcurgent',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/pcurgent',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/pcurgent',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/pcurgent/all',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/pcurgent',
    method: 'put',
    data
  })
}

export function deleteUser(id) {
  return request({
    url: '/pcurgent/delete',
    method: 'post',
    params: { id }
  })
}
