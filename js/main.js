
(function ($) {

  "use strict";

  const buku = [
    {
      "image": "img/blog/blog5.PNG",
      "link": "buku/asuhankepjiwa.html",
      "judul": "Buku Ajar, Halusinasi & Jiwa",
      "desc": "Buku Ajar Asuhan...",
      "harga": "Rp. 70.000"
    },
    {
      "image": "img/blog/blog6.PNG",
      "link": "buku/gizidalamkehamilan.html",
      "judul": "Buku Ajar, Ibu Hamil & Gizi",
      "desc": "Buku Ajar Gizi..",
      "harga": "Rp. 70.000"
    },
    {
      "image": "img/blog/blog7.PNG",
      "link": "buku/pelindungtelinga.html",
      "judul": "Buku Saku & Earplug",
      "desc": "Buku Saku Alat....",
      "harga": "Rp. 60.000"
    },
    {
      "image": "img/blog/blog9.PNG",
      "link": "buku/proceeding.html",
      "judul": "Buku, Prosiding & Jurnal",
      "desc": "Proceeding Inter..",
      "harga": "Rp. 110.000"
    },
    {
      "image": "img/blog/blog10.png",
      "link": "buku/kesehatanm.html",
      "judul": "Buku, Remaja, Kesehatan Mental",
      "desc": "Kesehatan Mental..",
      "harga": "Rp. 120.000"
    },
    {
      "image": "img/blog/blog8.PNG",
      "link": "buku/perangkapnyamuk.html",
      "judul": "Buku Saku, Nyamuk & Alat",
      "desc": "Buku Saku Alat..",
      "harga": "Rp. 60.000"
    },
    {
      "image": "img/blog/blog11.png",
      "link": "buku/bukuasu.html",
      "judul": "Buku Ajar, Stroke, Keperawatan",
      "desc": "Buku Ajar Asuhan..",
      "harga": "Rp. 120.000"
    },
    {
      "image": "img/blog/blog12.png",
      "link": "buku/picky.html",
      "judul": "Buku Kesehatan, Anak, Picky Eater",
      "desc": "Buku Kesehatan..",
      "harga": "Rp. 80.000"
    },
    {
      "image": "img/blog/blog13.png",
      "link": "buku/nifas.html",
      "judul": "Buku Ajar, Kebidanan, Nifas",
      "desc": "Buku Ajar Asuhan..",
      "harga": "Rp. 120.000"
    },
    {
      "image": "img/blog/blog14.png",
      "link": "buku/diabet.html",
      "judul": "Buku Kesehatan, DM, Tatalaksana",
      "desc": "Buku Kesehatan Dia..",
      "harga": "Rp. 75.000"
    },
    {
      "image": "img/blog/blog15.png",
      "link": "buku/mananak.html",
      "judul": "Buku Panduan, Anak, Demam",
      "desc": "Buku Panduan Manajemen..",
      "harga": "Rp. 50.000"
    },
    {
      "image": "img/blog/blog16.png",
      "link": "buku/evidence.html",
      "judul": "Buku Panduan, Perawat, Praktek",
      "desc": "Penerapan Evidence-Based..",
      "harga": "Rp. 56.000"
    },
    {
      "image": "img/blog/blog17.png",
      "link": "buku/paliatif.html",
      "judul": "ASKEP, Perawat, Empati",
      "desc": "Asuhan Keperawatan Palia..",
      "harga": "Rp. 63.000"
    },
    {
      "image": "img/blog/blog18.png",
      "link": "buku/terapeutik.html",
      "judul": "Komunikasi, Modul, Terapeutik",
      "desc": "MODUL KOMUNIKASI TERAP..",
      "harga": "Rp. 58.000"
    },
    {
      "image": "img/blog/blog19.png",
      "link": "buku/eduortu.html",
      "judul": "Panduan, Edukasi, Anak",
      "desc": "PANDUAN EDUKASI ORA..",
      "harga": "Rp. 67.000"
    },
    {
      "image": "img/blog/blog20.png",
      "link": "buku/ringkas1.html",
      "judul": "Ringkas, Elektrolit, Manajemen",
      "desc": "BUKU RINGKAS MANAJEMEN..",
      "harga": "Rp. 53.000"
    },
    {
      "image": "img/blog/blog21.png",
      "link": "buku/askeph.html",
      "judul": "Hipertensi, Perawat, Buku Ajar",
      "desc": "BUKU AJAR Asuhan..",
      "harga": "Rp. 56.000"
    },
    {
      "image": "img/blog/blog22.png",
      "link": "buku/mannyeri.html",
      "judul": "Manajemen, Buku Panduan, Nyeri",
      "desc": "Panduan Manajemen..",
      "harga": "Rp. 55.000"
    },
    {
      "image": "img/blog/blog23.png",
      "link": "buku/kephtt.html",
      "judul": "Modul, head To Toe, Kajian",
      "desc": "Modul Pengkajian Ke..",
      "harga": "Rp. 53.000"
    },
    {
      "image": "img/blog/blog24.png",
      "link": "buku/lukakronis.html",
      "judul": "Dressing, Perawat, kronis",
      "desc": "BUKU SAKU TEKNIK M..",
      "harga": "Rp. 62.000"
    },
    {
      "image": "img/blog/blog25.png",
      "link": "buku/prioritas.html",
      "judul": "Panduan, KGD, Prioritas",
      "desc": "PANDUAN PRAKTIS Pen..",
      "harga": "Rp. 67.000"
    },
    {
      "image": "img/blog/blog26.png",
      "link": "buku/askeb-kehamilan.html",
      "judul": "ASKEB, Kehamilan, Buku Ajar",
      "desc": "Asuhan Kebidanan Ke..",
      "harga": "Rp. 65.000"
    }



  ]
  $(document).ready(function () {

  })
  // meanmenu

  $('#mobile-menu').meanmenu({

    meanMenuContainer: '.mobile-menu',

    meanScreenWidth: "992",

    onePage: true

  });



  // One Page Nav

  var top_offset = $('.header-area').height() - 10;

  $('.main-menu nav ul').onePageNav({

    currentClass: 'active',

    scrollOffset: top_offset,

  });



  // data - background

  $("[data-background]").each(function () {

    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")

  })







  $(window).on('scroll', function () {

    var scroll = $(window).scrollTop();

    if (scroll < 245) {

      $("#header-sticky").removeClass("sticky-bar");

    } else {

      $("#header-sticky").addClass("sticky-bar");

    }

  });





  // pricing active

  $('.chose-box').on('mouseenter', function () {

    $(this).addClass('active').parent().siblings().find('.chose-box').removeClass('active');

  })







  // mainSlider

  function mainSlider() {

    var BasicSlider = $('.slider-active');

    BasicSlider.on('init', function (e, slick) {

      var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');

      doAnimations($firstAnimatingElements);

    });

    BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {

      var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');

      doAnimations($animatingElements);

    });

    BasicSlider.slick({

      autoplay: false,

      autoplaySpeed: 10000,

      dots: false,

      fade: true,

      arrows: false,

      responsive: [{

        breakpoint: 767,

        settings: {

          dots: false,

          arrows: false

        }

      }]

    });



    function doAnimations(elements) {

      var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

      elements.each(function () {

        var $this = $(this);

        var $animationDelay = $this.data('delay');

        var $animationType = 'animated ' + $this.data('animation');

        $this.css({

          'animation-delay': $animationDelay,

          '-webkit-animation-delay': $animationDelay

        });

        $this.addClass($animationType).one(animationEndEvents, function () {

          $this.removeClass($animationType);

        });

      });

    }

  }

  mainSlider();



  $('.activ-testimonai').slick({

    dots: false,

    arrows: true,

    infinite: true,

    speed: 300,

    slidesToShow: 2,

    slidesToScroll: 1,

    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',

    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',

    centerMode: true,

    centerPadding: '0',

    responsive: [{

      breakpoint: 1024,

      settings: {

        slidesToShow: 2,

        slidesToScroll: 1,

        infinite: true,

        dots: false,

      }

    },

    {

      breakpoint: 992,

      settings: {

        slidesToShow: 1,

        arrows: false,

        slidesToScroll: 1

      }

    },

    {

      breakpoint: 767,



      settings: {

        slidesToShow: 1,

        arrows: false,

        slidesToScroll: 1

      }

    }

    ]

  });



  $('.acitv-testimonail-3').slick({

    dots: false,

    arrows: false,

    infinite: true,

    speed: 300,

    slidesToShow: 1,

    slidesToScroll: 1,

    centerMode: true,

    centerPadding: '0',

    prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',

    nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',

    responsive: [{

      breakpoint: 1024,

      settings: {

        slidesToShow: 1,

        slidesToScroll: 1,

        infinite: true,

        dots: false,

      }

    },

    {

      breakpoint: 600,

      settings: {

        slidesToShow: 1,

        slidesToScroll: 1

      }

    },

    {

      breakpoint: 480,

      settings: {

        slidesToShow: 1,

        slidesToScroll: 1

      }

    }

    ]

  });



















  // owlCarousel

  $('.screenshot-active').owlCarousel({

    loop: true,

    items: 5,

    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],

    nav: false,

    dots: false,

    autoplay: true,

    margin: 20,

    responsive: {

      0: {

        items: 1

      },

      550: {

        items: 2

      },

      767: {

        items: 3

      },

      992: {

        items: 4

      },

      1200: {

        items: 5

      }

    }

  })



  /* magnificPopup img view */

  $('.popup-image').magnificPopup({

    type: 'image',

    gallery: {

      enabled: true

    }

  });



  /* magnificPopup video view */

  $('.popup-video').magnificPopup({

    type: 'iframe'

  });





  // isotop

  $('.grid').imagesLoaded(function () {

    // init Isotope

    var $grid = $('.grid').isotope({

      itemSelector: '.grid-item',

      percentPosition: true,

      masonry: {

        // use outer width of grid-sizer for columnWidth

        columnWidth: '.grid-item',

      }

    });

  });



  // filter items on button click

  $('.portfolio-menu').on('click', 'button', function () {

    var filterValue = $(this).attr('data-filter');

    $grid.isotope({

      filter: filterValue

    });

  });



  //for menu active class

  $('.portfolio-menu button').on('click', function (event) {

    $(this).siblings('.active').removeClass('active');

    $(this).addClass('active');

    event.preventDefault();

  });









  // scrollToTop

  $.scrollUp({

    scrollName: 'scrollUp', // Element ID

    topDistance: '300', // Distance from top before showing element (px)

    topSpeed: 300, // Speed back to top (ms)

    animation: 'fade', // Fade, slide, none

    animationInSpeed: 200, // Animation in speed (ms)

    animationOutSpeed: 200, // Animation out speed (ms)

    scrollText: '<i class="fas fa-long-arrow-alt-up"></i>', // Text for element

    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'

  });



  // WOW active

  new WOW().init();

  // pagination
  var page = 6;
  var numpage = 1;
  var totPage = Math.ceil(buku.length / page);



  function loadPage() {
    var start = (numpage - 1) * page
    var end = (numpage * page);
    var perPage = buku.slice(start, end)
    var htmlContent = '';

    perPage.forEach((e) => {
      htmlContent += `
          <div class="col-xl-4 col-lg-4 col-md-6 item">
              <div class="single-blog">
                  <div class="blog-img">
                      <a href="${e.link}"><img src="${e.image}" alt=""></a>
                  </div>
                  <div class="blog-info text-center mb-30">
                      <div class="blog-body">
                          <span>${e.judul}</span>
                          <h3><a href="${e.link}">${e.desc}</a></h3>
                          <p>${e.harga}</p>
                      </div>
                  </div>
              </div>
          </div>`;
    });
    $('.content-book').html(htmlContent);
  }
  function buttPage() {
    var paginationHtml = '';
    paginationHtml += `<ul>
  <li>
      <a href="" class='prev'>
          <i class="arrow_left"></i>
      </a>
  </li>`
    for (var i = 1; i <= totPage; i++) {
      paginationHtml += `<li class="${i === numpage ? 'active' : ''}">
        <a data-page=${i} class='page-but'>
            <span>${i}</span>
        </a>
    </li>`;
    }
    paginationHtml += ` <li>
                        <a href="#" class='next'>
                          <i class="arrow_right"></i>
                        </a>
                      </li>
                    </ul>`
    $('.basic-pagination').html(paginationHtml);
  }

  loadPage();
  buttPage();

  $(document).on('click', '.page-but', function () {
    numpage = $(this).data('page');
    loadPage()
    buttPage()
  })
  $(document).on('click', '.prev', function () {
    numpage = (numpage == 1) ? 1 : numpage - 1;
    loadPage()
    buttPage()
  })
  $(document).on('click', '.next', function () {
    numpage = (numpage == totPage) ? totPage : numpage + 1;
    loadPage()
    buttPage()
  })


})(jQuery);

