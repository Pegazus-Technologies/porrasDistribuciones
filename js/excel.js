
<<<<<<< Updated upstream
function descargarExcel(){
    var tmpElemento = document.createElement('a');
    var data_type = 'data:application/vnd.ms-excel';
    var tabla_div = document.getElementById('dato');
    var tabla_html = tabla_div.outerHTML.replace(/ /g, '%20');
    tmpElemento.href = data_type + ', ' + tabla_html;
    tmpElemento.download = 'Nombre_De_Mi_Excel.xls';
    tmpElemento.click();
}
descargarExcel();
=======
// function descargarExcel(){
//     var tmpElemento = document.createElement('a');
//     var data_type = 'data:application/vnd.ms-excel';
//     var tabla_div = document.getElementById('dato');
//     var tabla_html = tabla_div.outerHTML.replace(/ /g, '%20');
//     tmpElemento.href = data_type + ', ' + tabla_html;
//     tmpElemento.download = 'Nombre_De_Mi_Excel.xls';
//     tmpElemento.click();
// }
// descargarExcel();
>>>>>>> Stashed changes
