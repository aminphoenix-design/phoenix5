document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("¡Gracias por contactarnos! Te responderemos pronto.");
        form.reset();
    });
});
