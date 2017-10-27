(function () {
    document.addEventListener('DOMContentLoaded', () => {
        const img = document.querySelector('.image');

        img.onload = () => console.log(`Loaded image height: ${img.height}px, width: ${img.width}px`);
    });
})();