document.getElementById('bttn').addEventListener("click", start);

function start(){
  document.getElementById('Red_circle').classList.toggle('Red_circle_active');
  document.getElementById('Blue_Polygon').classList.add('Blue_Polygon_animation');
  document.getElementById('Red_Polygon').classList.add('Red_Polygon_animation');
  document.getElementById('Green_Polygon').classList.add('Green_Polygon_animation');
  document.getElementById('Yellow_Polygon').classList.add('Yellow_Polygon_animation');
  document.getElementById('Blue_Polygon').classList.remove('outOfView');
  document.getElementById('Red_Polygon').classList.remove('outOfView');
  document.getElementById('Green_Polygon').classList.remove('outOfView');
  document.getElementById('Yellow_Polygon').classList.remove('outOfView');
  document.getElementById('instruction').classList.remove('hidden');
}

window.addEventListener("keydown", keyEvents);

function keyEvents(e){
  let keyCode = e.keyCode;
  let letters = document.querySelectorAll('.letter');
  if (keyCode === 20){
    console.log("keydown");
    letters.forEach(element => element.classList.add('letterAnimatie'));
    letters.forEach(element => element.removeAttribute('id'));

    // document.querySelectorAll('.letter').forEach(element => element.classList.add('letterAnimatie'));
    // document.querySelectorAll('.letter').forEach(element => element.removeAttribute('id'));
  }

  if(event.keyCode === 57){
    console.log("spatie");
  }

}
