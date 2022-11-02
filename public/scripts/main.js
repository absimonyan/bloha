const menuButton = document.getElementById("check");
const mobileMenu = document.querySelector(".nav__search__buttons");
menuButton.addEventListener("click", () => {
    if (menuButton.checked) {
        mobileMenu.style.right = "0px";
    } else {
        mobileMenu.style.right = "-100%";
    }
})