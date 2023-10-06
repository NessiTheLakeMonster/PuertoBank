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

function cargarDatos(){
    document.getElementById('nombre').value = persona.nombre;
    document.getElementById('apellido1').value = persona.apellido1;
    document.getElementById('apellido2').value = persona.apellido2;
    document.getElementById('nacionalidad').value = persona.nacionalidad;
    menu = document.getElementById('menu').innerHTML
}

function cargarCabecera(dest){  
    document.getElementById(dest).innerHTML = '   <h1>BancoPuertollano</h1>    <ul>        <li><a href="index.html">Inicio</a></li>        <li><a href="infoCuenta.html">Informaci&#243;n Cuenta</a></li>             <li><a href="tarjetas.html">Tarjetas</a></li>    </ul>' 
}

function modificarDatos() {
    persona.nombre = document.getElementById('nombre').value;
    persona.apellido1 = document.getElementById('apellido1').value;
    persona.apellido2 = document.getElementById('apellido2').value;
    persona.nacionalidad = document.getElementById('nacionalidad').value;
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