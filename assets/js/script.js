jQuery(document).ready(function($) {
    var alterClass = function() {
      var ww = document.body.clientWidth;
      if (ww < 768) {
        $('.navigation').addClass('hidden');
      } else if (ww >= 768) {
        $('.navigation').removeClass('hidden');
      };
    };
    $(window).resize(function(){
      alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
  });

  jQuery(document).ready(function($) {
    var alterClass2 = function() {
      var ww = document.body.clientWidth;
      if (ww < 768) {
        $('.header').addClass('hide');
      } else if (ww >= 768) {
        $('.header').removeClass('hide');
      };
    };
    $(window).resize(function(){
      alterClass2();
    });
    //Fire it when the page first loads:
    alterClass2();
  });

  jQuery(document).ready(function($) {
    var alterClass3 = function() {
      var ww = document.body.clientWidth;
      if (ww < 768) {
        $('.navigation-mobile').removeClass('hide');
      } else if (ww >= 768) {
        $('.navigation-mobile').addClass('hide');
      };
    };
    $(window).resize(function(){
      alterClass3();
    });
    //Fire it when the page first loads:
    alterClass3();
  });

  $(document).ready(function(){
    $('#icon').click(function(){
        $('ul').toggleClass('show');
    })
})

$(document).ready(function(){
  $('.mobile-li').click(function(){
      $('ul').toggleClass('show');
  })
})