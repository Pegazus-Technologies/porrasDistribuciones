var emailList = [];

function addEmail(pemail){
    var newCorreo = {
     email : pemail
    };
    console.log(newCorreo);
    emailList.push(newCorreo);
}


function generateCSV() {
    var csv = emailList;
    emailList.forEach(function(row) {
        csv += row.join(',');
        csv += "\n";
    });

    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'data.csv';
    hiddenElement.click();
}