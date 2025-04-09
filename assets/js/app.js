$(document).ready(function() {

    console.log( "ready!" );

    var headerHeight = jQuery("header").height();
    var footerHeight = jQuery("footer").height();

    var height = jQuery(window).height();
    var width = jQuery(window).width();

    var padding = $('.page-content').css('padding');

    if (height && width) {
        if (padding == "0px") {
            jQuery(".page-content").css("min-height", height);
            jQuery(".container-page-header-image").css("height", height);
        } else {
            jQuery(".page-content").css("min-height", height-headerHeight);
            jQuery(".container-page-header-image").css("height", height-headerHeight);
        }
    }

    $('#responsive-menu-button').sidr({
        name: 'sidr-main',
        source: '#navigation'
    });

    $('body').on('click', function() {
        $.sidr('close', 'sidr-main');
    });

    $('body').swipe({
        swipe: function(event, direction) {
            if (direction === 'left') {
                $.sidr('close', 'sidr-main');
            }
        },
        threshold: 50
    });

    $('#sidr-main a').on('click', function() {
        $.sidr('close', 'sidr-main');
    });

    $('.owl-carousel').owlCarousel({
        margin:18,
        loop:true,
        dots:false,
        nav:false,
        items: 2,
        autoHeight: true,
        responsive:{
            768:{
                items:2
            },
            1200:{
                items:10
            }
        }
    });
    $( ".owl-prev").html('<i class="fa-solid fa-arrow-left"></i>');
    $( ".owl-next").html('<i class="fa-solid fa-arrow-right"></i>');

});

jQuery(window).on("load", function(e){
  console.log( "window load!" );

  //Add width and height to .class
  $( ".add-attr-w-h" ).each(function( index ) {
    var img_w = $(this).width();
    var img_h = $(this).height();
    $(this).attr( "width", img_w );
    $(this).attr( "height", img_h );
  });

});


//Scroll: Global vars
var previousScrollPosition = $(window).scrollTop();
var isGoingDown = "";
//End Scroll: Global vars
jQuery(window).scroll(function (e) {
  console.log( "window scroll!" );
  // Scroll: Global vars
  var scrollPosition = jQuery(window).scrollTop();
  if (previousScrollPosition > scrollPosition) {
      isGoingDown = false;
  } else if (previousScrollPosition < scrollPosition) {
      isGoingDown = true;
  }
  previousScrollPosition = jQuery(window).scrollTop();
  //End Scroll: Global vars

  if (scrollPosition <= 0) {
    if ( $( "body" ).hasClass('front')) {
        $( ".content-header" ).removeClass( "scrolling" );
    }
  } else if (scrollPosition > 0) {
    if ( $( "body" ).hasClass('front')) {
        $( ".content-header" ).addClass( "scrolling" );
    }
  }

  if (scrollPosition < 200) {
      $( ".content-button-go-top" ).removeClass( "visible" );
  } else if (scrollPosition > 200) {
      $( ".content-button-go-top" ).addClass( "visible" );
  }

});

$(window).resize(function () {
    // Código al redimensionar la ventana.
});