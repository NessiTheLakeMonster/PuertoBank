const btn = document.getElementById('botMod');
const navHome = document.getElementById('home');
const navCuenta = document.getElementById('cu');
const navTrj = document.getElementById('trj');

var persona = {
    nombre : 'Inés María',
    apellido1 : 'Barrera',
    apellido2 : 'Llerena',
    nacionalidad : 'Española'
};

btn.addEventListener('click', function(event) {
    modificarDatos();
})

// ------------------------ CONTROLES NAVEGACION ----------------------------

/* navTrj.addEventListener('mouseover', function(event) {
    navTrj.style.backgroundColor = '#555';
})

navTrj.addEventListener('mouseout', function(event) {
    navTrj.style.backgroundColor = '#333';
})
 */

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