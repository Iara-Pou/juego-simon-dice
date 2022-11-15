
const $botonEmpezar = document.querySelector("#boton-empezar");
$botonEmpezar.onclick = manejarRonda;
    
const secuenciaMaquina = [];
let secuenciaUsuario = [];
let contadorRondas = 0;

function deshabilitarBoton (){
    $botonEmpezar.disabled = true;
}

function deshabilitarCuadrados (){
    const $cuadrados = document.querySelectorAll(".cuadrado");
    $cuadrados.forEach($cuadrado => $cuadrado.onclick = "");
}

function devolverCuadradoRandom(){
    const $cuadrados = document.querySelectorAll(".cuadrado");
    const indice = Math.floor(Math.random()*$cuadrados.length);
    return $cuadrados[indice];
}

function manejarRonda (){
    deshabilitarBoton();
    deshabilitarCuadrados();

    secuenciaMaquina.push(devolverCuadradoRandom());
    const RETRASO_TURNO_JUGADOR = (secuenciaMaquina.length + 1)*1000;

    mostrarMensaje("Turno de la máquina");

    secuenciaMaquina.forEach(function($cuadrado, indice){

        const RETRASO_RESALTADO = (indice + 1) * 1000;

        setTimeout(() => { resaltar($cuadrado)          
        }, RETRASO_RESALTADO);

    })

    setTimeout(()=>{
        mostrarMensaje("Tu turno!");
        const $cuadrados = document.querySelectorAll(".cuadrado");
        $cuadrados.forEach($cuadrado => $cuadrado.onclick = manejarInputUsuario);
    }, RETRASO_TURNO_JUGADOR);

}

function mostrarMensaje(mensajeTexto, flag=""){
    const $mensaje = document.querySelector("h2")
    $mensaje.textContent = mensajeTexto;

 if(flag === true){
    $mensaje.style.color = "#A5C879";
 } else if (flag === false){
    $mensaje.style.color = "#F2545B";
 } else {
    $mensaje.style.color = "#F3EFE0";
 }

}

function resaltar ($cuadrado){
    $cuadrado.style.filter = "brightness(155%)";
    setTimeout(function(){
        $cuadrado.style.filter = "brightness(100%)";
    }, 500);

}

function manejarInputUsuario(evento){

    if(secuenciaUsuario.length < secuenciaMaquina.length){
        const $cuadrado = evento.target;
        resaltar($cuadrado);

        secuenciaUsuario.push($cuadrado) 
        let esExito = validar (contadorRondas) 
        
        if(esExito){
            const rondaMayor = ++ contadorRondas ;

            if(rondaMayor === 10){
                actualizarRondas(rondaMayor);
                ganar();
            }else if(secuenciaUsuario.length === secuenciaMaquina.length){
                actualizarRondas(rondaMayor);

                secuenciaUsuario = [];
                contadorRondas = 0;

                manejarRonda();
            } 

        } else {
            perder();
        }
        
    }

}

function actualizarRondas (ronda){
    document.querySelector("#numero-rondas").textContent = ronda;
}

function validar (contadorRondas){
    if (secuenciaMaquina[contadorRondas] === secuenciaUsuario[contadorRondas]){
        return true;
    } else {
        return false;
    }
}

function ganar (){
    deshabilitarCuadrados();
    mostrarMensaje("¡Ganaste!", true);
}

function perder (){
    deshabilitarCuadrados();
    mostrarMensaje("perdiste", false);
}

        //habilitar el botón para que pueda jugar de vuelta
        //actualizar mensaje ("Perdiste, si querés jugar de vuelta, apretá empezar")