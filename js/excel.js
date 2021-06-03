
function descargarExcel() {
    var tmpElemento = document.createElement('a');
    var data_type = 'data:application/vnd.ms-excel';
    var tabla_div = document.getElementById('text');
    var elemento = (tabla_div.value)
    tmpElemento.href = data_type + ', ' + elemento;
    tmpElemento.download = 'lead.xls';
    tmpElemento.click();
}
descargarExcel();
