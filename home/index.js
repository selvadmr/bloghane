
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const sidebar = document.querySelector(".sidebar");
    const menuIcon = menuBtn.querySelector("i");

    if (menuBtn && sidebar) {
        menuBtn.addEventListener("click", function () {
            sidebar.classList.toggle("active");

            if (sidebar.classList.contains("active")) {
                menuIcon.classList.remove("ph-caret-right");
                menuIcon.classList.add("ph-caret-left");
            } else {
                menuIcon.classList.remove("ph-caret-left");
                menuIcon.classList.add("ph-caret-right");
            }
        });
    }

    const buttons = document.querySelectorAll('nav ul li a');

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
            button.style.transform = "scale(1.05)";
            button.style.transition = "all 0.2s ease";
        });

        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = "transparent";
            button.style.transform = "scale(1)";
        });
    });
});
const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('change', function() {
    if (this.checked) {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});
document.querySelectorAll('.btn-light').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Sayfa yenilenmesini engelle

        const category = this.getAttribute('data-category');
        const encodedCategory = encodeURIComponent(category);
        const url = `cards.html?category=${encodedCategory}`;

        window.location.href = url; // Yönlendirme yap
    });
});

// yumuşak geçiş
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});