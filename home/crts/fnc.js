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



