const btn = document.getElementById('botMod');
const navHome = document.getElementById('home');
const navCuenta = document.getElementById('cu');
const navTrj = document.getElementById('trj');

var msgNom = document.getElementById('msgNombre');
var msgApe1 = document.getElementById('msgApe1');
var msgApe2 = document.getElementById('msgApe2');
var msgNac = document.getElementById('msgNac');
var msgBueno = document.getElementById('msgBueno');

const regex1 = /[A-Za-z]{3,20}/;
const regex2 = /[A-Za-z]{3,15}/;


var persona = {
    nombre : 'Ines Maria',
    apellido1 : 'Barrera',
    apellido2 : 'Llerena',
    nacionalidad : 'Española'
};

var datosCuenta = {
    IBAN: "ES21 1465 0100 72 2030976293",
    saldo: 500
}

class Tarjeta {
    constructor(numeroTrj, cvv, activa) {
        this.numeroTrj = numeroTrj;
        this.cvv = cvv;
        this.activa = activa;
    }
}

const tarjeta1 = new Tarjeta('1234 12345 123456', '123', 'Si');
const tarjeta2 = new Tarjeta('1234 12345 123456', '123', 'No');


var cuenta = {
    persona,
    datosCuenta,
    tarjetas :  [tarjeta1, tarjeta2]
}

localStorage.setItem("cuenta",JSON.stringify(cuenta))

btn.addEventListener('click', function(event) {
    if (validarDatos()) {
        modificarDatos();

        msgBueno.style.color = 'green';
        msgBueno.textContent = 'Usuario modificado correctamente!!';
    }
})

navHome.addEventListener('focus', function(event) {
    cargarDatos()
})

navCuenta.addEventListener('focus', function(event) {
    cargarDatos()
})

navTrj.addEventListener('focus', function(event) {
    cargarDatos()
})

// --------------------------- FUNCIONES -------------------------------------

function navegar(){
    var cuentaString = JSON.stringify(cuenta);
    localStorage.setItem("cuenta",cuentaString)
    window.location.href='datos.html'
}

function cargarDatos(){
    compararDatos()
    document.getElementById('nombre').value = cuenta.persona.nombre;
    document.getElementById('apellido1').value = cuenta.persona.apellido1;
    document.getElementById('apellido2').value = cuenta.persona.apellido2;
    document.getElementById('nacionalidad').value = cuenta.persona.nacionalidad;
    menu = document.getElementById('menu').innerHTML
}

function cargarCabecera(dest){  
    document.getElementById(dest).innerHTML = '   <h1>BancoPuertollano</h1>    <ul>        <li><a href="index.html">Inicio</a></li>        <li><a href="infoCuenta.html">Informaci&#243;n Cuenta</a></li>             <li><a href="tarjetas.html">Tarjetas</a></li>    </ul>' 
}

function modificarDatos() {
    cuenta.persona.nombre = document.getElementById('nombre').value;
    cuenta.persona.apellido1 = document.getElementById('apellido1').value;
    cuenta.persona.apellido2 = document.getElementById('apellido2').value;
    cuenta.persona.nacionalidad = document.getElementById('nacionalidad').value;
}
function cargarCuentaMod(){
    return newCuenta = JSON.parse(localStorage.getItem("cuenta"))

}
function compararDatos(){
    var cuenta2 = cargarCuentaMod()
    if (cuenta != cuenta2){
        cuenta.persona = cuenta2.persona
        cuenta.datosCuenta = cuenta2.datosCuenta
        cuenta.tarjetas = cuenta2.tarjetas
    }
}
function validarNombre() {
    var nombre = document.getElementById('nombre').value;

    if (!regex1.test(nombre)) {
        msgNom.style.color = 'red';
        msgNom.textContent = 'Formato de nombre inválido';
    }

    return regex1.test(nombre);
}

function validarApellido1() {
    var apellido1 = document.getElementById('apellido1').value;

    if (!regex1.test(apellido1)) {
        msgApe1.style.color = 'red';
        msgApe1.textContent = 'Formato de apellido inválido';
    }

    return regex1.test(apellido1);
}

function validarApellido2() {
    var apellido2 = document.getElementById('apellido2').value;

    if (!regex1.test(apellido2)) {
        msgApe2.style.color = 'red';
        msgApe2.textContent = 'Formato de apellido inválido';
    }

    return regex1.test(apellido2);
}

function validarNacionalidad() {
    var nacionalidad = document.getElementById('nacionalidad').value;

    if (!regex2.test(nacionalidad)) {
        msgNac.style.color = 'red';
        msgNac.textContent = 'Formato de nacionalidad inválida';
    }

    return regex2.test(nacionalidad);
}

function validarDatos() {
    limpiarErrores();

    var valido = true;

    if (!validarNombre()) {
        valido = false;
    }

    if (!validarApellido1()) {
        valido = false;
    }

    if (!validarApellido2()) {
        valido = false;
    }

    if (!validarNacionalidad()) {
        valido = false;
    }

    return valido;
}

function limpiarErrores() {
    msgNom.textContent = '';
    msgApe1.textContent = '';
    msgApe2.textContent = '';
    msgNac.textContent = '';
}