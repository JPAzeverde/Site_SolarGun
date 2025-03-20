// Inicializar o Swiper
const swiper = new Swiper('.swiper-container', {
    loop: true, // Loop infinito
    slidesPerView: 1, // Quantidade de slides visíveis
    spaceBetween: 16, // Espaço entre os slides
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        // Responsividade
        768: {
            slidesPerView: 2, // 2 slides em telas maiores
        },
        1024: {
            slidesPerView: 3, // 3 slides em telas ainda maiores
        },
    },
});