var guardar = document.getElementById("btnGuardar");
guardar.addEventListener("click", saveEmail);

var mostrar = document.getElementById("btnMostrar");
mostrar.addEventListener("click", seeEmail);

var dato = document.getElementById("correo")

guardarArray = []
var saveEmail = () => {
    datoCorreo = dato.value
    guardarArray.push(datoCorreo)
    console.log(guardarArray.length)
}

var seeEmail = () => {
    var csv = guardarArray;
    for (var i = 0; i < guardarArray.length; i++){
        csv + '\n';
    }

    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'data.csv';
    hiddenElement.click();
}


/*var seeEmail = () => {
    for (var i = 0; i < guardarArray.length; i++) {
        console.log(guardarArray[i])
    }
}*/
