(function() {
    var hamburgerButton = document.getElementById("menuImage");
    var body = document.getElementById("body");
    var menu = document.getElementById("menu");
    var x = document.getElementById("close");

    hamburgerButton.addEventListener("click", function(e) {
        console.log("hamburgerButton clicked");
        body.classList.add("on");
        menu.classList.add("movement");
        e.stopPropagation(e);
    }); //function opened and closed

    hamburgerButton.addEventListener("mousedown", function() {
        hamburgerButton.style.border = "solid 1px black";
    });
    console.log("x", x);
    x.addEventListener("click", function(e) {
        console.log("works");
        body.classList.remove("on");
        menu.classList.remove("movement");
        hamburgerButton.style.border = "none";
        e.stopPropagation();
    }); //function opened and closed

    body.addEventListener("click", function(e) {
        body.classList.remove("on");
        menu.classList.remove("movement");
        hamburgerButton.style.border = "none";
        e.stopPropagation();
    }); //function opened and closed

    menu.addEventListener("click", function(e) {
        e.stopPropagation();
    }); //function opened and closed
})(); //function opened and closed
