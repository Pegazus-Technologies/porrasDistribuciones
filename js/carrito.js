let products =[]; 
let total = 0;

function add(product, price) {
    console.log(product, price);
    products.push(product);
    total = total + price;
    document.getElementById("checkout").innerHTML = `Paga $${total}`
}

function pay() {
    swal(products.join(", \n"),'Enviado al formulario de pago', 'success');
}