let cabAcordeon = document.getElementsByClassName("cabAcordeon");
let contenido = document.getElementsByClassName("contenido");
let circulo = document.getElementsByClassName("circulo");


for (let i = 0; i < cabAcordeon.length; i++) {
    cabAcordeon[i].addEventListener("click", function () {
        contenido[i].classList.toggle("animacionContenido");
        let alturaContenido = contenido[i].clientHeight;
        if (alturaContenido > 0) {//ff2f2fcb
            circulo[i].style.backgroundColor = "#e5ff00";
        }else {
            circulo[i].style.backgroundColor = "#e5ff00"; 
        }
    });
}


var mainDiv = document.getElementById('main-button');
mainDiv.addEventListener('click', function(){
  this.children.item(0).classList.toggle('fa-times');
  this.classList.toggle('open');
});

/**/



    document.getElementById('dias').innerText = (5),
    document.getElementById('horas').innerText = (12),
    document.getElementById('minutos').innerText = (0),
    document.getElementById('segundos').innerText = (0);

      document.getElementById('diass').innerText = (5),
    document.getElementById('horass').innerText = (12),
    document.getElementById('minutoss').innerText = (0),
    document.getElementById('segundoss').innerText = (0);

