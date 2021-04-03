const $navbar = document.querySelector('.navbar')
const $navbarBtn = document.querySelector('.navbar-btn')
const $navMenus = document.querySelectorAll('.nav-menu')
const $contacts = document.querySelectorAll('.contact-item a')

/* Navbar Toggle - Mobile */

const allEvents = ['mouseup', 'keyup', 'resize']
allEvents.forEach(listener => window.addEventListener(listener, handleNavEvents))

function handleNavEvents (e) {
  e.preventDefault()

  const toggleNavMenu = () => {
    $navbar.classList.toggle('navbar-active')
    $navbarBtn.classList.toggle('navbar-active')
  }

  const isActive = $navbar.classList.contains('navbar-active')
  const isCloseCaret = e.target === $navbar.querySelector('.navbar-caret')
  const isOpenCaret = e.target === $navbarBtn.querySelector('.navbar-btn-caret')
  const isClickedOutside = e.target !== window && !$navbar.contains(e.target)
  const [ESCAPE, DESKTOP] = [27, 900]

  if (e.type === 'mouseup' && isOpenCaret) return toggleNavMenu()
  if (!isActive) return
  if (e.type === 'mouseup' && isCloseCaret) return toggleNavMenu()
  if (e.type === 'mouseup' && isClickedOutside) return toggleNavMenu()
  if (e.type === 'keyup' && e.keyCode === ESCAPE) return toggleNavMenu()
  if (e.type === 'resize' && window.innerWidth >= DESKTOP) return toggleNavMenu()
}

/* Copy to Clipboard */

$contacts.forEach(contact => contact.addEventListener('click', handleCopyEvent))

function handleCopyEvent (e) {
  e.preventDefault()
  const [contact, original] = [e.target, e.target.textContent]
  const [PHONE, EMAIL] = ['415-271-7595','maryam@monsef-design.com']
  const pre = (contact.id === 'email') ? 'mailto' : 'tel'
  const value = (contact.id === 'email') ? EMAIL : PHONE

  const isMobile = window.matchMedia('(max-width: 900px)').matches
  if (isMobile) return window.location.href = `${ pre }:${ value }`

  const copyHandler = (ev) => {
    ev.preventDefault(); ev.clipboardData.setData('text/plain', value)
  }

  const resetChange = () => {
    document.removeEventListener('copy', copyHandler)
    contact.textContent = original
    contact.classList.remove('success')
    contact.removeAttribute('disabled')
  }

  document.addEventListener('copy', copyHandler)
  document.execCommand('copy')
  contact.textContent = 'Copied!'
  contact.classList.add('success')
  contact.setAttribute('disabled', '') 
  setTimeout(resetChange, 1200)
}