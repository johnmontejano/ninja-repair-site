// ----------------------------------------------------
// Initiliaze materialize components
// ----------------------------------------------------
(function($) {
  $(function() {
    $('.sidenav').sidenav();
  }); // end of document ready
})(jQuery);

// DATEPICKER
document.addEventListener('DOMContentLoaded', function() {
  var datepicker = document.querySelectorAll('.datepicker');
  var instances = M.Datepicker.init(datepicker, {});
});
// TIMEPICKER

document.addEventListener('DOMContentLoaded', function() {
  var timepicker = document.querySelectorAll('.timepicker');
  M.Timepicker.init(timepicker, {});
  var parallax = document.querySelectorAll('.parallax');
  M.Parallax.init(parallax, {});
});
