document.getElementById('bttn').addEventListener("click", groot);

function groot(){
  document.getElementById('BG_circle').classList.toggle('groot');
  document.getElementById('Red_circle').classList.toggle('Red_circle_active');
  console.log("groot");
  document.getElementById('Blue_Polygon').classList.toggle('Blue_Polygon_animation');
  document.getElementById('Red_Polygon').classList.toggle('Red_Polygon_animation');
  document.getElementById('Green_Polygon').classList.toggle('Green_Polygon_animation');
  console.log("red circle Red_circle_active");
}


// var redPoly = document.querySelector('.st3');
//
// redPoly.addEventListener('mouseover', kleur);
//
// function kleur() {
//   redPoly.classList.toggle('kleur');
//
// }
console.log("test");
