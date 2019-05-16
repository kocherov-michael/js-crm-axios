const axios = require('axios')
const url = 'http://89.108.64.67:3000'
const key = '?key=lsadkfjqg9384wfh9a8wehr'

const dbRequest = {
	editOrderById: (id, data, callback) => axiosPut(`/order/${id}`, data, callback),
	createOrder: (data, callback) => axiosPost(`/order`, data, callback),
	generateOrder: (number, callback) => axiosPost(`/generate/${number}`, callback),
	deleteOrderById: (id, callback) => axiosDelete(`/order/${id}`, callback),
	getOrderById: (id, callback) => axiosGet(`/order/${id}`, callback),
	reinit: callback => axiosPost(`/reinit`, callback),
	getList: callback => axiosGet(`/orders`, callback)
}

window.dbRequest = dbRequest

function axiosDelete(path, callback) {
	axios.delete(`${url}${path}${key}`)
	.then(data => callback(data))
}

function axiosPut(path, data, callback) {
	axios.put(`${url}${path}${key}`, data)
		.then(data => callback(data))
}

function axiosPost(path, data, callback) {
	axios.post(`${url}${path}${key}`, data)
		.then(data => callback(data))
}

function axiosGet(path, callback) {
	axios.get(`${url}${path}${key}`)
		.then(result => callback(result.data))
}

// Получить все заказы
// GET /orders

// Получить заказ по ID
// GET /order/:id

// Создать новый заказ
// POST /order body

// Изменить заказ
// PUT /order/:id body

// Удалить заказ
// DELETE /order/:id

// Сброс базы данных
// POST /reinit

// Генерация
// POST /generate/:number