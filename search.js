document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');

    searchInput.addEventListener('keyup', () => {
        const query = searchInput.value.toLowerCase();
        const elements = document.querySelectorAll('body *:not(#search-input):not(svg)');

        // Remove previous highlights
        document.querySelectorAll('.highlight').forEach(el => {
            const parent = el.parentNode;
            parent.replaceChild(document.createTextNode(el.textContent), el);
            parent.normalize();
        });

        if (query) {
            for (let element of elements) {
                if (element.textContent.toLowerCase().includes(query)) {
                    highlightText(element, query);
                    document.querySelector('.highlight').scrollIntoView({ behavior: 'smooth', block: 'center' });
                    break;
                }
            }
        }
    });

    function highlightText(element, query) {
        const regex = new RegExp(`(${query})`, 'gi');
        element.innerHTML = element.innerHTML.replace(regex, '<span class="highlight">$1</span>');
    }
});