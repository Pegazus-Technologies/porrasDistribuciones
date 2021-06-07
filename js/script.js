const topSlider = document.getElementById('slider');
const single = document.getElementById('single');
const footer = document.getElementById('footer');
console.log(footer);



/*============================================================================================
    SLIDERS FOR PAGES
==============================================================================================*/

const sliderSoacha = ['../../images/sochaPageSlide1.jpg', '../../images/sochaPageSlide2.jpg', '../../images/sochaPageSlide3.jpg'];
const sliderBosa = ['../../images/bosaSlide1.jpg', '../../images/bosa2.jpg', '../../images/bosa3.jpg'];
const sliderla12 = ['../../images/la12PageSlide1.jpg', '../../images/la12PageSlide2.jpg', '../../images/la123.jpg'];
const sliderla36 = ['../../images/la361.jpg', '../../images/la362.jpg', '../../images/la363.jpg'];
const sliderGiron = ['../../images/gironPageSlide1.jpg', '../../images/giron2.jpg', '../../images/giron3.jpg'];
const slideLaIsla =  ['../../images/laisla1.jpg', '../../images/laisla2.jpg', '../../images/laisla3.jpg'];
const slideFloridaBlanca =  ['../../images/florida1.jpg', '../../images/florida2.jpg', '../../images/florida3.jpg'];
const slideAseo = ['../../images/aseo1.jpg', '../../images/aseo2.jpg', '../../images/aseo3.jpg'];


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
const floridaBlancaUrl = 'sucursales/bucaramanga/FloridaBlanca.html';
const aseoUrl = 'sucursales/bogota/Aseo.html';


buildingSlide(actualHref, sliderSoacha, soachaSucursalUrl);
buildingSlide(actualHref,  sliderBosa, bosaSucursalUrl);
buildingSlide(actualHref,   sliderla12, la12SucursalUrl);
buildingSlide(actualHref, sliderla36, la36SucursalUrl);
buildingSlide(actualHref, sliderGiron, gironSucursalUrl);
buildingSlide(actualHref, slideLaIsla, laIslaSucursalUrl);
buildingSlide(actualHref, slideFloridaBlanca, floridaBlancaUrl);
buildingSlide(actualHref,  slideAseo, aseoUrl);


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
const aseoMessage = 'Realizamos domicilios a parqueaderos cercanos, envios a otras partes generan costo adicional, contactenos para mayor información'



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
buildingSlide(actualHref, null, aseoUrl, aseoMessage);



//Mapping images when resizing
$(document).ready(function() {
    $('map').imageMapResize();
});

/*============================================================================================
    CONTACT FORMS
==============================================================================================*/

const formAlert = document.getElementById('formAlert');
const names = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

const forms = document.getElementById('fh5co_contact_form');
forms.addEventListener('submit', handleSubmit);

async function handleSubmit(e){
  e.preventDefault();
  if(names.value.trim().length > 0 && email.value.trim().length > 0 && subject.value.trim().length > 0 && message.value.trim().length > 0){
    formAlert.innerHTML = `
    <div class="rounded-0 d-flex justify-content-between align-items-center  alert-info alert id='sendingAlert' text-left alert-dismissible fade show" role="alert" id="sendingAlert">
    Enviando mensaje ........... <h5><i class="fa fa-paper-plane-o" aria-hidden="true"></i></h5>
    </div>
    `
    const form = new FormData(this);
    const response = await fetch(this.action, {
      method: this.method,
      body: form,
      headers: {
        'Accept': 'aplication/json'
      }
    });
    if(response.ok){
      document.getElementById('sendingAlert').style.display='none';
       this.reset();
       formAlert.innerHTML = `
       <div class="rounded-0 alert alert-info text-left alert-dismissible fade show" role="alert">
        <strong>!Su mensaje ha sido enviado!</strong> Lo contactaremos en breve.
       </div>
       `
    }
  }else{
    formAlert.innerHTML = `
       <div class="alert alert-danger rounded-0 text-left alert-dismissible fade show" role="alert">
        <strong>!todos los campos son obligatorios!</strong>
       </div>
    `
  }
}


/*============================================================================================
    DATA BASE PRODUCTS PRICES
==============================================================================================*/

if(actualHref){
    fetch('../../data/data.json')
    .then((res)=>{
        return res.json();
    }).then((productsData)=>{
        const allproducts = productsData.data;
        console.log(allproducts);
        productsPerPage(allproducts, actualHref);
    });
}

const productsPerPage = (products, actualHref) => {

    const productsByheadquarter = [];

    const beverages = products.filter(c => c.category === 'BEVERAGE');
    const beers = products.filter(c => c.category === 'BEER');
    const liquors = products.filter(c => c.category === 'LIQUOR');
    const foods = products.filter(c => c.category === 'FOOD');
    const cigarettes = products.filter(c => c.category === 'CIGARETTE');
    const cleaning = products.filter(c => c.category === 'CLEANING');

    if(actualHref.includes(soachaSucursalUrl)){
        productsByheadquarter.push(...beverages, ...beers, ...liquors, ...cigarettes);
    }else if(actualHref.includes(bosaSucursalUrl)){
        productsByheadquarter.push(...beverages, ...beers, ...liquors, ...cleaning, ...cigarettes);
    }else if(actualHref.includes(la36SucursalUrl)){
        productsByheadquarter.push(...beverages, ...beers, ...liquors, ...cleaning, ...cigarettes);
    }else if(actualHref.includes(la12SucursalUrl)){
        productsByheadquarter.push(...beverages, ...beers, ...liquors, ...cigarettes, ...foods);
    }else if(actualHref.includes(floridaBlancaUrl)){
        productsByheadquarter.push(...beverages, ...beers, ...liquors, ...cigarettes);
    }else if(actualHref.includes(gironSucursalUrl)){
        productsByheadquarter.push(...beverages, ...beers, ...liquors, ...cigarettes);
    }else if(actualHref.includes(laIslaSucursalUrl)){
        productsByheadquarter.push(...beverages, ...beers, ...liquors, ...cigarettes);
    }else if(actualHref.includes(aseoUrl)){
      productsByheadquarter.push(...cleaning);
    }

    showProducts(productsByheadquarter);
}

const showProducts = (productsByheadquarter) => {
    const pricesContainer = document.createElement('div');
    pricesContainer.classList.add('container', 'mb-5');
    pricesContainer.setAttribute('id', 'pricesList')
    pricesContainer.innerHTML = `
    <h3 class='mt-5 mb-3'>Lista de precios</h3>
    <div id="accordion">
    <div class="card" id="beers">
      <div class="card-top" id="headingOne">
        <h5 class="mb-0">
          <button class="btn btn-link pl-0 pr-0 w-100 d-flex align-items-center"  data-toggle="collapse" data-target="#collapseBeer" aria-expanded="true" aria-controls="collapseOne">
            <h4 class="mb-0">Cervezas</h4>
          </button>
        </h5>
      </div>
  
      <div id="collapseBeer" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
        <div class="card-body collapsableContent">
        <div class="table-responsive">
            <table class="table">
            <thead>
              <tr>
                <th class="text-center">Código</th>
                <th class="text-center">Producto</th>
                <th class="text-center">Unidad</th>
                <th class="text-center">Precio</th>
              </tr>
            </thead>
            <tbody class="tbody">
            ${productsByheadquarter.map((product)=>{
                if(product.category === 'BEER'){
                    return `
                    <tr>
                        <td class="text-center">${product.id}</td>
                        <td class="text-center">${product.name}</td>
                        <td class="text-center">${product.quantity}</td>
                        <td class="text-center">${product.price}</td>
                    </tr>
                    `
                }
            }).join('')} 
            </tbody>
            </table>
        </div>
        </div>
      </div>
    </div>

    <div id="accordion">
    <div class="card"  id="liquors">
      <div class="card-top d-flex justify-content-between align-items-center" id="headingOne">
        <h5 class="mb-0 w-100">
          <button class="btn btn-link pl-0 pr-0 w-100 d-flex align-items-center"  data-toggle="collapse" data-target="#collapseLiquor" aria-expanded="true" aria-controls="collapseOne">
            <h4 class="mb-0">Licores</h4>
          </button>
        </h5>
    </div>
  
      <div id="collapseLiquor" class="collapse" aria-labelledby="headingLiquor" data-parent="#accordion">
        <div class="card-body collapsableContent">
        <div class="table-responsive">
            <table class="table">
            <thead class="bg-light">
              <tr>
                <th scope="col" class="text-center">Código</th>
                <th scope="col" class="text-center">Producto</th>
                <th scope="col" class="text-center">Unidad</th>
                <th scope="col" class="text-center">Precio</th>
              </tr>
            </thead>
            <tbody class="tbody">
            ${productsByheadquarter.map((product)=>{
                if(product.category === 'LIQUOR'){
                    return `
                    <tr>
                        <td class="text-center">${product.id}</td>
                        <td class="text-center">${product.name}</td>
                        <td class="text-center">${product.quantity}</td>
                        <td class="text-center">${product.price}</td>
                    </tr>
                    `
                }
            }).join('')} 
            </tbody>
            </table>
        </div>
        </div>
      </div>
    </div>

    <div id="accordion">
    <div class="card" id="food">
      <div class="card-top" id="headingOne">
        <h5 class="mb-0">
          <button  class="btn btn-link pl-0 pr-0 w-100 d-flex align-items-center"  data-toggle="collapse" data-target="#collapseFood" aria-expanded="true" aria-controls="collapseFood">
            <h4 class="mb-0">Alimentos</h4>
          </button>
        </h5>
      </div>
  
      <div id="collapseFood" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
        <div class="card-body collapsableContent">
        <div class="table-responsive">
            <table class="table">
            <thead class="bg-light">
              <tr>
                <th scope="col" class="text-center">Código</th>
                <th scope="col" class="text-center">Producto</th>
                <th scope="col" class="text-center">Unidad</th>
                <th scope="col" class="text-center">Precio</th>
              </tr>
            </thead>
            <tbody class="tbody">
            ${productsByheadquarter.map((product)=>{
                if(product.category === 'FOOD'){
                    return `
                    <tr>
                        <td class="text-center">${product.id}</td>
                        <td class="text-center">${product.name}</td>
                        <td class="text-center">${product.quantity}</td>
                        <td class="text-center">${product.price}</td>
                    </tr>
                    `
                }
            }).join('')} 
            </tbody>
            </table>
        </div>
        </div>
      </div>
    </div>

    <div id="accordion" id="beverage">
    <div class="card">
      <div class="card-top" id="headingOne">
        <h5 class="mb-0">
          <button class="btn btn-link pl-0 pr-0 w-100 d-flex align-items-center"  data-toggle="collapse" data-target="#collapseBeverage" aria-expanded="true" aria-controls="collapseOne">
            <h4 class="mb-0">Agua, gaseosas y bebidas no alcoholicas</h4>
          </button>
        </h5>
      </div>
  
      <div id="collapseBeverage" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
        <div class="card-body collapsableContent">
        <div class="table-responsive">
            <table class="table">
            <thead class="bg-light">
              <tr>
                <th scope="col" class="text-center">Código</th>
                <th scope="col" class="text-center">Producto</th>
                <th scope="col" class="text-center">Unidad</th>
                <th scope="col" class="text-center">Precio</th>
              </tr>
            </thead>
            <tbody class="tbody">
            ${productsByheadquarter.map((product)=>{
                if(product.category === 'BEVERAGE'){
                    return `
                    <tr>
                        <td class="text-center">${product.id}</td>
                        <td class="text-center">${product.name}</td>
                        <td class="text-center">${product.quantity}</td>
                        <td class="text-center">${product.price}</td>
                    </tr>
                    `
                }
            }).join('')} 
            </tbody>
            </table>
        </div>
        </div>
      </div>
    </div>


    <div id="accordion">
    <div class="card" id="clean">
      <div class="card-top" id="headingOne">
        <h5 class="mb-0">
          <button  class="btn btn-link pl-0 pr-0 w-100 d-flex align-items-center"  data-toggle="collapse" data-target="#collapseCleaning" aria-expanded="true" aria-controls="collapseOne">
            <h4 class="mb-0">Productos de aseo y cuidado personal</h4>
          </button>
        </h5>
      </div>
  
      <div id="collapseCleaning" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
        <div class="card-body collapsableContent">
        <div class="table-responsive">
            <table class="table">
            <thead class="bg-light">
              <tr>
                <th scope="col" class="text-center">Código</th>
                <th scope="col" class="text-center">Producto</th>
                <th scope="col" class="text-center">Unidad</th>
                <th scope="col" class="text-center">Precio</th>
              </tr>
            </thead>
            <tbody class="tbody">
            ${productsByheadquarter.map((product)=>{
                if(product.category === 'CLEANING'){
                    return `
                    <tr>
                        <td class="text-center">${product.id}</td>
                        <td class="text-center">${product.name}</td>
                        <td class="text-center">${product.quantity}</td>
                        <td class="text-center">${product.price}</td>
                    </tr>
                    `
                }
            }).join('')} 
            </tbody>
            </table>
        </div>
        </div>
      </div>
    </div>


    <div id="accordion">
    <div class="card" id="cigarettes">
      <div class="card-top" id="headingOne">
        <h5 class="mb-0">
          <button class="btn btn-link pl-0 pr-0 w-100 d-flex align-items-center" data-toggle="collapse" data-target="#collapseCigarette" aria-expanded="true" aria-controls="collapseOne">
            <h4 class="mb-0">Cigarrillos</h4>
          </button>
        </h5>
      </div>
  
      <div id="collapseCigarette" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
        <div class="card-body collapsableContent">
        <div class="table-responsive">
            <table class="table">
            <thead class="bg-light">
              <tr>
                <th scope="col" class="text-center">Código</th>
                <th scope="col" class="text-center">Producto</th>
                <th scope="col" class="text-center">Unidad</th>
                <th scope="col" class="text-center">Precio</th>
              </tr>
            </thead>
            <tbody class="tbody">
            ${productsByheadquarter.map((product)=>{
                if(product.category === 'CIGARETTE'){
                    return `
                    <tr>
                        <td class="text-center">${product.id}</td>
                        <td class="text-center">${product.name}</td>
                        <td class="text-center">${product.quantity}</td>
                        <td class="text-center">${product.price}</td>
                    </tr>
                    `
                }
            }).join('')} 
            </tbody>
            </table>
        </div>
        </div>
      </div>
    </div>
    `

    footer.parentNode.insertBefore(pricesContainer, footer);
    
    const tableBody = document.getElementsByClassName('tbody');

    for(i=0; i<tableBody.length; i++){
        if(tableBody[i].innerHTML.trim().length === 0){
            console.log('no hay nada');
            tableBody[i].parentElement.parentElement.parentElement.parentElement.parentElement.style.display = 'none';
        }else{
            console.log('hay contenido');
        }
    }
}

//Slide effeect 

const modalLinks = document.querySelectorAll(".topModal .modal-content .modal-footer a");
for(link of modalLinks){
  link.addEventListener('click', function(e){
    e.preventDefault();
    setTimeout(()=>{
      const href = this.getAttribute("href");
      console.log(href);
      const offsetTop = document.querySelector(href).offsetTop
      scroll({
        top: offsetTop + 50,
        behavior: "smooth"
      });
    },400)
    
  })
}

// validateForms(name.value, email.value, subject.value, message.value)


//https://as01.epimg.net/meristation/imagenes/2020/07/15/avances/1594795396_861858_1594801711_portada_normal.jpg