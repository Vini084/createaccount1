const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');
const senhaLink = document.querySelector('.senha-link');
const voltarLink = document.querySelector('.voltar-link');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');    
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

senhaLink.addEventListener('click', ()=> {
    wrapper.classList.add('activea');        
});

senhaLink.addEventListener('click', ()=> {
    wrapper.classList.add('activeb');        
});

voltarLink.addEventListener('click', ()=> {
    wrapper.classList.remove('activeb');
});

voltarLink.addEventListener('click', ()=> {
    wrapper.classList.add('activec');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});