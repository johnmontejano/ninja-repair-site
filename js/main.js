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
  });