// Loading

$(window).on('load', function(){
    setTimeout(function(){ 
    $('.loader-wrapper').fadeOut( 400 );
    }, 3000);
});

// NAVBAR SCROLL
$(function () {
    //fungsi dibawah hanya berjalan untuk semua tag <a> yang diawali (^) dengan hash (#)
    $('a[href^="#"]').on('click', function (e) {

        //masukkan ke dalam kurung kurawalnya $(a[href^])......
        $target = $(this.hash);

        //masukkan baris coding ini dibawahnya $target ......
        $jarak = 40;
        $('html, body').stop().animate({
                'scrollTop': $target.offset().top - $jarak
            },
            1000, //durasi dalam milisekon
            'swing', //efek transisi (opsi : swing / linear)
            function () {
                window.location.hash = target;
            }
        );

    });
});

$(window).scroll(function(){
    var wScroll = $(this).scrollTop(); 

    if( wScroll > $('.about').offset().top - 420 ) {
        $('.about').addClass('muncul');
    }

    if( wScroll > $('.projects').offset().top - 450 ) {
        $('.projects').addClass('muncul');
    }

    if( wScroll > $('.skill').offset().top - 400 ) {
        $('.skill').addClass('muncul');
    }

});