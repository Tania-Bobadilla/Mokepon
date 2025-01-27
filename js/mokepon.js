// let botonMascota = document.getElementById("botonMascota");
// botonMascota.addEventListener("click", () => {
//     let input = document.getElementById("cosa").value;
//     document.getElementById("parrafo").innerHTML = `elegiste a ${input}`
// })


// ANTES DE CONTINUAR MAÑANA 27.1 RECORDAR UNIR ESTA RAMA CON LA MAIN!!!!!!!!

function iniciarJuego(){
    let botonMascota = document.getElementById("botonMascota");
    botonMascota.addEventListener("click", mascotaSeleccionadaJugador)    
}


function mascotaSeleccionadaJugador(){

    // primero capturar los labels de las mascotas
    let hipodoge = document.getElementById("hipodoge");
    let capipepo = document.getElementById("capipepo").checked;
    let ratigueya = document.getElementById("ratigueya").checked;

    // tanto si pongo hipodoge o hipodoge == true, la condicion se evalua como verdadera
    // COMO PUEDO VOLVER TODO ESTO EN UNA SOLA FUNCION? PREGUNTAR CHATGPT MAÑANA 27.01
    if (hipodoge){
        alert("elegiste a hipodoge");
        document.getElementById("nombreMascotaJugador").innerHTML = "hipodoge";
    } else if (capipepo == true){
        alert("elegiste a capipepo");
        document.getElementById("nombreMascotaJugador").innerHTML = "capipepo";
    } else if (ratigueya == true){
        alert("elegiste a ratigueya");
        document.getElementById("nombreMascotaJugador").innerHTML = "ratigueya"
    } else {
        alert("debes elegir una mascota")
    }    
    // } else if (hipodoge == false || ratigueya == false || capipepo == false){
    //     alert("debes elegir una mascota")
    // }

    // alert("ya seleccionaste tu mascota")

    // -------------------------------------

    // LUEGO DE QUE YO ELIJO UNA MASCOTA, EL PC ELIGE ALEATORIAMENTE
    
    mascotaSeleccionadaPC()
}

function mascotaSeleccionadaPC(){
    let mascotaAleatoria = aleatorio(1,3);

    if (mascotaAleatoria == 1){
        alert("el enemigo eligio a hipodoge")
        document.getElementById("nombreMascotaEnemigo").innerHTML = "hipodoge"
    } else if (mascotaAleatoria == 2){
        alert("el enemigo eligio a capipepo")
        document.getElementById("nombreMascotaEnemigo").innerHTML = "capipepo"
    } else {
        alert("el enemigo eligio a ratigueya")
        document.getElementById("nombreMascotaEnemigo").innerHTML = "ratigueya"
    }
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + 1 )
}



// al darle el evento load a la ventana del navegador y la funcion iniciarJuego, el script puede ir el el head y aun asi no se iniciara antes de haber cargado los elemento html, en este caso, al hacer una mascota y seleccionarla

window.addEventListener("load", iniciarJuego)


