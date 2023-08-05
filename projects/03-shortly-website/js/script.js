const input = document.getElementById('link-input')
const linkForm = document.getElementById('link-form')
const errorMessage = document.getElementById('error-message')
const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

// Validate URL
const isURLValid = (url) => {
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/
  return urlRegex.test(url)
}

const formSubmit = (e) => {
  e.preventDefault()

  if (input.value === '') {
    errorMessage.innerHTML = 'Please enter a link'
    input.classList.add('border-red')
  } else if (!isURLValid(input.value)) {
    errorMessage.innerHTML = 'Please enter a valid link'
    input.classList.add('border-red')
  } else {
    errorMessage.innerHTML = ''
    input.classList.remove('border-red')
    alert('Success!')
  }
}

const navToggle = () => {
  btn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')
}

linkForm.addEventListener('submit', formSubmit)
btn.addEventListener('click', navToggle)
