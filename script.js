
const $botonEmpezar = document.querySelector("#boton-empezar");
$botonEmpezar.onclick = empezarJuego;

function empezarJuego(){
    deshabilitar ($botonEmpezar);

    const secuenciaMaquina = [];
    const secuenciaUsuario = [];
    let contadorRondas = 0;

    secuenciaMaquina.push(devolverCuadradoRandom());

}

function deshabilitar (elemento){
    elemento.disabled = true;
}

function devolverCuadradoRandom(){
    const $cuadrados = document.querySelectorAll(".cuadrado");
    const indice = Math.floor(Math.random()*$cuadrados.length);
    return $cuadrados[indice];
}
//manejar ronda --> empieza con el push, ronda serviría para mostrar elementos
                    // con la , set time out función resaltar,  1000
                    //mensaje = "turno de la máquina"
                    //deshabilitar los cuadrados : se podía hacer pasándole una función vacía. no sé si con el disabled no toma los onclick -> de los botones no pero desconozco de un div
//, esperar input usuario, mandar a verificarlo, 
//verificarlo lo manda a resultados si lo hubieran si gano mandarlo a ganar y si perdió mandarlo a perder.
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