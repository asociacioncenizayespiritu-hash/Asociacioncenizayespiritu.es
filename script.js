document.addEventListener("DOMContentLoaded", () => {

    const titulo = document.querySelector("h1");
    const boton = document.querySelector(".boton");

    titulo.animate(
        [
            {opacity:0, transform:"translateY(60px)"},
            {opacity:1, transform:"translateY(0px)"}
        ],
        {
            duration:1800,
            fill:"forwards"
        }
    );

    boton.animate(
        [
            {opacity:0},
            {opacity:1}
        ],
        {
            delay:1000,
            duration:1500,
            fill:"forwards"
        }
    );

});
