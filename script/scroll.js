document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.scroll-animate');
    const cards = document.querySelectorAll(".habilidadesinfo .cards");

    function checkVisibility() {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                element.classList.add('visible');
            }
        });
        
        cards.forEach((card, index) => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                setTimeout(() => {
                    card.classList.add("animate");
                }, index * 300); // Retraso de 300 ms entre cada tarjeta
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Inicializa la visibilidad en caso de que ya esté en pantalla
});
