const $botonEmpezar = document.querySelector("#boton-empezar");
$botonEmpezar.addEventListener("click", manejarRonda, false);

let secuenciaMaquina = [];
let secuenciaUsuario = [];
let contadorCuadradosIngresados = 0;


function deshabilitarBotonEmpezar() {
    $botonEmpezar.disabled = true;
}

function habilitarBotonEmpezar() {
    $botonEmpezar.disabled = false;
}

function deshabilitarCuadrados() {
    const $cuadrados = document.querySelectorAll(".cuadrado");
    $cuadrados.forEach($cuadrado => $cuadrado.onclick = ()=> function(){

    });
}

function devolverCuadradoRandom() {
    const $cuadrados = document.querySelectorAll(".cuadrado");
    const indice = Math.floor(Math.random() * $cuadrados.length);
    return $cuadrados[indice];
}

function manejarRonda() {

    deshabilitarBotonEmpezar();
    deshabilitarCuadrados();

    secuenciaMaquina.push(devolverCuadradoRandom());
    const RETRASO_TURNO_JUGADOR = (secuenciaMaquina.length + 1) * 1000;

    mostrarMensaje("Turno de la máquina");

    secuenciaMaquina.forEach(function ($cuadrado, indice) {

        const RETRASO_RESALTADO = (indice + 1) * 1000;

        setTimeout(() => {
            resaltar($cuadrado);
        }, RETRASO_RESALTADO);

    })

    setTimeout(() => {
        mostrarMensaje("Tu turno!");
        const $cuadrados = document.querySelectorAll(".cuadrado");
        $cuadrados.forEach($cuadrado => $cuadrado.onclick = manejarInputUsuario);
    }, RETRASO_TURNO_JUGADOR);

}

function mostrarMensaje(mensajeTexto, usuarioGana) {
    const $mensaje = document.querySelector("h2");
    $mensaje.textContent = mensajeTexto;

    if (usuarioGana === true) {
        $mensaje.style.color = "#A5C879";
    } else if (usuarioGana === false) {
        $mensaje.style.color = "#F2545B";
    } else {
        $mensaje.style.color = "#F3EFE0";
    }

}

function resaltar($cuadrado) {
    $cuadrado.style.filter = "brightness(155%)";
    setTimeout(function () {
        $cuadrado.style.filter = "brightness(100%)";
    }, 500);

}

function manejarInputUsuario(evento) {

    const $cuadrado = evento.target;
    resaltar($cuadrado);

    secuenciaUsuario.push($cuadrado);
    let inputUsuarioCoincide = compararSecuencia(contadorCuadradosIngresados);

    if (inputUsuarioCoincide) {
    //contador de cuadrados ingresados no subiría siempre? lo mismo con la ronda mayor. No tiene sentido que solo esté si coinciden
        contadorCuadradosIngresados ++;
        const rondaMayor = contadorCuadradosIngresados;
        actualizarRondas(rondaMayor);

        const usuarioGana = rondaMayor === 10;
        
        if (usuarioGana) {
            ganar();

        } else if (secuenciaUsuario.length === secuenciaMaquina.length) {
            secuenciaUsuario = [];
            contadorCuadradosIngresados = 0;

            const RETRASO_CAMBIAR_TURNOS = 1000;
            setTimeout(manejarRonda, RETRASO_CAMBIAR_TURNOS);
        }


    } else {
        perder();
    }

}

function actualizarRondas(ronda) {
    document.querySelector("#numero-rondas").textContent = ronda;
}

function compararSecuencia(indice) {
    if (secuenciaMaquina[indice] === secuenciaUsuario[indice]) {
        return true;
    } else {
        return false;
    }
}

function ganar() {
    deshabilitarCuadrados();
    mostrarMensaje("¡Ganaste!", true);
}

function perder() {
    deshabilitarCuadrados();
    mostrarMensaje("Perdiste...", false);
    setTimeout(ofrecerPartidaNueva, 2000);
}

function ofrecerPartidaNueva() {
    mostrarMensaje('Si querés jugar de vuelta, apretá "START"', true);
    habilitarBotonEmpezar();
    reiniciarValoresIniciales();
}

function reiniciarValoresIniciales() {
    secuenciaMaquina = [];
    secuenciaUsuario = [];
    contadorCuadradosIngresados = 0;
    actualizarRondas(contadorCuadradosIngresados);
}
