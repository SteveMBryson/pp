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


  var tooltip = document.querySelectorAll('.service-options__tooltip');

  document.addEventListener('mousemove', fn, false);

  function fn(e) {
      for (var i=tooltip.length; i--;) {
          tooltip[i].style.left = e.pageX + 'px';
          tooltip[i].style.top = e.pageY + 'px';
      }
  }

});
