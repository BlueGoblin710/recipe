document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');

    searchInput.addEventListener('keyup', () => {
        const query = searchInput.value.toLowerCase();
        const elements = document.querySelectorAll('body *:not(#search-input):not(svg)');

        elements.forEach(element => {
            element.style.backgroundColor = '';
        });

        if (query) {
            elements.forEach(element => {
                if (element.textContent.toLowerCase().includes(query)) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    element.style.backgroundColor = 'yellow';
                }
            });
        }
    });
});