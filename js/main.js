const sendBtn = document.querySelector('.contact-form__submit')
const firstName = document.querySelector('.contact-form__first-name')
const lastName = document.querySelector('.contact-form__last-name')
const emailAddress = document.querySelector('.contact-form__email')
const password = document.querySelector('.contact-form__password')
const filter =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const showFirstNameError = () => {
	//function set input to error mode
	const msgFirstName = firstName.nextElementSibling
	msgFirstName.classList.add('p-active')
	firstName.classList.add('input-active')
}

const clearFirstNameError = () => {
	//function set input to default mode
	const msgFirstName = firstName.nextElementSibling
	msgFirstName.classList.remove('p-active')
	firstName.classList.remove('input-active')
}

const showLastNameError = () => {
	//function set input to error mode
	const msgLastName = lastName.nextElementSibling
	msgLastName.classList.add('p-active')
	lastName.classList.add('input-active')
}

const clearLastNameError = () => {
	//function set input to default mode
	const msgLastName = lastName.nextElementSibling
	msgLastName.classList.remove('p-active')
	lastName.classList.remove('input-active')
}

const showEmailError = () => {
	//function set input to error mode
	const msgEmail = emailAddress.nextElementSibling
	msgEmail.classList.add('p-active')
	emailAddress.classList.add('input-active')
}

const clearEmailError = () => {
	//function set input to default mode
	const msgEmail = emailAddress.nextElementSibling
	msgEmail.classList.remove('p-active')
	emailAddress.classList.remove('input-active')
}

const showPasswordError = () => {
	//function set input to error mode
	const msgPassword = password.nextElementSibling
	msgPassword.classList.add('p-active')
	password.classList.add('input-active')
}

const clearPasswordError = () => {
	//function set input to default mode
	const msgPassword = password.nextElementSibling
	msgPassword.classList.remove('p-active')
	password.classList.remove('input-active')
}

const checkFirstNameError = () => {
	// function checks if input is empty, if true than display error mode, else set input to default mode
	if (firstName.value === '') {
		showFirstNameError()
	} else {
		clearFirstNameError()
	}
}

const checkLastNameError = () => {
	// function checks if input is empty, if true than display error mode, else set input to default mode
	if (lastName.value === '') {
		showLastNameError()
	} else {
		clearLastNameError()
	}
}

const checkEmailError = () => {
	// function checks if input is empty, if true than display error mode, else set input to default mode
	// function checks if email is properly written, reffering to declared filter (regexp)
	if (emailAddress.value === '' || !filter.test(emailAddress.value)) {
		showEmailError()
	} else {
		clearEmailError()
	}
}

const checkPasswordError = () => {
	// function checks if input is empty, if true than display error mode, else set input to default mode
	if (password.value === '') {
		showPasswordError()
	} else {
		clearPasswordError()
	}
}

const clearInputs = () => {
	//function checks if inputs dont contain error classes, if not, it clears input and log data after submitting

	if (
		!firstName.classList.contains('input-active') &&
		!lastName.classList.contains('input-active') &&
		!emailAddress.classList.contains('input-active') &&
		!password.classList.contains('input-active')
	) {
		console.log(firstName.value, lastName.value, emailAddress.value, password.value)
		firstName.value = ''
		lastName.value = ''
		emailAddress.value = ''
		password.value = ''
	}
}

sendBtn.addEventListener('click', e => {
	e.preventDefault()
	checkFirstNameError()
	checkLastNameError()
	checkEmailError()
	checkPasswordError()
	clearInputs()
})
