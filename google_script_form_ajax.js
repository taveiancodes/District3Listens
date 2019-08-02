var $form = $('form#mainForm'),
    url = 'https://script.google.com/macros/s/AKfycbzwyclvzeKdqsx7OU5dC27v8wiRPnk-tYhGehKGosU_RPLAXG5u/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})