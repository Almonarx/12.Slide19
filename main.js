(function () {
    document.addEventListener('DOMContentLoaded', () => {
        const img = document.querySelector('.image');

        img.onload = () => console.log(img.height, img.width);
    });
})();