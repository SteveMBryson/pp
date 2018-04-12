$( document ).ready(function() {

  // Opts-out of all services
  function optOutAllServices(){
    $('#opt-out').prop('checked', false).click(function() {
      $('.option').prop('checked', false);
    });
  }

  // Un-checks the opt out box if any input is ticked
  $('.option').prop('checked', false).click(function() {
    $('#opt-out').prop('checked', false);
  });

  optOutAllServices();

  // Set the pre-checked services
  $('.option[checked]').prop('checked', true);

});
