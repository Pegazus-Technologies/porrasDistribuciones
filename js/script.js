const topSlider = document.getElementById('slider');

const sliderSoacha = ['../../images/img16.jpg', '../../images/licores12.jpg'];
const sliderBosa = ['../../images/img16.jpg', '../../images/licores12.jpg'];


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










//Mapping images when resizing
imageMapResize();
$(document).ready(function() {
    $('map').imageMapResize();
});



// const slider = (imagesArray, pageUrl) => {


// }
// if(actualHref.includes('sucursales/bogota/Soacha')){

// }












// const selectedArea = document.getElementById('selectedArea');
// selectedArea.addEventListener('click', function(){
//     this.parentElement.parentElement.children[0].src = '../../images/bebidas.jpg';
//     this.style.opacity = '0';
// })


//https://as01.epimg.net/meristation/imagenes/2020/07/15/avances/1594795396_861858_1594801711_portada_normal.jpg