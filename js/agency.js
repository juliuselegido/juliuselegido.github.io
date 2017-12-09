// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    $('.close-modal').click(function(){
      var iframes = $('iframe');
      var portfolioModal = $(this).css("display")
      if (portfolioModal = "block") {
        console.log('working in here')
        console.log(iframes.length)
        for (var i = 0; i < iframes.length; i++) {
          console.log('works?')
            iframes[i].src = iframes[i].src; //causes a reload so it stops playing, music, video, etc.

        }
    }
  })


})(jQuery); // End of use strict
