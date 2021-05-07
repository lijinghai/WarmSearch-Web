import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/pcattestation',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/pcattestation',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/pcattestation',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/pcattestation/all',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/pcattestation',
    method: 'put',
    data
  })
}

export function deleteUser(id) {
  return request({
    url: '/pcattestation/delete',
    method: 'post',
    params: { id }
  })
}
