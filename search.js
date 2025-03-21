document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');

    searchInput.addEventListener('keyup', () => {
        const query = searchInput.value.toLowerCase();
        const elements = document.querySelectorAll('body *:not(#search-input):not(svg):not(script):not(style)');

        if (query) {
            for (let element of elements) {
                if (element.nodeType === Node.ELEMENT_NODE) {
                    for (let child of element.childNodes) {
                        if (child.nodeType === Node.TEXT_NODE && child.textContent.toLowerCase().includes(query)) {
                            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            return;
                        }
                    }
                }
            }
        }
    });
});