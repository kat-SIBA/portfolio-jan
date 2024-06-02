document.addEventListener("DOMContentLoaded", function() {
    var expandableElement = document.querySelector('.expandable');
    var aboutContentElement = document.getElementById('about-content');

    expandableElement.addEventListener('click', function() {
        aboutContentElement.classList.toggle('visible');
    });
});
