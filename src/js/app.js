if(window.location.href.includes("index.html")){
  smoothScroll();
}

function smoothScroll(){
    const enlaces = document.querySelectorAll(".scroll a");
    enlaces.forEach(enlace =>{
        enlace.addEventListener("click", function(e){
            e.preventDefault();

            const seccion = document.querySelector(e.target.attributes.href.value);
            seccion.scrollIntoView({ behavior: "smooth" });
        });
    });
}


const botonMenu = document.querySelector('.boton-menu');
const nav2 = document.querySelector('.navegacion');
const enlaces = document.querySelectorAll('.navegacion a');
const enalacesContainer = document.querySelector('.enlaces');
const adicionales = document.querySelector('.adicionales');
const descripcion = document.querySelector('.descripcion');
let containers = [enalacesContainer,adicionales];
let heightBase = true;

botonMenu.addEventListener('click', () => {
  nav2.classList.toggle('moreHeight');
  if(window.location.href.includes("index.html")){
    descripcion.classList.toggle('menosMargin');
  }
  containers.forEach((i)=>{
    i.classList.toggle('menu');
  })
  enlaces.forEach((i)=>{
    i.classList.toggle('menu')
  })
});







if(window.location.href.includes("index.html")){
  const nav = document.querySelector('.navegacion-index');  
  const header = document.querySelector('.header');
  const navOffsetTop = nav.offsetTop;
  function fixNav() {
    if (window.scrollY >= navOffsetTop && !nav.classList.contains('fijamiento')) {
      header.style.paddingTop = '98.22px';
      nav.classList.add('fijamiento');
    } else if ((window.scrollY < navOffsetTop || window.scrollY === 0) && nav.classList.contains('fijamiento')) {
      header.style.paddingTop = '0';
      nav.classList.remove('fijamiento');
    }
  }
  window.addEventListener('scroll', fixNav);

  


  const mujer = document.getElementById('mujer');
  const hombre = document.getElementById('hombre');
  const unisex = document.getElementById('unisex');
  const prod = document.getElementById('prod');
  const buscador = document.getElementById('contenedor-buscador');
  const buscadorW = document.getElementById('buscador');
  const gorra = document.getElementById('gorras');
  const tops = document.getElementById('tops');
  const busqueda = document.getElementById('busqueda');
  const textos = document.querySelectorAll('.opac');
  let timeoutId;

  console.log(textos);

  busqueda.addEventListener('input', (e) =>{
    clearTimeout(timeoutId);
    busqueda.style.width = '100%'
    busqueda.style.padding = '1rem'
    timeoutId = setTimeout(() => {
      busqueda.style.width = '50%'
      busqueda.style.padding = '.7rem'
  }, 1000);
  });


  buscador.addEventListener('mouseover', (e) => {
    if (e.target.matches('.opcion') || e.target.matches('#prod')) {
      prod.style.visibility = 'visible';
      prod.style.height = '100%';
      prod.style.width = '100%';
      buscadorW.classList.add('buscadorHeight');
      textos.forEach((i)=>{
          i.style.opacity = '1'
        })
      } 
  });
  
  mujer.addEventListener('mouseover', () => {
    gorra.textContent = '';
    tops.textContent = 'Tops'
  });
  hombre.addEventListener('mouseover', () => {
    gorra.textContent = 'Gorras';
    tops.textContent = ''
  });
  unisex.addEventListener('mouseover', () => {
    gorra.textContent = 'Gorras';
    tops.textContent = ''
  });
  
  buscador.addEventListener('mouseleave', () => {
    prod.style.visibility = 'hidden';
    prod.style.height = '0rem';
    prod.style.width = '0%';
    buscadorW.classList.remove('buscadorHeight');
    textos.forEach((i)=>{
        i.style.opacity = '0';
      })
  });
}


//Buzos hombre y mujer
const buzos = document.querySelectorAll('.buzo a');

buzos.forEach((buzo) => {
  buzo.addEventListener('click', (e) => {
    e.preventDefault();

    const imagen = buzo.getAttribute('data-imagen');
    const titulo = buzo.getAttribute('data-titulo');

    window.location.href = `product.html?imagen=${imagen}&titulo=${titulo}`;
  });
});

// Remeras Unisex
const remeras = document.querySelectorAll('.remera a');

remeras.forEach((remera) => {
  remera.addEventListener('click', (e) => {
    e.preventDefault(); 

    const imagen = remera.getAttribute('data-imagen');
    const titulo = remera.getAttribute('data-titulo');

    window.location.href = `product.html?imagen=${imagen}&titulo=${titulo}`;
  });
});


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const imagen = urlParams.get('imagen');
const titulo = urlParams.get('titulo');

const imagenElement = document.getElementById('imagen');
imagenElement.src = imagen;

const tituloElement = document.getElementById('titulo');
tituloElement.textContent = titulo;


var h1 = document.getElementById('titulo');
var p = document.getElementById('desc');
var form = document.getElementById('form');
var s1 = document.getElementById('select1');
var s2 = document.getElementById('select2');
var precio = document.getElementById('precio')
var desc = document.getElementById('producto-desc');
var productoContainer = document.getElementById('producto');
var productoImagenContainer = document.getElementById('producto-imagen')
var headerr = document.getElementById('header');
var comprarDiv = document.getElementById('comprar')

let resultadoS1, resultadoS2;
s1.addEventListener('change', function(e){
  resultadoS1 = e.target.value;
})

s2.addEventListener('change', function(e){
  resultadoS2 = e.target.value;
})



let divCompra;
let inputNombre;
let inputDireccion;
let inputPostal;
let inputSelect;
let inputSelect1;
let inputSelect2;
let inputSelect3;
let inputSelect4;
let inputSelectPlaceholder;
let inputTarjeta;
let inputs;

var compras = [p,form,s1,s2,desc];

const botonComprar = document.getElementById('comprar');
let divErrorCreado = false;
botonComprar.addEventListener('click', function(e) {
    e.preventDefault();

    if(s1.value === "--Seleccionar Talle--"  || s2.value === "--Seleccionar Cantidad--"){
        if (!divErrorCreado) {
            divError = document.createElement('div');
            divError.classList.add('error');
            divError.textContent = "Selecciona un Talle y una Cantidad"
            desc.appendChild(divError);
            divErrorCreado = true;
        }
    } else {
        if (divErrorCreado) {
            desc.removeChild(divError);
            divErrorCreado = false;
        }
    }

    if(!divErrorCreado){
      compras.forEach((i) =>{
        i.classList.add("no-display")
      })

      compraCreada = false;

      if (!compraCreada) {
        form.classList.add('column-reverse');
        
        if (!form.querySelector('.div-compra')) {
          divCompra = document.createElement('DIV');
          divCompra.classList.add('div-compra');
          form.appendChild(divCompra);

          inputNombre = document.createElement('INPUT');
          inputNombre.type = 'text';
          inputNombre.value = '';
          inputNombre.placeholder = 'Nombre Completo';
          inputNombre.classList.add('input-compra');

          inputDireccion = document.createElement('INPUT');
          inputDireccion.type = 'text';
          inputDireccion.value = '';
          inputDireccion.placeholder = 'Direccion';
          inputDireccion.classList.add('input-compra');
          
          inputProvincia = document.createElement('INPUT');
          inputProvincia.type = 'text';
          inputProvincia.value = '';
          inputProvincia.placeholder = 'Provincia';
          inputProvincia.classList.add('input-compra');
          
          inputSelect = document.createElement('SELECT');
          inputSelect1 = document.createElement('OPTION');
          inputSelect1.textContent = 'Tarjeta Credito'
          inputSelect2 = document.createElement('OPTION');
          inputSelect2.textContent = 'Tarjeta Debito'
          inputSelect3 = document.createElement('OPTION');
          inputSelect3.textContent = 'PayPal'
          inputSelect4 = document.createElement('OPTION');
          inputSelect4.textContent = 'Pago Facil'
          inputSelectPlaceholder = document.createElement('OPTION');
          inputSelectPlaceholder.textContent = '--Metodo de Pago--';
          inputSelectPlaceholder.selected = true;
          inputSelectPlaceholder.disabled = true;

          inputSelectsAll = [inputSelectPlaceholder,inputSelect1,inputSelect2, inputSelect3, inputSelect4];
          inputSelectsAll.forEach((m) =>{
            inputSelect.appendChild(m);
          })
          inputSelect.classList.add('select');
          inputSelect.classList.add('no-border');

          inputTarjeta = document.createElement('INPUT');
          inputTarjeta.type = 'number';
          inputTarjeta.maxlength = '16';
          inputTarjeta.value = '';
          inputTarjeta.placeholder = 'Tarjeta(falsa)';
          inputTarjeta.classList.add('input-compra');
          inputTarjeta.classList.add('no-increment');
          inputTarjeta.style.display = 'none';

          inputs = [inputNombre, inputDireccion, inputProvincia, inputSelect, inputTarjeta];

          botonComprar.classList.add('w-');

          inputs.forEach((i) => {
            divCompra.appendChild(i);
          });

          inputSelect.addEventListener('change', function() {
            if (inputSelect.value === 'Tarjeta Credito' || inputSelect.value === 'Tarjeta Debito') {
              inputTarjeta.style.display = 'block';
            } else {
              inputTarjeta.style.display = 'none';
            }
          });
        }
        
        compraCreada = true;
      }
      
      boton = document.querySelector('.w-')
      let errorCreado = false;
      boton.addEventListener('click', function(e){
        e.preventDefault();
        if(inputNombre.value === '' || inputDireccion.value === ''){
          if(!form.querySelector('.error')){
            error = document.createElement('DIV');
            error.classList.add('error');
            error.textContent = 'Debes completar todos los campos';
            form.appendChild(error);
            errorCreado = true;
          }
        } else {
          if(errorCreado){
            form.removeChild(error);
            errorCreado = false;
          } else {
            if(!errorCreado){
              inputs = [inputNombre, inputDireccion, inputProvincia, inputSelect, inputTarjeta];
              inputs.forEach((i) =>{
                i.classList.add('no-display');
                i.style.width = '0rem';
                i.style.height = '0rem';
                i.style.visibility = 'hidden';
                i.style.padding = '0rem';
              });
              imagenElement.classList.add('no-display');
              productoImagenContainer.classList.add('no-existe');
              desc.classList.remove('no-display');
              productoContainer.classList.add('menosw')
              divRealizado = document.createElement('DIV');
              divRealizado.classList.add('div-realizado');

              boton.disabled = true;

              divDatos = document.createElement('DIV');
              datosTitulo = document.createElement('H2');
              datosTitulo.textContent = 'DATOS PERSONALES'
              nombre = document.createElement('P');
              nombre.textContent = 'NOMBRE: ' + inputNombre.value;
              divDatos.appendChild(datosTitulo)
              divDatos.appendChild(nombre)
              
              divDireccionCP = document.createElement('DIV');
              divDireccionCP.style.display = 'flex';
              divDireccionCP.style.gap = '1rem';
              direccion = document.createElement('P');
              direccion.textContent = 'DIRECCION: ' + inputDireccion.value;
              provincia = document.createElement('P');
              provincia.textContent = 'PROVINCIA: ' + inputProvincia.value;
              divDireccionCP.appendChild(provincia);
              divDireccionCP.appendChild(direccion);
              divDatos.appendChild(divDireccionCP);

              divMetodo = document.createElement('DIV');
              metodo = document.createElement('P');
              metodo.textContent = 'METODO DE PAGO: ' + inputSelect.value;
              divMetodo.appendChild(metodo);
              divDatos.appendChild(divMetodo);
              
              divDetalles = document.createElement('DIV');
              detallesTitulo = document.createElement('H2');
              detallesTitulo.textContent = 'DETALLES DEL PRODUCTO:'
              divDetalles.appendChild(detallesTitulo);

              divTalle = document.createElement('DIV');
              talle = document.createElement('P');
              talle.textContent = 'TALLE: ' + resultadoS1;
              divTalle.appendChild(talle);
              divDetalles.appendChild(divTalle)

              divCantidad = document.createElement('DIV');
              cantidad = document.createElement('P')
              cantidad.textContent = 'CANTIDAD: ' + resultadoS2;
              divCantidad.appendChild(cantidad);
              divDetalles.appendChild(divCantidad)

              divPrecioEnvio = document.createElement('DIV');
              precioEnvio = document.createElement('P');
              divPrecioEnvio.appendChild(precioEnvio)
              precioEnvio.textContent = 'PRECIO DE ENVIO: 30$'
              precio.textContent = precioNum + 30 + '$';
              precioTotal = document.createElement('P');
              precioTotal.textContent = 'PRECIO TOTAL: ' + precio.textContent;
              divPrecioEnvio.appendChild(precioTotal)
              divDetalles.appendChild(divPrecioEnvio);

              divs = [divDatos, divDetalles];
              divs.forEach((i) =>{
                divRealizado.appendChild(i);
              })
              form.appendChild(divRealizado);
              header.style.height = '120rem'
              boton.value = 'COMPRAR'

              boton.classList.add('boton-comprar')
              boton.classList.remove('w-')

              botonCompraRealizada = document.querySelector('.boton-comprar')
              botonCompraRealizada.style.width = '10rem';
              botonCompraRealizada.addEventListener('click', (e)=>{
                e.preventDefault();
                document.querySelectorAll('.div-realizado p').forEach((p)=>{
                  p.classList.add('no-display');
                  p.style.width = '0rem';
                  p.style.height = '0rem';
                  p.style.visibility = 'hidden';
                  p.style.padding = '0rem';
                })
                const h2s = document.querySelectorAll('.div-realizado h2');
                h2s.forEach(h2 => {
                  h2.classList.add('no-display');
                  h2.style.width = '0rem';
                  h2.style.height = '0rem';
                  h2.style.visibility = 'hidden';
                  h2.style.padding = '0rem';
                });

                h1.classList.add('no-display');
                divRealizado.classList.add('no-display');
                botonCompraRealizada.classList.add('no-display');
                precio.classList.add('no-display');
                desc.classList.add('no-display');
                desc.style.width = '0rem';
                desc.style.height = '0rem';
                desc.style.padding = '0rem';
                desc.style.visibility = 'hidden';

                productoContainer.classList.add('compra-realizada')
                compraRealizadaTitulo = document.createElement('H1');
                compraRealizadaTitulo.textContent = 'COMPRA REALIZADA CORRECTAMENTE';
                compraRealizadaIMG = document.createElement('IMG');
                compraRealizadaIMG.src = 'build/img/check.png';
                compraRealizadaContainer = document.createElement('DIV');
                compraALL = [compraRealizadaIMG,compraRealizadaTitulo];
                compraALL.forEach((i)=>{
                  compraRealizadaContainer.appendChild(i);
                })
                productoContainer.appendChild(compraRealizadaContainer);

                setTimeout(() => {
                  window.location.href = "index.html";
                  }, 1000);                

              });
              boton.disabled = false;
            }
          }
        }
      })

      
    }
  });

  var overlayCreado = false;

  let precioNum = 0;
  s2.addEventListener("change",(e)=>{
    cantidad = parseInt(e.target.value);
    precioNum = 50 * cantidad;
    precio.textContent = precioNum + "$";
});
