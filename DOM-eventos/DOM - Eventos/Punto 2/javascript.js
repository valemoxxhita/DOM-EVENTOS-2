let boton = document.querySelector(".dropbtn");
boton.addEventListener("click", () => {
    let contenido = document.querySelector(".dropdown-content");
    contenido.classList.toggle("show");
});
