const switchRef = document.querySelector('.theme-switch__toggle')
const bodyRef = document.querySelector('body')

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

switchRef.addEventListener('change', changeTheme)
switchRef.addEventListener('change', localStr)


function changeTheme(e) {
    const check = switchRef.checked;

  if (check) {
    bodyRef.classList.add(Theme.DARK);
    bodyRef.classList.remove(Theme.LIGHT);
  } else {
    bodyRef.classList.add(Theme.LIGHT);
    bodyRef.classList.remove(Theme.DARK);
  }
}
function localStr() {
    const check = switchRef.checked;
    if (check) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

const themeStorage = localStorage.getItem('theme');

if (themeStorage === Theme.DARK) {
  bodyRef.classList.add(Theme.DARK);
  switchRef.checked = true;
}