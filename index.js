/*const vaso = document.getElementById("vaso");
const casa = document.getElementById("casa");
const antes = document.getElementById("antes");
const despues = document.getElementById("despues");

function cam(){
  antes.style.visibility = "hidden";
  despues.style.visibility = "visible";
}
function cam1(){
  antes.style.visibility = "visible";
  despues.style.visibility = "hidden";  
}

  vaso.addEventListener("click", cam);
  casa.addEventListener("click", cam1);
*/

let cremaInfo = document.getElementById("info");
let cremaImg = document.getElementById("imgCrema");

function mostrarInfoCrema(){
  cremaInfo.style.visibility = "visible";
}
function mostrarImgCrema(){
  cremaInfo.style.visibility = "hidden";
}

cremaImg.addEventListener("click", mostrarInfoCrema);
cremaInfo.addEventListener("click", mostrarImgCrema);