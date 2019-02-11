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
  $field = $("#star-field");
  $tt = $(".floating-tooltip");
  $form = $(".floating-form");
  $field.on("mousemove", function(event) {
    $tt.html("("+event.pageX+", "+event.pageY+")");
    $tt.css("top", event.pageY);
    $tt.css("left", event.pageX);
    $tt.css("display", "inline-block");
  });
  $field.mouseleave(function() {
    $tt.css("display", "none");
  });
  $field.click(function(event) {
    $new_star = $("<div class='star'></div>");
    $new_star.css("top", event.pageY);
    $new_star.css("left", event.pageX);
    $field.append($new_star);
    $form.css("top", event.pageY);
    $form.css("left", event.pageX);
    $m_box = $(".messag-in");
    $m_box.focus();
    // TODO: make it focus on text box automatically. Remove any chances of clicks on the form being treated the same as those on the page.
  });

});
