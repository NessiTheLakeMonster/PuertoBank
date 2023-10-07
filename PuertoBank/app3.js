const btnGuardar = document.getElementById('saveCard');
const regCVV = /^[0-9]{3}$/
const CVV = document.getElementById("CVV")

let tablaD = document.getElementById('tablaDinamica');

class Tarjeta {

    constructor(numeroTrj, cvv, activa) {
        this.numeroTrj = numeroTrj;
        this.cvv = cvv;
        this.activa = activa;
    }

}

const tarjeta1 = new Tarjeta('1234 12345 123456', '123', 'Si');
const tarjeta2 = new Tarjeta('1234 12345 123456', '123', 'No');

function cargarDatosDefecto() {
    const tarjetas = [tarjeta1, tarjeta2];

    tarjetas.forEach(function (tarjeta) {
        let fila = tablaD.insertRow(-1);
        
        let celda_1 = fila.insertCell(0);
        let celda_2 = fila.insertCell(1);
        let celda_3 = fila.insertCell(2);

        celda_1.innerHTML = tarjeta.numeroTrj;
        celda_2.innerHTML = tarjeta.cvv;
        celda_3.innerHTML = tarjeta.activa;
    });
}

function validarCVV(){
    var valido = false;
    if(regCVV.test(CVV.value)){
        valido = true;
    }else{
        CVV.style.backgroundColor = "#FF0000";
    }
    return valido;
}
function cargarCabecera(dest){
    document.getElementById(dest).innerHTML = '   <h1>BancoPuertollano</h1>    <ul>        <li><a href="index.html">Inicio</a></li>        <li><a href="infoCuenta.html">Informaci&#243;n Cuenta</a></li>             <li><a href="tarjetas.html">Tarjetas</a></li>    </ul>'
}
