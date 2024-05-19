document.addEventListener("DOMContentLoaded", function() {
    var expandableElement = document.querySelector('.expandable');
    var aboutContentElement = document.getElementById('about-content');

    expandableElement.onclick = function() {
        if (aboutContentElement.style.display === 'none' || aboutContentElement.style.display === '') {
            aboutContentElement.style.display = 'block';
        } else {
            aboutContentElement.style.display = 'none';
        }
    }
});