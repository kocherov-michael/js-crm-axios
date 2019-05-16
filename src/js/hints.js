const buttonReinit = document.querySelector('[data-reinit]')
if (buttonReinit) {
	buttonReinit.addEventListener('click', buttonReinitClickHandler)
}
function buttonReinitClickHandler (event) {
	event.stopPropagation()
	
	dbRequest.reinit (() => location.replace('index.html'))
}
