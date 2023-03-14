const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const name = nameInput.value;
	const email = emailInput.value;
	const message = messageInput.value;

	emailjs.send('service_a0kq15q', 'template_9aaep1k', {
		from_name: name,
		from_email: email,
		message_html: message
	}, 'kpZXto6dXvxgxjWJ-')
	.then(response => {
		alert('Сообщение успешно отправлено!');
		
		nameInput.value = '';
		emailInput.value = '';
		messageInput.value = '';
	})
	.catch(error => {
		alert('Ошибка при отправке сообщения!');
	});
});
