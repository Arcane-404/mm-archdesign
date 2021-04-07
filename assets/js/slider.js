document.addEventListener('DOMContentLoaded', () => {
  const { protocol,host,pathname } = window.location
  const refresh = protocol  + "//" + host + pathname
  window.history.replaceState(null, null, refresh)
})

const prevBtn = '<img src="./assets/images/left-caret.svg" alt="prev" />';
const nextBtn = '<img src="./assets/images/right-caret.svg" alt="next" />';

$('.owl-carousel').owlCarousel({
  items:1,
  loop:true,
  dots: false,
  nav:true,
  navText : [prevBtn,nextBtn],
  URLhashListener:true,
  startPosition: 'URLHash',
  responsive:{
    0:{ items:1 },
    600:{ items:1 },
    700:{ items:1 },
    800:{ items:1 },
    900:{ items:1 },
    1000:{ items:1 }
  }
})