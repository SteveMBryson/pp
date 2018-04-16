$( document ).ready(function() {

  (function($) {
    $.fn.toggleDisabled = function(){
        return this.each(function(){
            this.disabled = !this.disabled;
        });
    };
  })(jQuery);

  $('#opt-out').click(function() {
    $('.service-options').toggleClass('service-options--disabled');
    $('.service-options__option input').toggleDisabled();
  });

});
