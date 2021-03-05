import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/goodsdetail/all',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/goodsdetail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/goodsdetail',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/goodsdetail',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/goodsdetail',
    method: 'put',
    data
  })
}

export function deleteUser(id) {
  return request({
    url: '/goodsdetail/delete',
    method: 'post',
    params: { id }
  })
}
