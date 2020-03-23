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

  function initialize() {

    var ac = new google.maps.places.Autocomplete(
      (document.getElementById('address_field')), {
        types: ['geocode']
      });
  
    ac.addListener('place_changed', function() {
  
      var place = ac.getPlace();
  
      if (!place.geometry) {
        // User entered the name of a Place that was not suggested and
        // pressed the Enter key, or the Place Details request failed.
        window.alert("No details available for input: '" + place.name + "'");
        return;
      }
  s
      var html = '<div>Latitude: ' + place.geometry.location.lat() + '</div>';
      html += '<div>Longitude: ' + place.geometry.location.lng() + '</div>';
  
      document.getElementById('address_field').innerHTML = html;
    });
  }
  
  initialize();