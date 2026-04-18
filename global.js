console.log('IT’S ALIVE!');

function $$(selector, context = document) {
  return Array.from(context.querySelectorAll(selector));
}
// navLinks = $$("nav a")
// let currentLink = navLinks.find(
//   (a) => a.host === location.host && a.pathname === location.pathname,

// );
// currentLink?.classList.add('current');
let pages = [
  { url: '', title: 'Home' },
  { url: 'projects/', title: 'Projects' },
  // add the rest of your pages here
  { url: 'resume/', title: 'Resume' },
  { url: 'contact/', title: 'Contact'},
  { url: 'https://github.com/jaredp05', title: 'Github'}
];
let nav = document.createElement('nav');
document.body.prepend(nav);
const BASE_PATH = (location.hostname === "localhost" || location.hostname === "127.0.0.1")
  ? "/"
  : "/website/";

for (let p of pages) {
  let url = p.url;
  let title = p.title;

  // Fix URL BEFORE using it
  if (!url.startsWith('http')) {
    url = BASE_PATH + url;
  }

   let a = document.createElement('a');
   a.href = url;
   a.textContent = title;
   nav.append(a);
   if (a.host === location.host && a.pathname === location.pathname) {
        a.classList.add('current');
}
}
document.body.insertAdjacentHTML(
  'afterbegin',
  `
    <label class="color-scheme">
      Theme:
      <select>
        <option value="light dark">Automatic</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </label>
  `
);

const themeSwitcher = document.querySelector('.color-scheme select');

themeSwitcher.addEventListener('input', function (event) {
  console.log('color scheme changed to', event.target.value);
  document.documentElement.style.setProperty('color-scheme', event.target.value);
});
function setColorScheme(colorScheme) {
  document.documentElement.style.setProperty('color-scheme', colorScheme);
  themeSwitcher.value = colorScheme;
}

if ('colorScheme' in localStorage) {
  setColorScheme(localStorage.colorScheme);
}

themeSwitcher.addEventListener('input', function (event) {
  const colorScheme = event.target.value;
  setColorScheme(colorScheme);
  localStorage.colorScheme = colorScheme;
});