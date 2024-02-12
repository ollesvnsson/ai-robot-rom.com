function spelaLjud() {
  var ljud = document.getElementById("indietrain");
  if (ljud.paused){
    ljud.play();
  }
  else {
    ljud.pause()
  }
  
}
