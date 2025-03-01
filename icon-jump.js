// icon-jump.js
document.addEventListener('DOMContentLoaded', () => {
    const iconContainers = document.querySelectorAll('.icon-container');

    // Save (Download) functionality
    iconContainers[0].addEventListener('click', () => {
        console.log('Save icon clicked');
        const fileUrl = 'https://bluegoblin710.github.io/recipe/street-tacos-recipe.pdf';
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'street-tacos-recipe.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    // Share functionality
    iconContainers[1].addEventListener('click', () => {
        if (navigator.share) {
            navigator.share({
                title: 'Street Tacos Recipe',
                text: 'Check out this amazing Street Tacos recipe!',
                url: window.location.href,
            }).catch(err => console.log('Share failed:', err));
        } else {
            alert('Share feature not supported. Copy the URL manually.');
        }
    });

    // Print functionality
        iconContainers[2].addEventListener('click', () => {
        window.print();
    });

    // Jump to Recipe functionality
    iconContainers[3].addEventListener('click', () => {
        const recipeSection = document.getElementById('recipe-details');
        if (recipeSection) {
            recipeSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.log('Recipe section not found');
        }
    });
});