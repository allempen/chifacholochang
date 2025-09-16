let scrolled = false;

window.addEventListener("scroll", function () {
    if (!scrolled && window.scrollY > 50) {
        scrolled = true;
        document.getElementsByClassName("contenedor-informacion")[0].scrollIntoView({
            behavior: "smooth"
        });
    }
});
