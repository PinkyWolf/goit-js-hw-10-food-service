import listTemplate from "../src/handlebars/card.hbs"
import menuCard from "../src/menu.json"
import './styles.css';

const menuRef = document.querySelector('.js-menu')

const menuMarkup = createMenu(menuCard)

menuRef.innerHTML = menuMarkup

function createMenu(menuCard) {
return menuCard.map(listTemplate).join('')
}