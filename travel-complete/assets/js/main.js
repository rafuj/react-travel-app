(function ($) {
  "user strict";
  $(window).on('load', function () {
    $('.preloader').fadeOut(1000);
    $('body').removeClass('overflow-hidden');
    var img = $('.bg_img');
    img.css('background-image', function () {
      var bg = ('url(' + $(this).data('background') + ')');
      return bg;
    });
    galleryMasonary()
  });
  function galleryMasonary() {
    $('.destination__wrapper').isotope({
      itemSelector: '.destination__item',
      masonry: {
        columnWidth: 0,
      }
    });
  }
  var $grid = $(".destination__wrapper")
  // filter functions
  var filterFns = {};
  // bind filter button click
  $('ul.filter').on('click', 'li', function () {
    var filterValue = $(this).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[filterValue] || filterValue;
    $grid.isotope({
      filter: filterValue
    });
  });
  // change is-checked class on buttons
  $('ul.filter').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'li', function () {
      $buttonGroup.find('.active').removeClass('active');
      $(this).addClass('active');
    });
  });
    $(".menu>li>.submenu").parent("li").addClass("menu-item-has-children");
    // drop down menu width overflow problem fix
    $('ul').parent('li').hover(function () {
      var menu = $(this).find("ul");
      var menupos = $(menu).offset();
      if (menupos.left + menu.width() > $(window).width()) {
        var newpos = -$(menu).width();
        menu.css({
          left: newpos
        });
      }
    });
    $('.menu li a').on('click', function (e) {
      var element = $(this).parent('li');
      if (element.hasClass('open')) {
        element.removeClass('open');
        element.find('li').removeClass('open');
        element.find('ul').slideUp(300, "swing");
      } else {
        element.addClass('open');
        element.children('ul').slideDown(300, "swing");
        element.siblings('li').children('ul').slideUp(300, "swing");
        element.siblings('li').removeClass('open');
        element.siblings('li').find('li').removeClass('open');
        element.siblings('li').find('ul').slideUp(300, "swing");
      }
    })
    
    // Scroll To Top
    var scrollTop = $(".scrollToTop");
    $(window).on('scroll', function () {

      if ($(this).scrollTop() < 500) {
        scrollTop.removeClass("active");
        } else {
          scrollTop.addClass("active");
        }
      });

      //header
    var header = $(".header-bottom");
    $(window).on('scroll', function () {
      if ($(this).scrollTop() < 1) {
        header.removeClass("fadeInDown animated");
        $('.header-bottom').removeClass("active");
      } else {
        header.addClass("fadeInDown animated");
        $('.header-bottom').addClass("active");
      }
    });

    //Click event to scroll to top
    $('.scrollToTop').on('click', function () {
      $('html, body').animate({
        scrollTop: 0
      }, 500);
      return false;
    });
    //Header Bar
    $('.header-bar, .close-sidebar').on('click', function () {
      $('.header-bar, .close-sidebar').toggleClass('active');
      $('.overlay').toggleClass('active');
      $('.menu-area, .dashboard__sidebar').toggleClass('active');
    })
    $('.menu-close').on('click', function () {
      $('.overlay, .menu-area, .header-bar').removeClass('active');
    })
    $('.overlay, .close-searchbar').on('click', function () {
      $('.overlay, .dashboard-menu, .header-bar, .dashboard__sidebar, .menu-area, .search-sidebar').removeClass('active');
    });
    $('.filter-btn').on('click', function () {
      $('.overlay, .search-sidebar').addClass('active');
    })
    $('.faq__item .faq__title').on('click', function (e) {
      var element = $(this).parent('.faq__item');
      if (element.hasClass('open')) {
        element.removeClass('open');
        element.find('.faq__content').removeClass('open');
        element.find('.faq__content').slideUp(200, "swing");
      } else {
        element.addClass('open');
        element.children('.faq__content').slideDown(200, "swing");
        element.siblings('.faq__item').children('.faq__content').slideUp(200, "swing");
        element.siblings('.faq__item').removeClass('open');
        element.siblings('.faq__item').find('.faq__title').removeClass('open');
        element.siblings('.faq__item').find('.faq__content').slideUp(200, "swing");
      }
    });
    function copyBtn() {
      var copyText = document.getElementById('referral-link');
      copyText.select();
      document.execCommand('copy')
    }
    $('.copyBtn, #referral-link').on('click', copyBtn);
    
    $('.banner-slider').owlCarousel({
      loop: true,
      nav: false,
      dots: false,
      items: 1,
      margin: 0,
      autoplay: true,
      autoHeight: true,
      lazyLoad : true,
      autoplayTimeout: 4000,
      animateOut: 'slideOutDown',
      animateIn: 'flipInX',
      mouseDrag: false,
      touchDrag: false,
  })
  var sync1 = $(".sync1");
  var sync2 = $(".sync2");
  var thumbnailItemClass = '.owl-item';
  var slides = sync1.owlCarousel({
    items: 1,
    autoplay: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    scrollPerPage: true,
    nav: true,
    dots: false,
    margin: 20,
    center: true,
    responsive:{
        768:{
            items: 2,
        },
    },
  }).on('changed.owl.carousel', syncPosition);

  function syncPosition(el) {
    $owl_slider = $(this).data('owl.carousel');
    var loop = $owl_slider.options.loop;

    if (loop) {
      var count = el.item.count - 1;
      var current = Math.round(el.item.index - (el.item.count / 2) - .5);
      if (current < 0) {
        current = count;
      }
      if (current > count) {
        current = 0;
      }
    } else {
      var current = el.item.index;
    }

    var owl_thumbnail = sync2.data('owl.carousel');
    var itemClass = "." + owl_thumbnail.options.itemClass;

    var thumbnailCurrentItem = sync2
      .find(itemClass)
      .removeClass("synced")
      .eq(current);
    thumbnailCurrentItem.addClass('synced');

    if (!thumbnailCurrentItem.hasClass('active')) {
      var duration = 500;
      sync2.trigger('to.owl.carousel', [current, duration, true]);
    }
  }
  var thumbs = sync2.owlCarousel({
      items: 4,
      loop: false,
      nav: false,
      dots: false,
      autoplay: true,
      margin: 10,
      responsive:{
          450:{
              items: 5,
          },
      },
      onInitialized: function(e) {
        var thumbnailCurrentItem = $(e.target).find(thumbnailItemClass).eq(this._current);
        thumbnailCurrentItem.addClass('synced');
      },
    })
    .on('click', thumbnailItemClass, function(e) {
      e.preventDefault();
      var duration = 500;
      var itemIndex = $(e.target).parents(thumbnailItemClass).index();
      sync1.trigger('to.owl.carousel', [itemIndex, duration, true]);
    }).on("changed.owl.carousel", function(el) {
      var number = el.item.index;
      $owl_slider = sync1.data('owl.carousel');
      $owl_slider.to(number, 500, true);
  });
  sync1.owlCarousel();
    
    $('.clients__slider').owlCarousel({
      loop: true,
      nav: false,
      dots: false,
      items: 1,
      margin: 0,
      autoplay: true,
      lazyLoad : true,
      autoplayTimeout: 2500,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
  })

  $( "#start-date" ).datepicker();
  $( "#end-date" ).datepicker();


  if($('.sponsor-section-2').prev('*').hasClass('bg--section')){
    $('.sponsor-section-2').addClass('bg--body');
  }else {
    $('.sponsor-section-2').addClass('bg--section');
  }
  $('.sponsor-slider').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    items: 2,
    autoplay: true,
    margin: 15,
    responsive: {
      768: {
        items: 3,
        margin: 30,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 6,
      }
    }
  })
  $('.trip-slider').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    items: 1,
    autoplay: true,
    margin: 24,
    responsive: {
      576: {
        items: 2,
      },
      768: {
        items: 2,
        dots: false,
        nav: true,
      },
    }
})
  $( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 10000,
      values: [ 700, 6000 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) + " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  });
  $('.owl-prev').html('<i class="las la-arrow-left">');
  $('.owl-next').html('<i class="las la-arrow-right">');

  


  var linksMenu = document.querySelectorAll('.menu li a, .side__menu li a');
  var activeMenuIndex = 0;
  for(i = 0; i < linksMenu.length ; i++) {
    if(linksMenu[i].href === document.URL){
      activeMenuIndex = i;
    }
  }
  linksMenu[activeMenuIndex].classList+= ' active'
  linksMenu[activeMenuIndex].href = '#0'
  
    
})(jQuery);
