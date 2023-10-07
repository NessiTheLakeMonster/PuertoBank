
var cantIngresar = document.getElementById('saldoIngresar');
var cantRetirar = document.getElementById('saldoRetirar');
const btnIngresar = document.getElementById('btnIngresar');
const btnRetirar = document.getElementById('btnRetirar');
var infoOperacion = document.getElementById('infoOperacion');

const regNumeros = /^[0-9]+$/;

const cuenta = JSON.parse(localStorage.getItem('cuenta'));
localStorage.setItem("cuenta",JSON.stringify(cuenta))

cantIngresar.addEventListener('focus', function(event) {
    cantRetirar.value = '';
})
cantRetirar.addEventListener('focus', function(event) {
    cantIngresar.value = '';
})
btnIngresar.addEventListener('click', function(event) {
    realizarOperacion();
    document.getElementById('saldo').innerHTML = cuenta.saldo;
})
btnRetirar.addEventListener('click', function(event) {
    realizarOperacion();
    document.getElementById('saldo').innerHTML = cuenta.saldo;
})


function ingresarDinero() {
    infoOperacion.textContent = 'Dinero ingresado correctamente : ' + cantIngresar.value;
    infoOperacion.style.color = 'green';
    cuenta.saldo += cantIngresar;
}
function retirarDinero() {
    infoOperacion.textContent = 'Dinero retirado correctamente : ' + cantRetirar.value;
    infoOperacion.style.color = 'green';
    cuenta.saldo -= cantRetirar;
}

function validarIngreso() {
    var esValido = false;
    if (regNumeros.test(cantIngresar.value)){
        esValido = true;
    }
    if (cantIngresar < 0){
        esValido = false;
    }
    return esValido;
}
function validarRetirada(){
    var esValido = false;
    if (regNumeros.test(cantRetirar.value)){
        esValido = true;
    }
    if (cantRetirar > cuenta.saldo){
        esValido = false;
    }
    if (cantRetirar < 0){
        esValido = false;
    }
    return esValido;
}

function realizarOperacion(){
    if (validarIngreso()){
        ingresarDinero();
    }
    if (validarRetirada()) {
        retirarDinero();
    }
}
