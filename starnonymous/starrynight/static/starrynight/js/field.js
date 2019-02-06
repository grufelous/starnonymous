starContainer = document.getElementById("star-container");
addEventListener("mousemove", function(mouse_event) {
  posX = mouse_event.clientX+"px"
  posY = mouse_event.clientY+"px"
  document.getElementById('indicator').innerHTML = posX + ", " + posY
  var new_star = document.createElement("P")
  new_star.classList.add('star')
  new_star.style.top = posY
  new_star.style.left = posX
  starContainer.append(new_star)
  console.log(posX + ", " + posY)
})
