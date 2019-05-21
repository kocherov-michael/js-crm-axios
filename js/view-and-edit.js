import dbRequest from './request'

// Получение id заказа
const orderId = new URLSearchParams(window.location.search).get('id')

main ()
async function main () {
	// Инициализация данных форм после запроса с сервера
	const {data} = await dbRequest.getOrderById(orderId)
	document.querySelector('[data-order-id]').textContent = data.id
	document.querySelector('[data-order-good]').value = data.good
	document.querySelector('[data-order-client-name]').value = data.clientName
	document.querySelector('[data-new-order-price]').value = data.price

	document
		.querySelector('[data-order-requestStatus]')
		.options[data.requestStatus]
		.setAttribute('selected', 'selected')

	document
		.querySelector('[data-order-paymentStatus]')
		.options[data.paymentStatus]
		.setAttribute('selected', 'selected')

	// Иноициализация кнопки сохранения изменений
	document
		.querySelector('[data-order-save]')
		.addEventListener('click', async function (event) {
			event.stopPropagation()

			await dbRequest.editOrderById(orderId, getOrderData())
			location.replace('index.html')
		})

	// Инициализация кнопки удаления заказа
	document
		.querySelector('[data-order-delete]')
		.addEventListener('click', async function (event) {
			event.stopPropagation()

			await dbRequest.deleteOrderById(orderId)
			location.replace('index.html')
		})
}



// Формирование объекта отредактированного товара
function getOrderData () {
	const orderData = {
		requestStatus: parseInt(document.querySelector('[data-order-requestStatus]').value) || 0,
		paymentStatus: parseInt(document.querySelector('[data-order-paymentStatus]').value) || 0,
		clientName: document.querySelector('[data-order-client-name]').value || 'NotName',
		price: parseInt(document.querySelector('[data-new-order-price]').value) || 0,
		good: document.querySelector('[data-order-good]').value || 'NotGood'
	}

	return orderData
}
