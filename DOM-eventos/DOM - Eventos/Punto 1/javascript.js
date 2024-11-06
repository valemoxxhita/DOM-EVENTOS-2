let boton = document.querySelector(".icon");
console.log(boton);
boton.addEventListener("click", () => {
    let menu = document.querySelector("#myNavbar");
    // console.log(menu);
    menu.classList.toggle("responsive");
});
