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