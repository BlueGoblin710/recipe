document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');

    searchInput.addEventListener('keyup', () => {
        const query = searchInput.value.toLowerCase();
        const content = document.body.innerText.toLowerCase();

        if (query) {
            if (content.includes(query)) {
                alert(`Found: ${query}`);
            } else {
                alert(`No results found for: ${query}`);
            }
        }
    });
});