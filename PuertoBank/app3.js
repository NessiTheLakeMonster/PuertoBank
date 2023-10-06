const regCVV = /^[0-9]{3}$/
const CVV = document.getElementById("CVV")



function validarCVV(){
    var valido = false;
    if(regCVV.test(CVV.value)){
        valido = true;
    }else{
        CVV.style.backgroundColor = "#FF0000";
    }
    return valido;
}
