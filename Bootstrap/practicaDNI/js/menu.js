document.addEventListener('DOMContentLoaded', function () {
    /* Guardamos los elementos HTML para luego trabajar con ellos */
    const boton = document.getElementById('btnMenuMovil');
    const fondoEnlace = document.getElementById('fondoEnlace');
    const barraLateral = document.getElementById('barraLateralIzquierda');

    if (boton) {
        /* Cuando se haga click en el boton menu */
        boton.addEventListener('click', function (e) {
            e.preventDefault();
            /* Añadimos o quitamos la clase CSS active
               al fondo y la barra lateral */
            fondoEnlace.classList.toggle('active');
            barraLateral.classList.toggle('active');
        });
    }

    /* Lo mismo pero cuando se pulsa el fondo del menu para cerrarlo */
    if (fondoEnlace) {
        fondoEnlace.addEventListener('click', function (e) {
            e.preventDefault();
            fondoEnlace.classList.toggle('active');
            barraLateral.classList.toggle('active');
        });
    }

    document.querySelectorAll(".btnFlip").forEach((btn) => {
        btn.addEventListener("click", () => {
            const flipCard = btn.closest(".flipCard");
            if (flipCard) flipCard.classList.add("isFlipped");
        });
    });

    document.querySelectorAll(".btnFlipBack").forEach((btn) => {
        btn.addEventListener("click", () => {
            const flipCard = btn.closest(".flipCard");
            if (flipCard) flipCard.classList.remove("isFlipped");
        });
    });
});


