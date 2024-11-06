let botones = document.querySelectorAll(".accordion");
botones.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        let paneles = document.querySelectorAll(".panel");
        if (paneles[i].style.display === "block") {
            paneles[i].style.display = "none";
        } else {
            paneles[i].style.display = "block";
        }
    });
});
