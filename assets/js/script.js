const $imgTags = $$('[name="home"],[name="portfolio"],[name="press"]');
// print($imgTags)

const PATH = window.location.pathname;
// print(PATH)

const LINK = 'https://source.unsplash.com/random/';
let SIZE;
let QUERY;

if (PATH === '/' || PATH === '/index.html') {
  SIZE = '1920x1080'; QUERY = '?architecture,skyscraper';
}
if (PATH === '/portfolio.html' || PATH === '/portfolio-1.html') {
  SIZE = '800x600'; QUERY = '?building,city';
}
if (PATH === '/press.html' || PATH === '/press-1.html') {
  SIZE = '600x400'; QUERY = '?newspaper,article';
}

const URL = LINK + SIZE + QUERY;
// print(URL)
$imgTags.forEach(img => img.src = URL)
