import axios from 'axios'
const url = 'http://89.108.64.67:3000'
const key = '?key=lsadkfjqg9384wfh9a8wehr'

const dbRequest = {
	editOrderById: (id, data) => axios.put(`${url}/order/${id}${key}`, data),
	createOrder: (data) => axios.post(`${url}/order${key}`, data),
	generateOrder: (number) => axios.post( `${url}/generate/${number}${key}`),
	deleteOrderById: (id) => axios.delete(`${url}/order/${id}${key}`),
	getOrderById: (id) => axios.get(`${url}/order/${id}${key}`),
	reinit: () => axios.post( `${url}/reinit${key}`),
	getList: () => axios.get(`${url}/orders${key}`)
}

export default dbRequest

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