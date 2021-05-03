import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/pcgoodsdetail',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/pcgoodsdetail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/pcgoodsdetail',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/pcgoodsdetail/all',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/pcgoodsdetail',
    method: 'put',
    data
  })
}

export function deleteUser(id) {
  return request({
    url: '/pcgoodsdetail/delete',
    method: 'post',
    params: { id }
  })
}
