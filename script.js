$(document).ready(function () {
    var images = $('.product-gallery-item');
    var currentIndex = 0;

    function showImage(index) {
        var src = $(images[index]).attr('src');
        $('#product-gallery-popup-img').attr('src', src);
        $('#product-images-popup').fadeIn();
    }

    images.on('click', function () {
        currentIndex = images.index(this);
        alert(currentIndex);
        showImage(currentIndex);
    });

    $('.product-gallery-close').on('click', function () {
        $('#product-images-popup').fadeOut();
    });

    $('.product-gallery-prev').on('click', function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        showImage(currentIndex);
    });

    $('.product-gallery-next').on('click', function () {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        showImage(currentIndex);
    });

    $('#product-images-popup').on('click', function (e) {
        if (e.target.id == 'product-images-popup') {
            $(this).fadeOut();
        }
    });
});
