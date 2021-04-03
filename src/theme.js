const switchRef = document.querySelector('.theme-switch__toggle')
const bodyRef = document.querySelector('body')

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

switchRef.addEventListener('change', changeTheme)
switchRef.addEventListener('change', localStr)

// Зміна теми на сторінці

function changeTheme() {
  const check = switchRef.checked;
  if (check){
    themeClassListCheck(Theme.DARK, Theme.LIGHT)
} else {
    themeClassListCheck(Theme.LIGHT, Theme.DARK)
  }
}

function themeClassListCheck(addClass, remClass) {
  bodyRef.classList.add(addClass)
  bodyRef.classList.remove(remClass)
}

// Збереження вибраної теми в локальну пам'ять

function localStr() {
    const check = switchRef.checked;
    if (check) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

const themeStorage = localStorage.getItem('theme');

if (themeStorage === Theme.DARK) {
  bodyRef.classList.add(Theme.DARK);
  switchRef.checked = true;
}