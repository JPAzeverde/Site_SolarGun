

function toggleMenu() {
    const menu = document.getElementById("menu_xs");
    const menuIcon = document.getElementById("menuIcon_xs");

    // Alterna a classe "active" no menu e no ícone
    menu.classList.toggle("active");
    menuIcon.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.swiper-container', {
        loop: true, // Permite loop infinito
        slidesPerView: 3, // Número de slides visíveis
        spaceBetween: 20, // Espaçamento entre os slides
        navigation: {
            nextEl: '.swiper-button-next', // Botão de próxima
            prevEl: '.swiper-button-prev', // Botão de anterior
        },
        pagination: {
            el: '.swiper-pagination', // Paginação (bolinhas)
            clickable: true,
        },
        autoplay: { // Configuração do autoplay
            delay: 3000, // Tempo em milissegundos (3 segundos)
            disableOnInteraction: false, // Continua após interação do usuário
        },
        breakpoints: {
            // Configurações para telas menores
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });
});