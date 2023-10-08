var cantIngresar = document.getElementById('saldoIngresar');
var cantRetirar = document.getElementById('saldoRetirar');

const btnIngresar = document.getElementById('btnIngresar');
const btnRetirar = document.getElementById('btnRetirar');

var infoOperacion = document.getElementById('infoOperacion');
var campoIban = document.getElementById('iban')
var campoSaldo = document.getElementById('saldo')


class DatosCuenta {
    constructor(iban, saldo) {
        this.iban = iban
        this.saldo = saldo
    }

    restarSaldo(cant){
        this.saldo -= cant
    }

    sumarSaldo(cant){
        this.saldo += cant
    }
}

const regNumeros = /^[0-9]+$/;

var datos

let cuenta
// --------------------------- EVENTOS -------------------------------------

cantIngresar.addEventListener('focus', function(event) {
    cantRetirar.value = '';
})

cantRetirar.addEventListener('focus', function(event) {
    cantIngresar.value = '';
})

btnIngresar.addEventListener('click', function(event) {
    realizarOperacion();
    document.getElementById('saldo').innerHTML = datos.saldo;
    actualizarCampos()
    navegar()
})

btnRetirar.addEventListener('click', function(event) {
    realizarOperacion();
    document.getElementById('saldo').innerHTML = datos.saldo;
    actualizarCampos()
    navegar()
})


// --------------------------- FUNCIONES -------------------------------------

function navegar(){
    var cuentaString = JSON.stringify(cuenta);
    localStorage.setItem("cuentaInfo",cuentaString)
}

function cargarDatos(){
    // Recuperamos los datos que ya hemos creado en app.js
    let cuentaJson = localStorage.getItem('cuenta')

    if (cuentaJson == null){
        datos = new DatosCuenta('ES21 1465 0100 72 2030976293',500)
    }else {
        cuenta = JSON.parse(cuentaJson)
        datos = new DatosCuenta(cuenta.datosCuenta.IBAN, parseInt(cuenta.datosCuenta.saldo));
    }
    campoIban.value = datos.iban
    campoSaldo.value = datos.saldo
}

function cargarCabecera(dest){
    document.getElementById(dest).innerHTML = '   <h1>BancoPuertollano</h1>    <ul>        <li><a href="index.html" onclick="navegar()">Inicio</a></li>        <li><a href="infoCuenta.html" ">Informaci&#243;n Cuenta</a></li>             <li><a href="tarjetas.html" onclick="navegar()">Tarjetas</a></li>    </ul>'
}

function ingresarDinero() {
    infoOperacion.textContent = 'Dinero ingresado correctamente : ' + cantIngresar.value;
    infoOperacion.style.color = 'green';
    datos.sumarSaldo(parseInt(cantIngresar.value))
}


function retirarDinero() {
    infoOperacion.textContent = 'Dinero retirado correctamente : ' + cantRetirar.value;
    infoOperacion.style.color = 'green';
    datos.restarSaldo(cantRetirar.value)
}

function actualizarCampos(){
    // Actualizamos los datos cuando se realiza alguna operacion en la propia página
    campoSaldo.value = datos.saldo

    // Actualizamos el objeto de
    //cuenta.datosCuenta.saldo = datos.saldo
}

// --------------------------- VALIDACIONES -------------------------------------

function validarIngreso() {
    var esValido = false;
    if (regNumeros.test(cantIngresar.value)){
        esValido = true;
    }
    if (cantIngresar.value < 0){
        esValido = false;
    }
    return esValido;
}
function validarRetirada(){
    var esValido = true;
    if (!regNumeros.test(cantRetirar.value)){
        esValido = false;
    }
    if (cantRetirar.value > datos.saldo){
        esValido = false;
    }
    if (cantRetirar.value < 0){
        esValido = false;
    }
    return esValido;
}

function realizarOperacion(){
    if (validarIngreso()){
        ingresarDinero();
    } else {
        infoOperacion.textContent = 'No se ha podido realizar esa operación'
        infoOperacion.style.color = 'red'
    }
    if (validarRetirada()) {
        retirarDinero();
    } else {
        infoOperacion.textContent = 'No se ha podido realizar esa operación'
        infoOperacion.style.color = 'red'
    }
}
