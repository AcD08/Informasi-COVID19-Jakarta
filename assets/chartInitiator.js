$(document).ready(function(){
  const Url='https://covid19-live-api.herokuapp.com/getAllByProvince?prov=DKI%20Jakarta';
  $.getJSON(Url, function(result){
    chart1(result)
    chart2(result)
    chart3(result)
  })
})
