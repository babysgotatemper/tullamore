$(function () {

    //block2 slider & block init
    $('.block2').slick();
    $('.grid').masonry({
        itemSelector: '.grid-item'
    });
    //age popup    
    $('.age-warning li:first-child').click(function () {
        $('.age-warning').hide();
        $('.rules li:first-child').hide().show();
        $('.rules li:nth-child(2)').hide().delay(2000).show();
        $('.rules li:last-child').hide().delay(4000).show();
    });
    $('.age-warning li:last-child').click(function () {
        window.close();
    });

    //iframe button click
    $(".block2").find('button').click(function () {
        //        $(this).hide();
        var offset = $('.block2').offset().top;
        $('body,html').animate({
            scrollTop: offset-85
        }, 500);
    });


    //youtube click
    $('.youtube>div').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $('.wrapper').removeClass('active');
            $(this).addClass('active');
        }
        $("iframe").each(function () {
            var src = $(this).attr('src');
            $(this).attr('src', src);
        });
    });
    $('.popup').click(function () {
        $(this).fadeOut(500);
    })

    //bg video
    //    $('.video').vide('video/vid', {
    //        muted: true
    //    });
    $(".bgvideo a").click(function () {
        $(this).toggleClass('active');
        $('.bgvideo').toggleClass('active');
        if ($("video").prop('muted')) {
            $("video").prop('muted', false);
        } else {
            $("video").prop('muted', true);
        }
    });
    /*    $(".bgvideo a").click(function () {
            $('.bgvideo').toggleClass('active');
            if ($("video").prop('muted')) {
                $("video").prop('muted', false);
            } else {
                $("video").prop('muted', true);
            }
        });*/



    //sticky navigation

    var navShowPos = 35;
    $(window).scroll(function () {
        var CurScrollPos = $(this).scrollTop();
        if (CurScrollPos >= navShowPos) {
            $('nav, .toTop').addClass('active');
        } else if (CurScrollPos < navShowPos) {
            $('nav, .toTop').removeClass('active');
        }
    });

    //slow skroll

    $(".mainNav a.slow, a.btn-participate, .toTop, .grid-item.logo").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });

    //login functions

    $('#store_video').on("click", function () {
        if ($("#video_link").val().length > 0) {
            $.ajax({ //send data
                dataType: 'json',
                method: "POST",
                url: social_net,
                data: {
                    video_link: $("#video_link").val(),
                    user: user
                }
            }).done(function (data) {
                console.log(data);
                if (data) {
                    // window.location.reload();
                    $('.popup').fadeIn(500).delay(2000).fadeOut(500);
                }
            });
        } else {
            alert('Вставьте линк');
        }
    });

});