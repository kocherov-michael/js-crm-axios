import dbRequest from './request'

document
	.querySelector('[data-reinit]')
	.addEventListener('click', async function (event) {
		event.stopPropagation()
		await dbRequest.reinit()
		location.replace('index.html')
	})