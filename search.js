document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');

    searchInput.addEventListener('keyup', () => {
        const query = searchInput.value.toLowerCase();
        const elements = document.querySelectorAll('body *:not(#search-input):not(svg):not(script):not(style)');

        // Remove previous highlights
        document.querySelectorAll('.highlight').forEach(el => {
            const parent = el.parentNode;
            parent.replaceChild(document.createTextNode(el.textContent), el);
            parent.normalize();
        });

        if (query) {
            for (let element of elements) {
                if (element.childNodes.length === 1 && element.childNodes[0].nodeType === Node.TEXT_NODE) {
                    if (element.textContent.toLowerCase().includes(query)) {
                        highlightText(element, query);
                        document.querySelector('.highlight').scrollIntoView({ behavior: 'smooth', block: 'center' });
                        break;
                    }
                }
            }
        }
    });

    function highlightText(element, query) {
        const regex = new RegExp(`(${query})`, 'gi');
        const newText = element.textContent.replace(regex, '<span class="highlight">$1</span>');
        const newElement = document.createElement('span');
        newElement.innerHTML = newText;
        element.replaceWith(newElement);
    }
});