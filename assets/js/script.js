//CONFIGURAÇÃO DO MENU HAMBURGUE P/ APARECER E ESCONDER
//declaracao de variavel quevai receber o comando de abrir e fechar
//recebendo valores de id e class
//menu.onclick = quando clicar no #menu-bar (verificar)
//navbar.classList.toggle('active'); -> css regra para "active"
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');


//abrir o menu
menu.onclick = () => {

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};


//fechar o menu
menu.onscroll = () => {

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

//botão de rolagem para cima
    if(window.scrollY > 60){
        document.querySelector('#scroll-top').classList.add('active');
    }else{
        document.querySelector('#scroll-top').classList.remove('active');
    }

};

