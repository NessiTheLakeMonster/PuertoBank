const cantIngresar = document.getElementById('saldoIngresar');
const cantRetirar = document.getElementById('saldoRetirar');
const btnIngresar = document.getElementById('ingresar');
const btnRetirar = document.getElementById('retirar');

const regNumeros = /^[0-9]+$/;
var cuenta = {
    IBAN: "ES21 1465 0100 72 2030976293",
    saldo: 500
}
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
    cuenta.saldo += cantIngresar;
}
function retirarDinero() {
    cuenta.saldo -= cantRetirar;
}

function validarIngreso() {
    var esValido = false;
    if (regNumeros.test(cantIngresar)){
        esValido = true;
    }
    return esValido;
}
function validarRetirada(){
    var esValido = false;
    if (regNumeros.test(cantRetirar)){
        esValido = true;
    }
    return esValido;
}

function realizarOperacion(){
    if (validarIngreso() && cantIngresar > 0){
        ingresarDinero();
    }
    if (validarRetirada() && cantRetirar > 0){
        retirarDinero();
    }
}
