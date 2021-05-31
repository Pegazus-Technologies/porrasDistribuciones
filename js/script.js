$(document).ready(function () {
    ImageMap('img[usemap]')
});

const selectedArea = document.getElementById('selectedArea');
selectedArea.addEventListener('click', function(){
    this.parentElement.parentElement.children[0].src = '../../images/bebidas.jpg';
})


//https://as01.epimg.net/meristation/imagenes/2020/07/15/avances/1594795396_861858_1594801711_portada_normal.jpg