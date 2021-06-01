const topSlider = document.getElementById('slider');

const sliderSoacha = ['../../images/soacha1.jpg', '../../images/soacha2.jpg', '../../images/soacha3.jpg'];
const sliderBosa = ['../../images/bosa1.jpg', '../../images/bosa2.jpg', '../../images/bosa3.jpg'];
const sliderla12 = ['../../images/la121.jpg', '../../images/la122.jpg', '../../images/la123.jpg'];
const sliderla36 = ['../../images/la361.jpg', '../../images/la362.jpg', '../../images/la363.jpg'];
const sliderGiron = ['../../images/giron1.jpg', '../../images/giron2.jpg', '../../images/giron3.jpg'];
const slideLaIsla =  ['../../images/laisla1.jpg', '../../images/laisla2.jpg', '../../images/laisla3.jpg'];


const actualHref = window.location.href;

const buildingSlide = (actualHref, imagesArray, compareUrl) => {
    if(actualHref.includes(compareUrl)){
        showSlide(imagesArray);
    }
}

const showSlide = (imageUrl) => {
    topSlider.innerHTML = `
        <div id="carouselExampleControls" class="carousel slide active" data-ride="carousel">
        <div class="carousel-inner">
        ${imageUrl.map((singleImage)=>{
            return `<div class="carousel-item carouselImageContainer">
            <img class="d-block w-100" src="${singleImage}" alt="First slide">
        </div>`;
        }).join('')}
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
    `
    const carouselImageContainer = document.getElementsByClassName('carouselImageContainer');
    carouselImageContainer[0].classList.add('active');
}


buildingSlide(actualHref, sliderSoacha, 'sucursales/bogota/Soacha.html');
buildingSlide(actualHref,  sliderBosa, 'sucursales/bogota/Bosa.html');
buildingSlide(actualHref,   sliderla12, 'sucursales/bogota/la12.html');
buildingSlide(actualHref, sliderla36, 'sucursales/bogota/La%2036.html');
buildingSlide(actualHref, sliderGiron, 'sucursales/bucaramanga/Giron.html');
buildingSlide(actualHref, slideLaIsla, 'sucursales/bucaramanga/Laisla.html');


//Mapping images when resizing
//imageMapResize();
$(document).ready(function() {
    $('map').imageMapResize();
});













// const selectedArea = document.getElementById('selectedArea');
// selectedArea.addEventListener('click', function(){
//     this.parentElement.parentElement.children[0].src = '../../images/bebidas.jpg';
//     this.style.opacity = '0';
// })


//https://as01.epimg.net/meristation/imagenes/2020/07/15/avances/1594795396_861858_1594801711_portada_normal.jpg