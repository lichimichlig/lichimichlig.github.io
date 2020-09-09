var intentos;
intentos = 4;


function prueba() {
    var entrada = document.getElementById("respuesta").value;

    var correcto = "humanos";



    if (entrada == correcto || entrada == "Humanos") {
        document.getElementById("correcto").style.display = "block";
        document.getElementById("reset").style.display = "block";
        document.getElementById("boton").style.display = "none";

    }
    else {
        intentos--;

        document.getElementById("alerta").innerText = 'Numero de intentos restantes: ' + intentos;
        if (intentos == 2) {
            document.getElementById("pista1").style.display = "block";
        } else {
            if (intentos == 1) {
                document.getElementById("pista2").style.display = "block";
            } else {
                if (intentos <= 0) {
                    document.getElementById("boton").style.display = "none";
                    document.getElementById("perdio").style.display = "block";
                    document.getElementById("reset").style.display = "block";
                }
            }
        }
    }


}
function Reinicia() {
    intentos = 4;
    document.getElementById("correcto").style.display = "none";
    document.getElementById("pista1").style.display = "none";
    document.getElementById("pista2").style.display = "none";
    document.getElementById("perdio").style.display = "none";
    document.getElementById("alerta").innerText = 'Numero de intentos restantes: ' + intentos;
    document.getElementById("boton").style.display = "block";
    document.getElementById("reset").style.display = "none";

}

function MostrarOcultar() {
    var form = document.getElementById("formulario");

    if (form.style.display == "none") {
        Mostrar();
    } else {
        Ocultar();
    }

}
function Mostrar() {
    document.getElementById("formulario").style.display = "block";
}
function Ocultar() {
    document.getElementById("formulario").style.display = "none";

}