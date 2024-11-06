let password = document.getElementById("psw");
let message = document.getElementById("message");
let lowercase = document.getElementById("letter");
let uppercase = document.getElementById("capital");
let number = document.getElementById("number");
let lengthMinimo = document.getElementById("length");
let character = document.getElementById("character");

// Expresiones regulares REGEX
let minuscula = /[a-z]/;
let mayuscula = /[A-Z]/;
let numero = /[0-9]/;
let caracteres = /[.,+\-@/;:!#$%&*]/;

// Detecta cuando esté el foco en la contraseña
password.addEventListener("focus", () => {
    console.log("Estoy escribiendo");
    message.style.display = "block"; // MOSTRAR LA RECOMENDACION
});

// Detecta cuando el foco ya no está en la contraseña
password.addEventListener("blur", () => {
    console.log("Ya no estoy escribiendo");
    message.style.display = "none"; // OCULTAR LA RECOMENDACION
});

// Evento para saber qué contraseña escribimos
password.addEventListener("keyup", () => {
    // Validación de minúsculas
    if (password.value.match(minuscula)) {
        lowercase.classList.replace("invalid", "valid");
    } else {
        lowercase.classList.replace("valid", "invalid");
    }

    // Validación de mayúsculas
    if (password.value.match(mayuscula)) {
        uppercase.classList.replace("invalid", "valid");
    } else {
        uppercase.classList.replace("valid", "invalid");
    }

    // Validación de números
    if (password.value.match(numero)) {
        number.classList.replace("invalid", "valid");
    } else {
        number.classList.replace("valid", "invalid");
    }

    //Validación de caracteres
    if (password.value.match(caracteres)) {
        character.classList.replace("invalid", "valid");
    } else {
        character.classList.replace("valid", "invalid");
    }

    // Validación de longitud mínima
    if (password.value.length >= 8) {
        lengthMinimo.classList.replace("invalid", "valid");
    } else {
        lengthMinimo.classList.replace("valid", "invalid");
    }

    console.log(password.value);
});

