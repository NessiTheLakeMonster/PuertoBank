const btnGuardar = document.getElementById('saveCard');
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
        
        let celda_1 = row.insertCell(0);
        let celda_2 = row.insertCell(1);
        let celda_3 = row.insertCell(2);

        celda_1.innerHTML = tarjeta.numeroTrj;
        celda_2.innerHTML = tarjeta.cvv;
        celda_3.innerHTML = tarjeta.activa;
    });
}