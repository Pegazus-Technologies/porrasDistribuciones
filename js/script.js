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

const soachaMessage = 'Esta sede no realiza domicilios.';
const bosaMessage = 'Realizamos domicilios a toda la localidad de Bosa y alrededores';
const La12Message = 'Realizamos domicilios a parqueaderos cercanos, envios a otras partes generan costo adicional, contactenos para mayor información';
const la36Message = 'Realizamos envios por el area de San andresíto de la 38, la 8 y alrededores';
const gironMessage = 'Envios a toda la ciudad';
const laIslaMessage = 'Envios a toda la ciudad';
const floridaBlancaMessage = 'Envios a toda la ciudad.';



const showAlert = (state, alertMessage) => {
    if(state === true){
        const alert = document.createElement('div');
        alert.setAttribute('class', 'container')
        alert.innerHTML = `
        <div class="d-flex align-items-center justify-content-between alert alert-info border-0 rounded-0 alert-dismissible fade show alertContainer mt-5" role="alert">
            <div class="d-flex mr-2 align-items-center">
                <h3><i class="fa fa-map-marker pr-2" aria-hidden="true"></i></h3>
                <span class="font-weight-bold text-justify">${alertMessage}</span>
            </div>
            <button type="button" class="close d-none d-md-block" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        `

        topSlider.parentNode.insertBefore(alert, topSlider);

    }
}


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

/*============================================================================================
    CONTACT FORMS
==============================================================================================*/

// const name = document.getElementById('name');
// const email = document.getElementById('email');
// const subject = document.getElementById('subject');
// const message = document.getElementById('message');
// const send = document.getElementById('send');
// const contactForm = document.getElementById('fh5co_contact_form');

// contactForm.addEventListener('submit', validateForms);

// function validateForms(e){
//     e.preventDefault();
// }


/*============================================================================================
    DATA BASE PRODUCTS PRICES
==============================================================================================*/







// validateForms(name.value, email.value, subject.value, message.value)


//https://as01.epimg.net/meristation/imagenes/2020/07/15/avances/1594795396_861858_1594801711_portada_normal.jpg