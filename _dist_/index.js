// API endpoint
const URL = "https://api.unsplash.com";

// API credentials
const access_token = "DN1szLs1ahAVP09UbQhum4O0hWumWUsTo_E8awrmlJQ";

// Nodo principal donde se agregaran las imagenes
const appNode = document.querySelector("#app");

// Obtener y retorna el valor del formulario enviado
const boton = document.querySelector("#submitButton");

// Boton para agregar imagenes
const botonInterno = document.querySelector("#addImage");
botonInterno.addEventListener("click", (e) => {
  agregarImagenes(formulario.value.trim());
});


// Trabajando con el formulario de búsqueda
let formulario = document.querySelector("#queryForm");
formulario.className = "bg-white shadow-md rounded px-8 pt-6 pb-4 mb-4";
formulario.placeholder = "Busca una imagen aqui";


// Datos de la solicitud de la API
let dataRequestObject = {
  // Estado inicial del objeto para saber si se hace una nueva solicitud o se trabaja con datos que ya se tienen
  estadoInicial: true,
  query: "agua",
  cantidad: 10,
  numeroDePagina: 1,
  // Almacena el total de resultados que se obtuvieron en la solicitud
  resultados: [],
  lastIndex: 0,
  // Metodos para maniular los datos de la solicitud
  // Obtiene y retorna un array con los resultados de la busqueda
  hacerSolicitud: async function () {
    console.log(`Buscando el termino ${this.query}`);
    window
      .fetch(`${URL}/search/photos/?query=${this.query}&page=${this.numeroDePagina}&per_page=${this.cantidad}&access_token=${access_token}`, {
          method: "GET",
          withCredentials: true,
        })
        .then(resp => resp.json())
        .then((data) => {

          console.log("ha funcionado")
          this.aumentarNumeroDePagina(); // Se aumenta el numero de pagina para la siguiente solicitud

          let resultados = data.results;
          console.log(resultados);

          this.resultados = resultados; // Se agrega el resultado a la lista de resultados
        })
        .catch(function(error) {
          console.log("NO se pudo conectar")
          console.log(error);
        });
  },
  // Aumenta la cantidad de imagenes a mostrar
  aumentarCantidad: function () {
    this.cantidad += 10;
  },
  // Aumenta el numero de pagina de la cual se muestran imagenes
  aumentarNumeroDePagina: function () {
    this.numeroDePagina += 1;
    console.log(`Numero de pagina: ${this.numeroDePagina}`);
  },
  // Restablece los datos del objeto para una nueva solicitud
  resetData: function () {
    this.estadoInicial = true;
    this.cantidad = 10;
    this.numeroDePagina = 1;
    this.resultados = [];
  },
}


// Agrega las imagenes en el contenedor principal cuando se presione el boton
// Lee y manipula el objeto 'dataRequestObject' que contiene los datos de la solicitud
const agregarImagenes = (query) => {

  const imageNode = () => {
    // se puede usar shift, para eliminar el primer elemento de la lista y retornarlo. y asi agregarlo al dom
    let elemento = dataRequestObject.resultados.shift();
    // TODO: revisar el error que se genera aqui con el primer resultado
    console.log("ANTES");
    console.log(dataRequestObject.resultados);
    console.log(elemento);
    console.log("DESPUES");

    // Se crea el <div> contenedor de la imagen
    const imageContainer = document.createElement('div');
    imageContainer.className = "p-4";

    // Se crea el nuevo elemento de <img>
    const image = document.createElement('img');
    // clase de la imagen
    image.className = "mx-auto rounded-md bg-gray-300 card";
    // dimensiones de la imagen
    image.height = 350;
    image.width = 350;

    // direccion de la imagen
    image.src = elemento.urls.raw;

    // Se agrega el elemento <img> al <div> contenedor
    imageContainer.append(image);

    appNode.appendChild(imageContainer);
    console.log("Se ha agregado la imagen al DOM")
  }


  // Se comprueba que los resultados de la busqueda no esten vacios
  if (dataRequestObject.resultados.length > 0) {
    // Se obtiene la lista de imagenes
    console.log("TRATANDO CON EL OBJETO")

    // TODO: aqui se genera la imagen para agregarla al DOM
    imageNode();
  }
  // Se comprueba si ya se hizo la solicitud de la API anteriormente
  else if (dataRequestObject.estadoInicial) {
    console.log("Dentro de la SOLICITUD");
    // Se define la query de la solicitud
    dataRequestObject.query = query;
    dataRequestObject.hacerSolicitud(); // Se hace la solicitud de la API
    // Se cambia el estado inicial a false para que no se vuelva a hacer la solicitud
    dataRequestObject.estadoInicial = false;
    imageNode();

    // TODO: hacer la funcion que compruebe si se han terminado las imagenes
  }
  // En caso de que la solicitud no devuelva resultados
  else {
    alert("No se encontraron resultados para tu busqueda, intenta con otra palabra");
  }
}


// FUNCION PRINCIPAL
// function getQuery() {
boton.addEventListener("click", (e) => {
  // Evita que se envie el formulario y se recargue la pagina
  e.preventDefault();
  // Obtiene el valor del input
  let valor = formulario.value.trim();

  // Selecciono el elemento para poder agregar imagenes
  // Funciona si seleeciono por id o tag, pero no por clase
  let agregaImagenes = document.getElementById("lastBlock")

  // Comprueba si el valor del input es vacio
  if (valor === "") {
    alert("ingresa una busqueda valida");
    console.log("ERROR - No se ingreso nada");
    agregaImagenes.style = "display: none";
  }
  else {
    console.log(`Ha ingresado: ${valor}`);
    // defino el tipo de atributo 'display' para que se muestre el bloque que estaba oculto
    agregaImagenes.style = "display: block";

    // Se restablecen los valores del objeto para una nueva solicitud
    dataRequestObject.resetData();
  }
});
