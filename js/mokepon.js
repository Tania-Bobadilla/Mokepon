// ES6 import
import mascotaSeleccionadaJugador from "./modules/seleccionMascotas.js";

function iniciarJuego(){
    let botonMascota = document.getElementById("botonMascota");
    botonMascota.addEventListener("click", mascotaSeleccionadaJugador)    
}



// al darle el evento load a la ventana del navegador y la funcion iniciarJuego, el script puede ir el el head y aun asi no se iniciara antes de haber cargado los elemento html, en este caso, al hacer una mascota y seleccionarla

window.addEventListener("load", iniciarJuego)


