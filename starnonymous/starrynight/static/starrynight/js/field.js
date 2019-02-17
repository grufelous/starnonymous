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
  $submit_btn = $("#submit_btn");

  var starJSON = document.getElementById('star-data').innerHTML
  $sJSON = JSON.parse(starJSON)

  console.log($sJSON[0].fields['star_label']);

  $.each($sJSON, function(i, v) {
    console.log("Creating star #" + i + " \n")
    $new_star = $("<div class='star'></div>")
    $new_star.css("top", v.fields['yCoord']+"px")
    $new_star.css("left", v.fields['xCoord']+"px")
    $new_star_label = $("<p class='star-label'></p>")
    $new_star_label.text(v.fields['star_label'])
    $new_star_desc = $("<div class='star-text'></div>")
    $new_star_desc.text(v.fields['star_message'])
    $new_star.append($new_star_label, $new_star_desc)
    $("#star-field").append($new_star)
    /*$star = $("#star"+i)
    $star.css("top", v.fields['yCoord']+"px")
    $star.css("left", v.fields['xCoord']+"px")
    $label = document.querySelector('#star' + i + ' > p')
    $label.innerHTML = v.fields['star_label']
    document.log($label.width())

    $star_text = document.querySelector('#star' + i + ' > div')
    $star_text.innerHTML = v.fields['star_message']*/
  })

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
    //record click coordinates
    $x = event.pageX;
    $y = event.pageY;
    //locate the required fields. Optimize later.
    $xEntry = $("#x-coordinate");
    $yEntry = $("#y-coordinate");
    //set the coordinate fields' values
    $xEntry.val($x);
    $yEntry.val($y);
    //position the new star
    $new_star.css("top", $y);
    $new_star.css("left", $x);
    //add star to field
    $field.append($new_star);
    //turn off clicking - will be re-enabled when submitted, or when user clicks elsewhere
    $field.off("click");
    //place the form alongside click
    $form.css("top", $y);
    $form.css("left", $x);
    // TODO: make DTF/SDTW work with time from jQuery
    /*$m_box = $(".message-in");
    $m_box.focus();*/
    // TODO: make it focus on text box automatically. Remove any chances of clicks on the form being treated the same as those on the page.
  });

  $submit_btn.click(function() {

    $field.on("click");
  });

});
