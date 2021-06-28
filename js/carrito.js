// let products =[]; 
// let total = 0;

// function add(product, price) {
//     console.log(product, price);
//     products.push(product);
//     total = total + price;
//     document.getElementById("checkout").innerHTML = `Paga $${total}`
// }

$(function(){

    ('#modal').modal({
        backdrop: 'static',
        keyboard: true,
        focus: false,
        show: false
    });
});