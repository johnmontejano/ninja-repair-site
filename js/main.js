document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {});
});
// SELECT DROPDOWN
document.addEventListener('DOMContentLoaded', function() {
  var select = document.querySelectorAll('select');
  var instances = M.FormSelect.init(select, {});
});
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

//Navbar change color on scroll
$(document).ready(function() {
  $(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 380) {
        $('#nav').addClass('changeColor');
        console.log('touch');
      }
      if ($(this).scrollTop() < 370) {
        $('#nav').removeClass('changeColor');
      }
    });
  });
});
