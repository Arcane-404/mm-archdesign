document.addEventListener('DOMContentLoaded', () => {
  const { pathname } = window.location
  if (pathname === '/index.html') {
    const path = pathname.replace(/(index)|\.html$/g, '')
    window.history.replaceState(null, null, path)
  }
})

const $ = (elm) => document.querySelector(elm);
const $$ = (elm) => document.querySelectorAll(elm);
const print = console.log;

const $imgTags = $$('[name="home"],[name="portfolio"],[name="press"]');
// print($imgTags)

const PATH = window.location.pathname;
// print(PATH)

const LINK = 'https://source.unsplash.com/random/';
let SIZE;
let QUERY;

if (PATH === '/portfolio.html' || PATH === '/--portfolio.html') {
  SIZE = '800x600'; QUERY = '?building,city';
}
if (PATH === '/press.html' || PATH === '/press-1.html') {
  SIZE = '600x400'; QUERY = '?newspaper,article';
}

const URL = LINK + SIZE + QUERY;
// print(URL)
$imgTags.forEach(img => img.src = URL)
