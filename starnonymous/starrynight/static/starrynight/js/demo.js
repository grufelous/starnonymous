$(document).ready(function(){
  var x = document.getElementById('j-data').innerHTML
  var y = JSON.parse(x)
  console.log(y[0].fields.star_label)
  /*$dat = $("#j-data")
  console.log($("#j-data").get())*/

})
