//starContainer = document.getElementById("star-container");

/*addEventListener("click", function(mouse_event) {
  posX = mouse_event.clientX+"px"
  posY = mouse_event.clientY+"px"
  document.getElementById('indicator').innerHTML = posX + ", " + posY
  var new_star = document.createElement("P")
  new_star.classList.add('star')
  new_star.style.top = posY
  new_star.style.left = posX
  starContainer.append(new_star)
  document.getElementById('x-val').value = posX
  document.getElementById('y-val').value = posY
  console.log(posX + ", " + posY)
})
*/
$(document).ready(function() {
  $("#star-field").on("mousemove", function(event) {
    $("#star-field").append("<div class=\"floating-tooltip\">("+event.pageX+", "+event.pageY+")</span><br/>");
  });
});
