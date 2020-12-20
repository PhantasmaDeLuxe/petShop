/* //////////   MENU BURGER //////////////////*/

const burgerWrapper = document.querySelector('.burger-wrapper');
const burger = document.querySelector('.top-header__burger');
const body = document.querySelector('.page-body');


burgerWrapper.onclick = function() {
    burger.classList.toggle('top-header__burger-active');
    body.classList.toggle('no-scroll');

}


//******Открыть/закрыть боковое меню по клику на бургер*****//
let modal = document.querySelector('.menu')
let btn = document.querySelector('.myBtn')

btn.onclick = function() {
    if( ! modal.classList.contains('block')) {
        modal.classList.add('block')      
    } else {
        modal.classList.remove('block') 
    }
}
/**** Закрыть боковое меню кликом на свободную область *********/
window.onclick = function(event) {
    if(event.target == modal) {
        modal.classList.remove('block') 
        body.classList.remove('no-scroll')
        burger.classList.remove('top-header__burger-active')
    }
}
/******* Открыть подменю наведением мыши на заголовок ******/
let menuItems = document.querySelectorAll('.menu__item');

for (let index = 0; index < menuItems.length; index++) {
    const menuItem = menuItems[index];
    menuItem.addEventListener("mouseenter", function() {
        menuItem.classList.add('_active');
        for (let subMenu of subMenuAll) {
            subMenu.style.display = 'block'
        }
    });
    
    menuItem.addEventListener("mouseleave", function() {
        menuItem.classList.remove('_active');
    });
    
}

/*********Закрыть подменю кликом на *назад* ****************/
let spans = document.querySelectorAll('.close')
let subMenuAll = document.querySelectorAll('.submenu-page')


for (let index = 0; index < spans.length; index++) {
    const span = spans[index];
    span.onclick = function() {

        for (let index = 0; index < subMenuAll.length; index++) {
            const subMenu = subMenuAll[index];
            subMenu.style.display = 'none'
        }

    }
}

 /* Табы */

const navLinks = document.querySelectorAll('.product-tabs__link')
const tabsItems = document.querySelectorAll('.tabs-block')


navLinks.forEach(onTabClick) 
    
function onTabClick(item) {
    item.addEventListener('click', function (e) {
        e.preventDefault()
        let currentLink = item;
        let tabId = currentLink.getAttribute('data-tab');
        let currentTab =  document.querySelector(tabId);

        if( ! currentLink.classList.contains('active')) {
            navLinks.forEach(function(item) {
                item.classList.remove('active')
            })
            tabsItems.forEach(function(item) {
                item.classList.remove('active')
            })
    
            currentLink.classList.add('active')
            currentTab.classList.add('active')
        } 
    })   
}


/* ************* аккордион в футере ****************** */

const titles = document.querySelectorAll('.list-footer__title')
const lists = document.querySelectorAll('.list-footer__components')

titles.forEach(function(title) {
    title.addEventListener('click', function(e) {
        e.target.classList.toggle('active')
        e.target.nextElementSibling.classList.toggle('active')
    })
})
