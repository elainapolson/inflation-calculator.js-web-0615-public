// code your functions here

function fetchOptions(){
  return {
    start: $('#startDate').val(),
    end: $('#endDate').val(),
    amount: $('#startPrice').val()
  }
}

function addPriceToPage(amount) {
  var amount = amount.replace("$", "");
  $('#endPrice').val(amount);
  return amount;
}

// callback is addPricetoPage
function priceFor(options, callback) {
   var apiUrl = 'http://www.statbureau.org/calculate-inflation-price-jsonp?jsoncallback=?';

  $.getJSON(apiUrl, {
      country: 'united-states',
      start: options.start,
      end: options.end,
      amount: options.amount,
      format: true
  })
    .done(callback);
}

// callback is addPricetoPage
function fetchEndPrice(callback) {
  priceFor(fetchOptions(), callback);
}
