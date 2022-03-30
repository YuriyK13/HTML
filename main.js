$('.open-popup').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(800);
    $('html').addClass('no-scroll');
});

$('.close-popup').click(function() {
    $('.popup-bg').fadeOut(800);
    $('html').removeClass('no-scroll');
});


document.getElementById('FormData').addEventListener('submit', function(e) {
    e.preventDefault(); // отменяем стандартное поведение страницы
    document.getElementById('name').innerHTML = document.getElementById('form-name').value;
    document.getElementById('address').innerHTML = document.getElementById('form-address').value;
    $('.popup-bg').fadeOut(800); // скрыть попап после введения данных
})