const btnBurger = document.querySelector('.header__burger')
const burgerList = document.querySelector('.header__wrapper-additional')
const headerMain = document.querySelector('.header__wrapper-main')
const headerIconLogin = document.querySelector('.header__login')

btnBurger.addEventListener('click', ()=>{
        btnBurger.classList.toggle('header__burger_active')
        burgerList.classList.toggle('header__wrapper-additional_active')
        headerMain.classList.toggle('header__wrapper-main_active')
        headerIconLogin.classList.toggle('header__login_active')
})

const btnSearch = document.querySelector('.header__search')
const headerSearch = document.querySelector('.header__search-field')

btnSearch.addEventListener('click', ()=>{
        headerSearch.classList.toggle('header__search-field_active')
})

const btnLogin = document.querySelector('.header__login')
const popupLogin = document.querySelector('.popup__profile')

btnLogin.addEventListener('click', ()=>{
        popupLogin.classList.add('popup_active')
})

const btnClosePopup = document.querySelector('.popup__close')

function closePopup(){
        popupLogin.classList.remove('popup_active')
}

btnClosePopup.addEventListener('click', closePopup)

const btnCity = document.querySelector('.header__burger-city')
const popupCity = document.querySelector('.popup__city')

btnCity.addEventListener('click', ()=>{
        popupCity.classList.add('popup_active')
})