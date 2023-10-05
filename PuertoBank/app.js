const btn = document.getElementById('botMod');
const navHome = document.getElementById('home');
const navCuenta = document.getElementById('cu');
const navTrj = document.getElementById('trj');

var msgNom = document.getElementById('msgNombre');
var msgApe1 = document.getElementById('msgApe1');
var msgApe2 = document.getElementById('msgApe2');
var msgNac = document.getElementById('msgNac');

var persona = {
    nombre : 'Inés María',
    apellido1 : 'Barrera',
    apellido2 : 'Llerena',
    nacionalidad : 'Española'
};

btn.addEventListener('click', function(event) {
    modificarDatos();
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
    var newNombre = document.getElementById('nombre').value;
    var newApellido1 = document.getElementById('apellido1').value;
    var newApellido2 = document.getElementById('apellido2').value;
    var newNacionalidad = document.getElementById('nacionalidad').value;

    persona.nombre = newNombre;
    persona.apellido1 = newApellido1;
    persona.apellido2 = newApellido2;
    persona.nacionalidad = newNacionalidad;
}

function validarNombre() {
    var nombre = document.getElementById('nombre').value;
    var regexNombre = /[A-Za-z]{3-30}/;

    if (!regexNombre.test(nombre)) {
        msgNom.style.color = 'red';
        msgNom.textContent = 'Formato de nombre inválido';
    }
}

function validarApellido1() {
    
}

function modificarDatos() {
    msgNom.textContent = '';

    validarNombre();
}