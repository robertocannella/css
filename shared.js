let modal = document.getElementById('modal');
let backdrop = document.getElementById('backdrop');
let buttons = document.getElementsByClassName('btn plan');
let modalNo = document.getElementById('modal-no');
let toggleBtn = document.getElementById('toggle-button');
let mobileNav = document.getElementById('mobile-nav')

let isOpen = false;

for (let button of buttons) {
    button.addEventListener('click', () => {
        modal.style.display = 'table';
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
    console.log('clicked toggle');
})

backdrop.addEventListener('click', () => {
    mobileNav.classList.remove('open')
    closeModal();
})
if (modalNo)
    modalNo.addEventListener('click', closeModal);

function closeModal() {
    if (modal)
        modal.style.display = 'none';
    backdrop.classList.remove('open');
}

function togglelMobileNav() {
    if (mobileNav.classList.contains('slide-out')) {
        backdrop.classList.remove('open')
        mobileNav.classList.remove('slide-out')
        toggleBtn.children[0].classList.add('fa-bars')
        toggleBtn.children[0].classList.remove('fa-xmark')

    } else {
        backdrop.classList.add('open');
        mobileNav.classList.add('slide-out');
        toggleBtn.children[0].classList.remove('fa-bars')
        toggleBtn.children[0].classList.add('fa-xmark')

    }
}