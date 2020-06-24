document.getElementById('BG_circle').addEventListener("click", redCircleStart);

function redCircleStart(){
  document.getElementById('Red_circle').classList.add('Red_circle_rotate');
  document.getElementById('extraAnimatie').classList.add('Red_circle_scale');
  document.getElementById('Red_circle').classList.remove('hidden');
  document.getElementById('bttn').classList.remove('hidden');
}



document.getElementById('bttn').addEventListener("click", start);

function start(){
  document.getElementById('BG_circle').classList.add('BG_circleToNormal');
  document.getElementById('BG_circle').classList.remove('startAnimation');
  document.getElementById('Red_circle').classList.remove('Red_circle_rotate');
  document.getElementById('extraAnimatie').classList.remove('Red_circle_scale');
  document.getElementById('Red_circle').classList.add('Red_circle_active');
  document.getElementById('Blue_Polygon').classList.add('Blue_Polygon_animation');
  document.getElementById('Red_Polygon').classList.add('Red_Polygon_animation');
  document.getElementById('Green_Polygon').classList.add('Green_Polygon_animation');
  document.getElementById('Yellow_Polygon').classList.add('Yellow_Polygon_animation');
  document.getElementById('Blue_Polygon').classList.remove('outOfView');
  document.getElementById('Red_Polygon').classList.remove('outOfView');
  document.getElementById('Green_Polygon').classList.remove('outOfView');
  document.getElementById('Yellow_Polygon').classList.remove('outOfView');
  document.getElementById('instruction').classList.remove('hidden');
  document.getElementById('BG_circle').classList.add('normal');
  }


window.addEventListener("keydown", keyEvents);

function keyEvents(e){
  if (event.keyCode === 84){
    console.log("keydown");
    document.querySelectorAll('.letter').forEach(element => element.classList.add('letterAnimatie'));
    document.getElementById('blackCircle').classList.add('cirkelAnimatie');
    }
  }

document.getElementById('Yellow_Polygon').addEventListener('dblclick', tekstMobile);

function tekstMobile(){
  document.querySelectorAll('.letter').forEach(element => element.classList.add('letterAnimatie'));
  document.getElementById('blackCircleVertical').classList.add('cirkelAnimatie');
}



    // function myFunction(x) {
    //   if (x.matches) { // If media query matches
    //     document.getElementById('blackCircleVertical').classList.add('cirkelAnimatie');
    //   } else {
    //     document.getElementById('blackCircle').classList.add('cirkelAnimatie');
    //   }
    // }
    //
    // var x = window.matchMedia("(max-width: 420px)")
    // myFunction(x) // Call listener function at run time
    // x.addListener(myFunction) // Attach listener function on state changes
    //
    // }
