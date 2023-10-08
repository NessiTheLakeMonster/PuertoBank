class Cuenta {
    constructor(iban) {
        this.iban = iban;
        this.tarjetas = [];
    }
}

class Tarjeta {
    constructor(numeroTrj, cvv, activa) {
        this.numeroTrj = numeroTrj;
        this.cvv = cvv;
        this.activa = activa;
    }
}

let cuenta = new Cuenta('ES21 1465 0100 72 2030876293');

let tarjeta1 = new Tarjeta('1234 12345 123456', '123', 'Si');
let tarjeta2 = new Tarjeta('1234 12345 123456', '123', 'No');

cuenta.tarjetas.push(tarjeta1, tarjeta2);

const btnGuardar = document.getElementById('saveCard');
const regCVV = /^[0-9]{3}$/
const CVV = document.getElementById("cvv")
const numTarjeta = document.getElementById('numCard')
const regTarjeta = /^[0-9]{4}\s[0-9]{5}\s[0-9]{6}$/

let tablaD = document.getElementById('tablaDinamica');

/*cosnt cuenta = JSON.parse(localStorage.getItem('cuenta'));
localStorage.setItem("cuenta",JSON.stringify(cuenta))*/

btnGuardar.addEventListener('click', function(event) {
    if (validarErrores()) {
        addTarjeta()
    }
})

function navegar() {

}

function cargarCabecera(dest){
    document.getElementById(dest).innerHTML = '   <h1>BancoPuertollano</h1>    <ul>        <li><a href="index.html">Inicio</a></li>        <li><a href="infoCuenta.html">Informaci&#243;n Cuenta</a></li>             <li><a href="tarjetas.html">Tarjetas</a></li>    </ul>'
}


function cargarDatosDefecto() {
    cuenta.tarjetas.forEach((tarjeta) =>{
        let fila = tablaD.insertRow(-1);

        let celda_1 = fila.insertCell(0);
        let celda_2 = fila.insertCell(1);
        let celda_3 = fila.insertCell(2);

        celda_1.innerHTML = cuenta.iban;
        celda_2.innerHTML = tarjeta.numeroTrj;
        celda_3.innerHTML = tarjeta.activa;
    })
}

// --------------------------- FUNCIONES -------------------------------------

function addTarjeta() {
    var numTarjeta = document.getElementById('numCard');
    var cvv = document.getElementById('cvv');
    var activa = document.getElementById('act');

    var tarjeta = new Tarjeta(numTarjeta.value, cvv.value, activa.checked);
    cuenta.tarjetas.push(tarjeta);

    let fila = tablaD.insertRow();

    let celda_1 = fila.insertCell(0);
    let celda_2 = fila.insertCell(1);
    let celda_3 = fila.insertCell(2);

    celda_1.innerHTML = cuenta.iban;
    celda_2.innerHTML = numTarjeta.value;
    celda_3.innerHTML = tarjetaActiva(activa.value)
}
function tarjetaActiva(activa){
    var msj = 'No'
    if (activa){
        msj = 'Si'
    }
    return msj
}

function limpiarCampos() {
    document.getElementById('numCard').value = '';
    document.getElementById('cvv').value = '';
    document.getElementById('act').checked = '';
}

// --------------------------- VALIDACIONES -------------------------------------

function validarCVV(){
    var valido = false;
    if(regCVV.test(CVV.value)){
        valido = true;
    }else{
        CVV.style.backgroundColor = "#FF0000";
    }
    return valido;
}

function validarNum() {
    var valido = false
    if(regTarjeta.test(numTarjeta.value)){
        valido = true
    }else {
        numTarjeta.style.backgroundColor = '#FF0000'
    }
    return valido
}

function validarErrores() {
    limpiarErrores()

    var valido = true;

    if (!validarCVV()) {
        valido = false;
    }

    if (!validarNum()) {
        valido = false;
    }

    return valido;
}

function limpiarErrores() {
    numTarjeta.style.backgroundColor = 'white'
    CVV.style.backgroundColor = 'white';
}