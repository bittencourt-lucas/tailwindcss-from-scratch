const tabs = document.querySelectorAll('.tab')
const panels = document.querySelectorAll('.panel')
const btn = document.querySelector('#menu-btn')
const menu = document.querySelector('#menu')
const logo = document.querySelector('#logo')

// Tab menu toggle
function onTabClick(event) {
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      'border-softRed',
      'border-b-4',
      'md:border-b-0',
    )
  })

  panels.forEach((panel) => panel.classList.add('hidden'))

  event.target.classList.add('border-softRed', 'border-b-4')

  const classString = event.target.getAttribute('data-target')
  document.getElementById('panels').getElementsByClassName(classString)[0].classList.remove('hidden')
}

tabs.forEach((tab) => tab.addEventListener('click', onTabClick))

// Hamburger menu toggle
function navToggle() {
  btn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')

  if (menu.classList.contains('flex')) {
    logo.setAttribute('src', './images/logo-bookmark-footer.svg')
  } else {
    logo.setAttribute('src', './images/logo-bookmark.svg')
  }
}

btn.addEventListener('click', navToggle)
