$(document).ready(function () {
    // Discount Modal
    window.addEventListener('load', function () {
        $('#discountModal').modal('show');
    });

    /* =========================================================
        Sticky Header Start
     =========================================================*/
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        if (scrollTop > 200) {
            $('.header').addClass('sticky');
            $('.resp-none').addClass('scroll-none');

            $('#header-logo').attr('src', 'assets/images/icons/logo.svg');
        } else {
            $('.header').removeClass('sticky');
            $('.resp-none').removeClass('scroll-none');
            $('#header-logo').attr('src', 'assets/images/icons/logo-dark.svg');
        }
    });

    /* =========================================================
        Counter Up Start
     =========================================================*/
    $('.counter').counterUp({
        delay: 100,
        time: 1000,
    });

    /* =========================================================
        Counter Up End
     =========================================================*/

    /* =========================================================
        Expart Slider Start
     =========================================================*/
    $('.experts-wrapper-1').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });

    $('.experts-wrapper-2').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });

    $('.category-wrapper-2').slick({
        rows: 2,
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('#cat-prev-1'),
        nextArrow: $('#cat-next-1'),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });

    $('.experts-wrapper-3').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
    /* =========================================================
        Expart Slider End
     =========================================================*/

    /* =========================================================
        Testimonial Slider Start
     =========================================================*/
    $('.testimonial-wrapper-1').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('#testimonal-prev-1'),
        nextArrow: $('#testimonal-next-1'),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });

    $('.testimonial-wrapper-2').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: $('#testimonal-prev-2'),
        nextArrow: $('#testimonal-next-2'),
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });

        $('.testimonial-wrapper-3').slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: $('#testimonal-prev-3'),
            nextArrow: $('#testimonal-next-3'),
        });

            $('.testimonial-wrapper-4').slick({
                dots: true,
                infinite: false,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 2,
                        },
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 1,
                        },
                    },
                ],
            });
    /* =========================================================
        Testimonial Slider End
     =========================================================*/

    /* =========================================================
        Home Blog Slider Start
     =========================================================*/
    $('.home-news-wrapper').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('#news-prev-2'),
        nextArrow: $('#news-next-2'),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });

    $('.home-news-wrapper-two').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('#news-prev-2'),
        nextArrow: $('#news-next-2'),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
    /* =========================================================
        Home Blog Slider End
     =========================================================*/

    /* =========================================================
        Event Slider 2 Slider Start
     =========================================================*/
    $('.event-slider-2').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    /* =========================================================
        Event Slider 2 Slider End
     =========================================================*/

    /* =========================================================
        Common Question Slider Start
     =========================================================*/
    $('.cq-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        center: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
    /* =========================================================
        Common Question Slider End
     =========================================================*/

    /* =========================================================
        Education Slider Start
     =========================================================*/
    $('.education-slider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        slidesToShow: 4,
        slidesToScroll: 1,
        // prevArrow: $('.prev'),
        // nextArrow: $('.next'),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
    /* =========================================================
        Education Slider End
     =========================================================*/

    /* =========================================================
        Education Slider Start
     =========================================================*/
    $('.home-news-wrapper-3').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('#prev-1'),
        nextArrow: $('#next-1'),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
    /* =========================================================
        Education Slider End
     =========================================================*/

    /* =========================================================
        Category Slider Start
     =========================================================*/
    $('.category-wrapper-5').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1,
                },
            },
        ],
    });
    /* =========================================================
        Category Slider End
     =========================================================*/


    /* =========================================================
        Category 3 Slider Start
     =========================================================*/
    $('.category-wrapper-3').slick({
        rows: 2,
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
    /* =========================================================
        Category 3 Slider End
     =========================================================*/

    /* =========================================================
        Scroll To Top Start
     =========================================================*/
    $('.scrollToTop').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });

    $(window).scroll(function () {
        var scrollToTopBtn = $('.scrollToTop');
        if ($(window).scrollTop() > 200) {
            scrollToTopBtn.show();
        } else {
            scrollToTopBtn.hide();
        }
    });
    /* =========================================================
        Scroll To Top End
     =========================================================*/

    /* =========================================================
        Quantity Start
     =========================================================*/
    var quantity = parseInt($('#quantity').val());

    $('#increment').click(function () {
        quantity++;

        $('#quantity').val(quantity);
    });

    $('#decrement').click(function () {
        if (quantity > 1) {
            quantity--;
            $('#quantity').val(quantity);
        }
    });

    $('#quantity').change(function () {
        if (!isNaN(parseInt($(this).val())) && parseInt($(this).val()) >= 1) {
            quantity = parseInt($(this).val());
            $(this).val(quantity);
        } else {
            $(this).val(quantity);
        }
    });
    /* =========================================================
        Quantity End
     =========================================================*/

    /* =========================================================
        Product Filter Start
     =========================================================*/
    var $grid = $('.grid').isotope({
        // options
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
    });

    var $buttonGroup = $('.filters');
    $buttonGroup.on('click', 'li', function (event) {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        var $button = $(event.currentTarget);
        $button.addClass('is-checked');
        var filterValue = $button.attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    /* =========================================================
        Product Filter End
     =========================================================*/

    /* =========================================================
        Video JS Start
     =========================================================*/

    if ($('#example_video_1').length > 0) {
        var player = videojs('example_video_1');
        var upcoming_list = $('#plylst_upcming');
        var last_video_index = 0;
        var playlist = [
            {
                url: 'https://5b44cf20b0388.streamlock.net:8443/live/ngrp:live_all/playlist.m3u8',
                thumbnail:
                    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
                isLive: true,
                title: 'Web Development with PHP & Laravel - Class 01',
                length: '',
                playing: true,
            },
            {
                url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
                thumbnail:
                    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
                isLive: false,
                linkedProducts: [],
                title: 'Chromecast – For Bigger Joyrides',
                length: '0:15',
                playing: false,
            },
            {
                url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
                thumbnail:
                    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
                isLive: false,
                linkedProducts: [],
                title: 'Elephants Dream',
                length: '10:53',
                playing: false,
            },
            {
                url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
                thumbnail:
                    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
                isLive: false,
                linkedProducts: [],
                title: 'Chromecast – For Bigger Blazes',
                length: '10:53',
                playing: false,
                isLock: true,
            },
            {
                url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
                thumbnail:
                    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
                isLive: false,
                linkedProducts: [],
                title: 'Chromecast – For Bigger Escapes',
                length: '10:53',
                playing: false,
                isLock: true,
            },
            {
                url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
                thumbnail:
                    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg',
                isLive: false,
                linkedProducts: [],
                title: 'Sintel',
                length: '10:53',
                playing: false,
                isLock: true,
            },
            {
                url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
                thumbnail:
                    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
                isLive: false,
                linkedProducts: [],
                title: 'Chromecast – For Bigger Blazes',
                length: '10:53',
                playing: false,
                isLock: true,
            },
            {
                url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
                thumbnail:
                    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
                isLive: false,
                linkedProducts: [],
                title: 'Chromecast – For Bigger Escapes',
                length: '10:53',
                playing: false,
                isLock: true,
            },
            {
                url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
                thumbnail:
                    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg',
                isLive: false,
                linkedProducts: [],
                title: 'Web Development with PHP & Laravel - Class 01',
                length: '10:53',
                playing: false,
                isLock: true,
            },
        ];
        // player.dimension("width", 100%);
        player.dimension('height', 420);

        function build_list_item(s) {
            var isLive = s.isLive.toString();
            var length = s.isLive ? 'Live' : s.length;
            var playing = s.playing.toString();
            var isLock = s.isLive;
            var e =
                $(`<div class="single-playlist mb-3" data-playing="${playing}  data-live="${isLive} >
                                    <div>
                                        <div class="sp-img-box">
                                            <img src="${s.thumbnail}" alt="playlist">
                                        </div>
                                    </div>
                                    <div class="sp-desc">
                                        <h2 class="sp-title">${s.title}</h2>
                                        <p class="sp-duration">${length}</p>
                                    </div>
                                </div>`);
            var videoTitle = document.getElementById('video-title');
            videoTitle.innerHTML = s.title;

            e.click((i) => {
                player.src(s.url);
                playlist[last_video_index].playing = false;
                last_video_index = playlist.indexOf(s);
                playlist[last_video_index].playing = true;
                populate_playlist();
                videoTitle.innerHTML = s.title;
            });
            return e;
        }
        function populate_list(data, elem) {
            elem.html('');
            for (var item of data) {
                elem.append(build_list_item(item));
            }
        }
        function populate_playlist() {
            populate_list(playlist, $('#plylst_upcming'));
        }

        populate_playlist();
    }

        if ($('#example_video_2').length > 0) {
            var player = videojs('example_video_2');
        }
    /* =========================================================
        Video JS End
     =========================================================*/

    /* =========================================================
        Quill JS Start
     =========================================================*/
    if ($('#quill-editor').length > 0) {
        var quill = new Quill('#quill-editor', {
            placeholder:
                'Add a cover letter or anything else you want to share',
            theme: 'snow',
        });

        var htmlContent = quill.root.innerHTML;
    }
    /* =========================================================
        Quill JS End
     =========================================================*/
});