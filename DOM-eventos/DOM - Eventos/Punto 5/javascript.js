function myFunction() {
    let checkbox = document.getElementById("myCheck");
    let texto = document.getElementById("text");
    
    if (checkbox.checked == true) {
        texto.style.display = "block";
    } else {
        texto.style.display = "none";
    }
}
