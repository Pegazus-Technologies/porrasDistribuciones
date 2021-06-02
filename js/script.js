const topSlider = document.getElementById('slider');
const single = document.getElementById('single');



/*============================================================================================
    SLIDERS FORM PAGES
==============================================================================================*/

const sliderSoacha = ['../../images/soacha1.jpg', '../../images/soacha2.jpg', '../../images/soacha3.jpg'];
const sliderBosa = ['../../images/bosa1.jpg', '../../images/bosa2.jpg', '../../images/bosa3.jpg'];
const sliderla12 = ['../../images/la121.jpg', '../../images/la122.jpg', '../../images/la123.jpg'];
const sliderla36 = ['../../images/la361.jpg', '../../images/la362.jpg', '../../images/la363.jpg'];
const sliderGiron = ['../../images/giron1.jpg', '../../images/giron2.jpg', '../../images/giron3.jpg'];
const slideLaIsla =  ['../../images/laisla1.jpg', '../../images/laisla2.jpg', '../../images/laisla3.jpg'];
const slideFloridaBlanca =  ['../../images/florida1.jpg', '../../images/florida2.jpg', '../../images/florida3.jpg'];


const actualHref = window.location.href;

const buildingSlide = (actualHref, imagesArray, compareUrl, alertMessage) => {
    if(actualHref.includes(compareUrl)){
        if(imagesArray !== null && alertMessage === undefined){
            showSlide(imagesArray);
        }else{
            showAlert(true, alertMessage);
        }
        
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

const soachaSucursalUrl =  'sucursales/bogota/Soacha.html';
const bosaSucursalUrl = 'sucursales/bogota/Bosa.html';
const la12SucursalUrl = 'sucursales/bogota/la12.html';
const la36SucursalUrl = 'sucursales/bogota/La%2036.html';
const gironSucursalUrl = 'sucursales/bucaramanga/Giron.html';
const laIslaSucursalUrl = 'sucursales/bucaramanga/Laisla.html'
const floridaBlancaUrl = 'bucaramanga/FloridaBlanca.html';



buildingSlide(actualHref, sliderSoacha, soachaSucursalUrl);
buildingSlide(actualHref,  sliderBosa, bosaSucursalUrl);
buildingSlide(actualHref,   sliderla12, la12SucursalUrl);
buildingSlide(actualHref, sliderla36, la36SucursalUrl);
buildingSlide(actualHref, sliderGiron, gironSucursalUrl);
buildingSlide(actualHref, slideLaIsla, laIslaSucursalUrl);
buildingSlide(actualHref, slideFloridaBlanca, floridaBlancaUrl);


/*============================================================================================
    ALERTS FOR PAGES
==============================================================================================*/

const soachaMessage = 'Soacha Realizamos envios a xxxx xxx xxxx ....';
const bosaMessage = 'Bosa Realizamos envios a xxxx xxx xxxx ....';
const La12Message = 'La 12 Realizamos envios a xxxx xxx xxxx ....';
const la36Message = 'La 36 Realizamos envios a xxxx xxx xxxx ....';
const gironMessage = 'Girón Realizammos envios a xxxx xxx xxxx ....';
const laIslaMessage = 'La Isla Realizamos envios a xxxx xxx xxxx ....';
const floridaBlancaMessage = 'Florida Blanca Realizamos envios a xxxx xxx xxxx ....';



const showAlert = (state, alertMessage) => {
    if(state === true){
        const alert = document.createElement('div');
        alert.setAttribute('class', 'container')
        alert.innerHTML = `
        <div class="d-flex align-items-center justify-content-between alert alert-info border-0 rounded-0 alert-dismissible fade show alertContainer mt-5" role="alert">
            <div class="d-inline">
                <h3 class='d-inline'><i class="fa fa-map-marker pr-2" aria-hidden="true"></i></h3>
                <span class="font-weight-bold">${alertMessage}</span>
            </div>
            <button type="button" class="close mt-1 p-0" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        `

        topSlider.parentNode.insertBefore(alert, topSlider);
    }
}


var list = document.getElementById("myList");    // Get the <ul> element to insert a new node
// list.insertBefore(newItem, list.childNodes[0]); 



//showAlert();


buildingSlide(actualHref, null, soachaSucursalUrl, soachaMessage);
buildingSlide(actualHref,  null, bosaSucursalUrl, bosaMessage);
buildingSlide(actualHref,  null, la12SucursalUrl, La12Message);
buildingSlide(actualHref, null, la36SucursalUrl, la36Message);
buildingSlide(actualHref, null, gironSucursalUrl, gironMessage);
buildingSlide(actualHref, null, laIslaSucursalUrl, laIslaMessage);
buildingSlide(actualHref, null, floridaBlancaUrl, floridaBlancaMessage);



//Mapping images when resizing
$(document).ready(function() {
    $('map').imageMapResize();
});


//https://as01.epimg.net/meristation/imagenes/2020/07/15/avances/1594795396_861858_1594801711_portada_normal.jpg