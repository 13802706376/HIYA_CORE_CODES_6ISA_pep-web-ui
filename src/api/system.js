import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/table/list',
    method: 'get',
    params
  })
}

export function getMenus() {
    return request({
      url: '/sys/memus',
      method: 'get',
    })
}

export function getMenu(id) {
    return request({
      url: `/sys/memu/form/${id}`,
      method: 'get',
    })
}

export function updateMenu(data) {
    return request({
      url: '/sys/memu',
      method: 'post',
      data
    })
}


export function saveMenu(data) {
    return request({
      url: '/sys/memu',
      method: 'post',
      data
    })
}

export function deleteMenu(id) {
    return request({
      url: `/sys/memu/${id}`,
      method: 'delete',
    })
}
