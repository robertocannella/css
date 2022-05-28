let modal = document.getElementById('modal');
let backdrop = document.getElementById('backdrop');
let buttons = document.getElementsByClassName('btn plan');
let modalNo = document.getElementById('modal-no');
let toggleBtn = document.getElementById('toggle-button');
let mobileNav = document.getElementById('mobile-nav')
let isOpen = false;

for (let button of buttons) {
    button.addEventListener('click', () => {
        modal.classList.add('open');
        backdrop.classList.add('open');
    })
}

mobileNav.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    backdrop.classList.remove('open')
    isOpen = !isOpen;
})
toggleBtn.addEventListener('click', () => {
    togglelMobileNav();
})

backdrop.addEventListener('click', () => {
    mobileNav.classList.remove('open')
    closeModal();
})
if (modalNo)
    modalNo.addEventListener('click', closeModal);

function closeModal() {
    if (modal)
        modal.classList.remove('open');
    backdrop.classList.remove('open');
}

function togglelMobileNav() {
    if (mobileNav.classList.contains('open')) {
        backdrop.classList.remove('open')
        mobileNav.classList.remove('open')
    } else {
        backdrop.classList.add('open');
        mobileNav.classList.add('open');

    }
}