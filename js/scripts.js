// Opts-out of all services
function optOutAllServices(){
  $('#opt-out').prop('checked', false).click(function() {
    $('.service-checkbox').prop('checked', false);
  });
}

// Un-checks the opt out box if any input is ticked
$('.service-checkbox').prop('checked', false).click(function() {
  $('#opt-out').prop('checked', false);
});

optOutAllServices();

// Set the pre-checked services
$('.service-checkbox[checked]').prop('checked', true);
