// console.log(prices["trek"]["tuneUp"])
const selectBrand = document.getElementById('selectBrand');
const selectIssue = document.getElementById('selectIssue');
var priceTitle = document.getElementById('price-title');

selectBrand.addEventListener('change', function(e) {
  const brand = selectBrand.value;
  const models = Object.keys(prices[brand]);

  let options = '';
  models.forEach(function(model) {
    options += `<option value="${model}">${model}</option>`;
  });
  selectIssue.innerHTML = options;
});


selectIssue.addEventListener('change', function(e){
    const issue = selectIssue.value
    const brand = selectBrand.value
    
    if (issue === undefined || brand === undefined) {
        return;
    }

});