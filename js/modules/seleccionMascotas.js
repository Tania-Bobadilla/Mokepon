function mascotaSeleccionadaJugador(){

    // primero capturar los labels de las mascotas
    let hipodoge = document.getElementById("hipodoge");
    let capipepo = document.getElementById("capipepo").checked;
    let ratigueya = document.getElementById("ratigueya").checked;

    // tanto si pongo hipodoge o hipodoge == true, la condicion se evalua como verdadera
    // COMO PUEDO VOLVER TODO ESTO EN UNA SOLA FUNCION? PREGUNTAR CHATGPT MAÑANA 28.01
    if (hipodoge.checked){
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

// ES6 export
export default mascotaSeleccionadaJugador
