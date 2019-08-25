//event pada saat link pada navbar di klik
$('.page-scroll').on('click', function (event) {
    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap elemen ybs
    var elemenTujuan = $(tujuan);
    //pindahkan scroll
    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1250, 'easeInOutBack');

    event.preventDefault();
})

// PARALLAX
//about
$(window).on('load', function () {
    console.log('oke');
    $('.p-right').addClass('active');
    $('.p-left').addClass('active');
});
$(window).scroll(function () {
    //jumbotron
    var wScroll = $(this).scrollTop();
    $('.jumbotron img').css({
        'transform': 'translate(0px, ' + wScroll / 6 + '%)'
    });
    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll / 2 + '%)'
    });
    $('.jumbotron p').css({
        'transform': 'translate(0px, ' + wScroll / 1 + '%)'
    });

    //portofolio
    if (wScroll > $('.portfolio').offset().top - 250 & wScroll < $('.contact').offset().top) {
        $('.portfolio .img-thumbnail').each(function (i) {
            setTimeout(function () {
                $('.portfolio .img-thumbnail').eq(i).addClass('active');
            }, 500 * (i))
        })
    }


});