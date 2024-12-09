// script.js
document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Mahasiswa Biologi berhasil dimuat!");

    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjust for header height if needed
                    behavior: "smooth"
                });
            }
        });
    });
});
