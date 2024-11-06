let openBotton = document.querySelector(".openbtn");
let sidebar = document.querySelector(".sidebar");
openBotton.addEventListener("click", function() { 
    sidebar.style.left = "0"; 
});

let closeBotton = document.querySelector(".closebtn")
closeBotton.addEventListener("click", function() { 
    sidebar.style.left = "-200px"; 
});
