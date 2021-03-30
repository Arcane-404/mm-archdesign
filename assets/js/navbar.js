const $navbar = $('.navbar');
const $navbarBtn = $('.navbar-btn');
const $navMenus = $$('.nav-menu');
const $contacts = $$('.contact-item a');

/* Navbar Toggle - Mobile */

const allEvents = ['mouseup', 'keyup', 'resize'];
allEvents.forEach(listener => window.addEventListener(listener, handleNavEvents))

function handleNavEvents (e) {
  e.preventDefault()

  const toggleNavMenu = () => {
    $navbar.classList.toggle('navbar-active')
    $navbarBtn.classList.toggle('navbar-active')
  };

  const isActive = $navbar.classList.contains('navbar-active');
  const isCloseCaret = e.target === $navbar.querySelector('.navbar-caret');
  const isOpenCaret = e.target === $navbarBtn.querySelector('.navbar-btn-caret');
  const isClickedOutside = e.target !== window && !$navbar.contains(e.target);
  const [ESCAPE, DESKTOP] = [27, 800];

  if (e.type === 'mouseup' && isOpenCaret) return toggleNavMenu();
  if (!isActive) return;
  if (e.type === 'mouseup' && isCloseCaret) return toggleNavMenu();
  if (e.type === 'mouseup' && isClickedOutside) return toggleNavMenu();
  if (e.type === 'keyup' && e.keyCode === ESCAPE) return toggleNavMenu();
  if (e.type === 'resize' && window.innerWidth >= DESKTOP) return toggleNavMenu();
}

/* Copy to Clipboard */

$contacts.forEach(contact => contact.addEventListener('click', handleCopyEvent))

function handleCopyEvent (e) {
  const [contact,original,value] = [
    e.target, e.target.textContent, e.target.dataset.value
  ];

  const isMobile = window.matchMedia('(max-width: 800px)').matches;
  if (isMobile) {
    const pre = (contact.id === 'email') ? 'mailto' : 'tel';
    return window.location.href = `${pre}:${value}`;
  }

  const copyHandler = (ev) => {
    ev.preventDefault()
    ev.clipboardData.setData('text/plain', value)
  };

  const resetChange = () => {
    document.removeEventListener('copy', copyHandler)
    // contact.textContent = original;
    contact.classList.remove('success')
    contact.removeAttribute('disabled')
  };

  document.addEventListener('copy', copyHandler)
  document.execCommand('copy')
  // contact.textContent = 'Copied!';
  contact.classList.add('success')
  contact.setAttribute('disabled', '') 
  setTimeout(resetChange, 1200)
}