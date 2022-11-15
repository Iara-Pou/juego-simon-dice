//seleccionar el botón empezar para empezar el juego

const $botonEmpezar = document.querySelector("#boton-empezar");
$botonEmpezar.onclick = empezarJuego;

function empezarJuego(){

    deshabilitar ($botonEmpezar);

    const secuenciaMaquina = [];
    const secuenciaUsuario = [];
    let contadorRondas = 0;

}

function deshabilitar (elemento){
    elemento.disabled = true;
}
//manejar ronda, --> una vez que ya la ejecuté deshabilitar el botón para empezar
    //tener la secuencia de la máquina vacía

            //antes voy a tener que tener todos los cuadrados por separado, sino no va a saber que resaltar la máquina.
    //sumar un color random a la secuencia
        //mostrar la secuencia con resaltar (+ lo del set time out, darle un segundo a cada elemento de la secuencia)

    //esperar el input del usuario
    //si el primer color es = al primero de la secuencia, paso a validar el segundo. durante el length de la máquina
        //si no es igual, pierde. deshabilitar los botónes
    
        //si pasa la primera ronda, ir a la segunda.

        //contar rondas, si llega a 10, ganó.

        //si pierde 
        //habilitar el botón para que pueda jugar de vuelta
        //actualizar mensaje ("Perdiste, si querés jugar de vuelta, apretá empezar")