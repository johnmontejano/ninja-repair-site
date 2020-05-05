// ----------------------------------------------------
// Initiliaze materialize components
// ----------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {});
});
// SELECT DROPDOWN
function dropdownSetup() {
  document.addEventListener('DOMContentLoaded', function() {
    var select = document.querySelectorAll('select');
    var instances = M.FormSelect.init(select, {});
  });
}
dropdownSetup();
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

// ----------------------------------------------------
// Get reference to the DOM elements
// ----------------------------------------------------

const selectMan = document.getElementById('manufacturer-list');
const selectModel = document.getElementById('model-list');
const selectIssue = document.getElementById('issue');
const showDevice = document.getElementById('show-device');
// -----------------------------------------------------
// Setup some event listeners
// -----------------------------------------------------

// handles the manufacturer select/menu

selectMan.addEventListener('change', function(e) {
  // Get the manufacturer
  const man = selectMan.value;
  // Get all the keys under the manufacturder key
  const models = Object.keys(deviceDictionary[man]);
  // Make an option for each model
  let options = '';
  models.forEach(function(model) {
    options += `<option value="${model}">${model}</option>`;
  });
  selectModel.innerHTML = options;
  var instances = M.FormSelect.init(select, {});

  console.log(options);
});

// Handles the model select/menu

selectModel.addEventListener('change', function(e) {
  // get the data for the selected model
  const man = selectMan.value;
  const model = selectModel.value;
  if (man === undefined || model === undefined) {
    return;
  }

  const device = deviceDictionary[man][model];
  const features = Object.keys(device);
  let options = '';

  features.forEach(function(feature) {
    // const { price, warranty, duration } = device[feature];
    // console.log(feature, price, warranty, duration);
    options += `<option value="${feature}">${feature}</option>`;
  });
  selectIssue.innerHTML = options;
});

// SHOWS PRICE DEPENDING ON ISSUE
selectIssue.addEventListener('change', function(e) {
  // get the data for the selected man, model, and issue
  const man = selectMan.value;
  const model = selectModel.value;
  const issue = selectIssue.value;

  const devicePrice = deviceDictionary[man][model][issue];
  const listPrice = Object.values(devicePrice);
  console.log(listPrice);
  let totalPrice = '';
  listPrice.forEach(function(price) {
    totalPrice += `<div>${price}</div>`;
  });
  showDevice.innerHTML = totalPrice;
  console.log(devicePrice);
});
// ------------------------------------------------------
// Set up the manufaturer menu
// ------------------------------------------------------

// Get some information from the data
// Get all of the manufacturers you only have one at the moment
// I added android so that there is a choice
const manufacturers = Object.keys(deviceDictionary);
let options = '';
manufacturers.forEach(function(man) {
  options += `<option value="${man}">${man}</option>`;
});
selectMan.innerHTML = options;
