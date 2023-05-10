const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}


if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
var homeSswiper = new Swiper('.home-swiper', {
    spacrBetween: 30,
    loop: 'true',   
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
})

const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[content]');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.target)
            tabContents.forEach((tabContent) => {
                tabContent.classList.remove('active-tab')
            })

            target.classList.add('active-tab')

            tabs.forEach((tab) => {
                tab.classList.remove('active-tab')
            })

            tab.classList.add('active-tab')
        })
})

function scrollUp() {
 const scrollUp = document.getElementById('scroll-up')

 if (this.scrollY >= 350) scrollUp.classList.add('show-scroll')
 else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)