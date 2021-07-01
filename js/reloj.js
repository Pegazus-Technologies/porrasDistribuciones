// function autoTimeUpdate (){
//     var dateTime = new Date();
//     var hours = dateTime.getHours();
//     var minutes = dateTime.getMinutes();
//     var seconds = dateTime.getSeconds();
//     var am_or_pm = document.getElementById('am_or_pm');
//     if(hours >=12){
//         am_or_pm.innerHTML = "PM";
//     }else{
//         am_or_pm.innerHTML = "AM";
//     }

//     if(hours > 12){
//         hours = hours - 12;
//     }

//     document.getElementById('hours').innerHTML = hours;
//     document.getElementById('minutes').innerHTML = minutes;
//     document.getElementById('seconds').innerHTML = seconds;
// }
// setInterval(autoTimeUpdate,1000)

// ---------------------------------------
let mostraHora=()=>{
    let reloj=document.getElementById('reloj')

    let fechaHora= new Date()
    let hora=fechaHora.getHours()
    let minutos=fechaHora.getMinutes()
    let segundos=fechaHora.getSeconds()
    let hr=(hora>12) ? hora-12 : hora
    let am = (hora>12) ? 'PM' : 'AM'
    if(hr<10){hr='0' + hr}
    if(minutos<10){minutos='0' + minutos}
    if(segundos<10){segundos='0' + segundos}


    reloj.textContent=`${hr}:${minutos}:${segundos} ${am}`
}
setInterval(mostraHora,1000)
