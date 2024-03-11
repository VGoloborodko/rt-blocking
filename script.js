// const faqItem = document.querySelectorAll('.faq__item');

// faqItem.forEach(elem => {
//     elem.addEventListener('click', () => {

//         if (elem.dataset.state == 'close') {
//             elem.lastElementChild.lastElementChild.classList.add('faq__description-click');
//             elem.lastElementChild.firstElementChild.classList.add('faq__subtitle-click');
//             elem.firstElementChild.classList.add('faq__icon-click');
//             elem.dataset.state = 'open';

//         } else if (elem.dataset.state == 'open') {
//             elem.lastElementChild.lastElementChild.classList.remove('faq__description-click');
//             elem.lastElementChild.firstElementChild.classList.remove('faq__subtitle-click');
//             elem.firstElementChild.classList.remove('faq__icon-click');
//             elem.dataset.state = 'close';
//         }
//     })
// })

const btn = document.querySelector('.button-mobile');
const shadow = document.querySelector('.page-shadow');
const popup = document.querySelector('.popup');
const btnClose = document.querySelector('.popup__close');

btn.addEventListener('click', (e) => {
    e.preventDefault()
    shadow.classList.add('page-shadow-active');
    popup.classList.add('popup-active');
})

shadow.addEventListener('click', () => {
    shadow.classList.remove('page-shadow-active');
    popup.classList.remove('popup-active');
})

btnClose.addEventListener('click', () => {
    shadow.classList.remove('page-shadow-active');
    popup.classList.remove('popup-active');
})