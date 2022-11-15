
const $botonEmpezar = document.querySelector("#boton-empezar");
$botonEmpezar.onclick = manejarRonda;
    
const secuenciaMaquina = [];
let secuenciaUsuario = [];
let contadorRondas = 0;

function deshabilitar (elemento){
    elemento.disabled = true;
    //voy a probar solo con el atributo y si no funciona, le sumo lo del onclick con la función vacía
    // elemento.onclick = function(){
    // }
}

function devolverCuadradoRandom(){
    const $cuadrados = document.querySelectorAll(".cuadrado");
    const indice = Math.floor(Math.random()*$cuadrados.length);
    return $cuadrados[indice];
}

function manejarRonda (){
    deshabilitar ($botonEmpezar);
    secuenciaMaquina.push(devolverCuadradoRandom());
    const RETRASO_TURNO_JUGADOR = (secuenciaMaquina.length+1)*1000;

    mostrarMensaje("Turno de la máquina");
    secuenciaMaquina.push(devolverCuadradoRandom());
    setTimeout(secuenciaMaquina.forEach($cuadrado => resaltar($cuadrado))
    , 1000)

    } ganar();
    setTimeout( manejarInputUsuario, RETRASO_TURNO_JUGADOR);

}

function mostrarMensaje(mensaje){
 document.querySelector("h2").textContent = mensaje;
}

function resaltar ($cuadrado){
    $cuadrado.style.filter = "brightness(155%)";
    setTimeout(function(){
        $cuadrado.style.filter = "brightness(100%)";
    }, 1000);
}

function manejarInputUsuario(evento){
    //"tu turno"
    mostrarMensaje("Tu turno!");
    //habilita cuadrados --> usaba el event. target
    //cuando los cuadrados tengan click, se resaltan.

        //for -> i sea === a length de la secuencia
    //toma los inputs
    //compara inputs -> de a uno, los compara cuando son apretados
    //

    //ya no puede tomarlos
    //secuencia vacía
    //devuelve el nro de ronda
}

function ganar (){
    console.log("gaa")
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