document.querySelector('#btnGuardar').addEventListener('click', saveEmail);

function saveEmail(){
    var sEmail = document.querySelector('#correo').value;

    addEmail(sEmail);
}


var emailList = [];


function addEmail(pemail){
    var newCorreo = {
     email : pemail
    };
    console.log(newCorreo);
    emailList.push(newCorreo);
}

function descargarExcel() {
    var tmpElemento = document.createElement('a');
    var data_type = 'data:application/vnd.ms-excel';
    var newCorreo = document.getElementById('correo');
    var elemento = (newCorreo.value)
    tmpElemento.href = data_type + ', ' + elemento;
    tmpElemento.download = 'correo.xls';
    tmpElemento.click();
}
descargarExcel();


// function generateCSV() {
//     var csv = document.getElementById('#correo');
//     newCorreo.forEach(function(row) {
//         csv += row.join(',');
//         csv += "\n";
//     });

//     var hiddenElement = document.createElement('a');
//     hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
//     hiddenElement.target = '_blank';
//     hiddenElement.download = 'data.csv';
//     hiddenElement.click();
// }

