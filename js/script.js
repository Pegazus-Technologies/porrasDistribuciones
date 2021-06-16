const topSlider = document.getElementById('slider');
const single = document.getElementById('single');
const footer = document.getElementById('footer');
const productsContainer = document.getElementById('productsContainer');
const priceListContainer = document.getElementById('priceListContainer');


/*============================================================================================
    SLIDERS FOR PAGES
==============================================================================================*/

const sliderSoacha = ['../../images/sochaPageSlide1.jpg', '../../images/sochaPageSlide2.jpg', '../../images/sochaPageSlide3.jpg'];
const sliderBosa = ['../../images/bosaSlide1.jpg', '../../images/bosaSlide2.jpg', '../../images/bosaSlide3.jpg'];
const sliderla12 = ['../../images/la12PageSlide1.jpg', '../../images/la12PageSlide2.jpg', '../../images/la123.jpg'];
const sliderla36 = ['../../images/la361.jpg', '../../images/la362.jpg', '../../images/la363.jpg'];
const sliderGiron = ['../../images/gironSlide1.jpg', '../../images/gironSlide2.jpg'];
const slideLaIsla =  ['../../images/laisla1.jpg', '../../images/laisla2.jpg', '../../images/laisla3.jpg'];
const slideFloridaBlanca =  ['../../images/floridaBlancaSlide1.jpg', '../../images/floridaBlancaSlide2.jpg', '../../images/floridaBlancaSlide3.jpg'];
const slideAseo = ['../../images/aseoSlide1.jpg', '../../images/aseoSlide2.jpg', '../../images/aseoSlide3.jpg'];


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
    CONTACT FORMS validation 
==============================================================================================*/

const formAlert = document.getElementById('formAlert');
const names = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

const forms = document.getElementById('fh5co_contact_form');
if(forms){
  forms.addEventListener('submit', handleSubmit);
}


async function handleSubmit(e){
  e.preventDefault();
  if(names.value.trim().length > 0 && email.value.trim().length > 0 && subject.value.trim().length > 0 && message.value.trim().length > 0){
    formAlert.innerHTML = `
    <div class="rounded-0 mt-3 mb-0 d-flex justify-content-between align-items-center  alert-info alert id='sendingAlert' text-left alert-dismissible fade show" role="alert" id="sendingAlert">
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
       <div class="rounded-0 mt-3 mb-0 alert alert-info text-left alert-dismissible fade show" role="alert">
        <strong>!Su mensaje ha sido enviado!</strong> Lo contactaremos en breve.
       </div>
       `
    }else if(!response.ok){
      formAlert.innerHTML = `
       <div class="mt-3 mb-0 alert alert-danger rounded-0 text-left alert-dismissible fade show" role="alert">
        <strong>!No se puede enviar el mensaje, prueBe contactarnos por WhatsApp!</strong>
       </div>
    `
    }
  }else{
    formAlert.innerHTML = `
       <div class="mt-3 mb-0 alert alert-danger rounded-0 text-left alert-dismissible fade show" role="alert">
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
      if(actualHref.includes('/sucursales/bogota/Aseo.html')){
        scroll({
          top: offsetTop + 500,
          behavior: "smooth"
        });
      }
    },400)
    
  })
}

/*=======================================================================
 LIST OF PRODUCT + MODAL
  ======================================================================= */
  
const productsFood =  'productos-alimentos.html';
const productsCleaning = 'productos-aseo.html';
const productsBeverages = 'productos-bebidas.html';
const productsCigarette = 'productos-cigarrillos.html';
const productsBeers = 'productos-cervezas.html';
const productsLiquors = 'productos-licores.html';


const getProducts = () => {
    fetch('../../data/data.json')
    .then((res)=>{
      return res.json();
    })
    .then((allproducts)=>{
      allProducts(allproducts);
    })
}

getProducts();

const allProducts = (allproducts) => {

  const products = []

  if(actualHref.includes(productsFood)){
    const food = allproducts.data.filter(c => c.category === 'FOOD');
    products.push(...food);
  }else if(actualHref.includes(productsCleaning)){
    const cleaning = allproducts.data.filter(c => c.category === 'CLEANING');
    products.push(...cleaning);
  }else if(actualHref.includes(productsBeverages)){
    const beverages = allproducts.data.filter(c => c.category === 'BEVERAGE');
    products.push(...beverages);
  }else if(actualHref.includes(productsCigarette)){
    const cigarettes = allproducts.data.filter(c => c.category === 'CIGARETTE');
    products.push(...cigarettes);
  }else if(actualHref.includes(productsBeers)){
    const beers = allproducts.data.filter(c => c.category === 'BEER');
    products.push(...beers);
  }else if(actualHref.includes(productsLiquors)){
    const liquors = allproducts.data.filter(c => c.category === 'LIQUOR');
    products.push(...liquors);
  }
  renderProducts(products);
}


//Images 500 *500 px


//Images 500 *500 px

const renderProducts = (products) => {

  productsContainer.innerHTML = `
  <div id="loading" class="w-100 text-center" style="height: 100vh !important">
    <img src="../images/spinner.gif" >
    <h3>Cargando</h3>
  </div>
  `;

  products.map((product)=>{
    const newCard = document.createElement('div');
    newCard.classList.add('card', 'productCard', 'mb-5')
    newCard.innerHTML = `
      <div data-toggle="modal" data-target=#${product.id}>
        <div class="imgContainer">
          <img class="card-img-top img-fluid" src=${product.image} alt="Card image cap">
        </div>
        <div class="card-body">
          <h5 class="card-title p-0 pr-2 pl-2 text-center">${product.name}</h5>
          <h5 class="card-title p-0 pr-2 pl-2 text-center">${product.quantity}</h5>
          <h5 class="card-title p-0 pr-2 pl-2 pb-3 text-center">${product.price}</h5>
          <!-- <a href="#" class="btn btn-primary">Go somewhere</a> --!>
        </div>
      </div>
     

    <!-- Modal -->
    <div class="modal productModal fade" id=${product.id} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="exampleModalLabel">${product.name}</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="imgContainer" >
              <img class="card-img-top img-fluid" src=${product.image} alt="Card image cap">
              <img src='../images/qr.png'>
            </div>
            <h4 class="card-title p-0 pr-2 pl-2 pb-0 text-center">${product.price}</h4>
            <h4 class="card-title p-0 pr-2 pl-2 pb-3 text-center">${product.quantity}</h4>
            <a href="./files/generalPrices.xlsx" class="text-center d-block text-center mb-4 text-warning" download>Descargar lista de precios
              <span class="ml-3"><i class="fa fa-download" aria-hidden="true"></i></span>
            </a>
            <p class="text-justify">${product.description}</p>
          </div>
          <div class="modal-footer d-flex justify-content-between">
            <h2 class="btn pr-5 pl-5" style="background: #50c14e">
              <a href="https://api.whatsapp.com/send?phone=573214308206" class="text-white" target="_blank"><i class="fa fa-whatsapp" aria-hidden="true"></i></a>
            <h2/>
            <button type="button" class="btn btn-primary">Comprar ahora <span class="ml-3"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span></button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
          </div>
        </div>
    `
    setTimeout(()=>{
      productsContainer.appendChild(newCard);
      document.getElementById('loading').style.display = 'none';
    },500)
    
  })
}


/*=======================================================================
 LIST OF PRODUCT + MODAL
  ======================================================================= */








  // validateForms(name.value, email.value, subject.value, message.value)


//https://as01.epimg.net/meristation/imagenes/2020/07/15/avances/1594795396_861858_1594801711_portada_normal.jpg