$(document).ready(function(){
  const Url='https://covid19-live-api.herokuapp.com/getNationalSummary';
  // var data= document.getElementById('NasionalPositif')
  $.getJSON(Url, function(result){
    $(`<p style="font-size: 20px;">`+new Intl.NumberFormat(['ban', 'id']).format(result.positive)+`</p>`).appendTo("#NasionalPositif")
    $(`<p style="font-size: 20px;">`+new Intl.NumberFormat(['ban', 'id']).format(result.inCare)+`</p>`).appendTo("#NasionalPerawatan")
    $(`<p style="font-size: 20px;">`+new Intl.NumberFormat(['ban', 'id']).format(result.recovered)+`</p>`).appendTo("#NasionalSembuh")
    $(`<p style="font-size: 20px;">`+new Intl.NumberFormat(['ban', 'id']).format(result.died)+`</p>`).appendTo("#NasionalMeninggal")
  })
})
