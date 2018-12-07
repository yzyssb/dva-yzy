import request from '../utils/request'
import { PAGE_SIZE } from '../constants'

export function queryUsers() {
    return request('/api/users')
}

export function fetch({page,size}) {
    return request(`/api/users?_page=${page}&_limit=${size}`)
}

export function create(values) {
    return request('/api/users', {
        methods: 'POST',
        data: JSON.stringify(values)
    })
}

export function patch({ id, values }) {
    return request(`/api/users/${id}`, {
        methods: 'PATCH',
        data: JSON.stringify(values)
    })
}

export function remove({ id }) {
    return request(`/api/users/${id}`, {
        methods: 'DELETE'
    })
}