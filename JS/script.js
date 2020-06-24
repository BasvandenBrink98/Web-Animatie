document.getElementById('BG_circle').addEventListener("click", redCircleStart);

function redCircleStart(){
  document.getElementById('Red_circle').classList.add('Red_circle_rotate');
  document.getElementById('extraAnimatie').classList.add('Red_circle_scale');
  document.getElementById('Red_circle').classList.remove('hidden');
  document.getElementById('bttn').classList.remove('hidden');
  document.getElementById('bttn').classList.add('bttnAnimation');

}

document.getElementById('bttn').addEventListener("click", start);
document.getElementById('bttn').addEventListener("click", instruction);


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
  document.getElementById('bttn').classList.remove('bttnAnimation');
  document.getElementById('bttn').classList.add('hidden');



}

  //code (regels 32 t/m 42) van: https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/addListener

// var mql = window.matchMedia("(max-width: 420px)");
// console.log(mql);
//
// function instruction(e){
//   if (e.matches) { // scherm is kleiner dan 420px
//     document.getElementById('instructionMobile').classList.remove('hidden');
//     console.log("mobile");
//   } else { //scherm is groter dan 420px
//     document.getElementById('instruction').classList.remove('hidden');
//   }
// }
//
// mql.addListener(instruction);




window.addEventListener("keydown", keyEvents);

function keyEvents(e){
  if (event.keyCode === 84){
    console.log("keydown");
    document.querySelectorAll('.letter').forEach(element => element.classList.add('letterAnimatie'));
    document.getElementById('blackCircle').classList.add('cirkelAnimatie');
    document.getElementById('instruction').classList.add('hidden');
    }
  }

document.getElementById('Yellow_Polygon').addEventListener('dblclick', tekstMobile);
document.getElementById('Yellow_Polygon').addEventListener('click', tekstMobile);


function tekstMobile(){
  document.querySelectorAll('.letter').forEach(element => element.classList.add('letterAnimatie'));
  document.getElementById('blackCircleVertical').classList.add('cirkelAnimatie');
  document.getElementById('instruction').classList.add('hidden');
}
