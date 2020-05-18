document.getElementById('bttn').addEventListener("click", groot);

function groot(){
  document.getElementById('BG_circle').classList.toggle('groot');
  console.log("groot");
}


var redPoly = document.querySelector('.st3');

redPoly.addEventListener('mouseover', kleur);

function kleur() {
  redPoly.classList.toggle('kleur');

}
