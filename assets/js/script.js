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