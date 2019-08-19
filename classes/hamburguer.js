(function() {
    var hamburgerButton = document.querySelector("#hamburger-Button");
    hamburgerButton.addEventListener("click", function() {
        // this just adds a class in order to activate the new css configurations
        // it is important to make the darkened screen to have the same effect (hide the menu) than clicking on the x inside the menu)
        // remember to stop bubbling, so it won't happen when you click in the white part, only when you click on the darkened screen part
    });
})();
//
// adding a class to your element
//
// var c = document.getElementbyId('cute');
// c.classList.add('funky');
