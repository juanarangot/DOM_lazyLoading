// API endpoint
const URL = "https://api.unsplash.com";

// API credentials
const API_KEY = "WLd665Y8DzWCBC55jZ8p94RPliXgzslaYYPYTXuEODM";
const access_token = "DN1szLs1ahAVP09UbQhum4O0hWumWUsTo_E8awrmlJQ";

// Nodo principal donde se agregaran las imagenes
const appNode = document.querySelector("#app");


// Trabajando con el formulario de búsqueda
let formulario = document.querySelector("#queryForm");
formulario.className = "bg-white shadow-md rounded px-8 pt-6 pb-4 mb-4";
formulario.placeholder = "Busca una imagen aqui";

// Obtener y retorna el valor del formulario enviado
const boton = document.querySelector("#submitButton");



// formulario.addEventListener("submit", (e) => {
//   e.preventDefault();
//   alert();
//   let valor = document.querySelector("#queryForm").value;
//   console.log(`Ha ingresado: ${valor}`);
//   return valor
// });

function getQuery() {
  boton.addEventListener("click", (e) => {
    // Evita que se envie el formulario y se recargue la pagina
    alert("dentro del boton")
    e.preventDefault();
    // Obtiene el valor del input
    let valor = document.querySelector("#queryForm").value.trim();
    console.log(`Ha ingresado: ${valor}`);
    
    // Selecciono el elemento para poder agregar imagenes
    // Funciona si seleeciono por id o tag, pero no por clase
    // let agregaImagenes = document.getElementsByTagName("fieldset")[0];
    let agregaImagenes = document.getElementById("lastBlock")
    
    // Comprueba si el valor del input es vacio
    if (valor === "") {
      alert("ingresa una busqueda valida");
      agregaImagenes.style = "display: none";
    }
    else {
      
      // defino el tipo de atributo 'display' para que se muestre el bloque que estaba oculto
      agregaImagenes.style = "display: block";
      alert("has presionado el boton");
      // parametro de busqueda temporal para la prueba
      // const queryWord = getQuery();
      // fetchImages(valor);
      return valor
    }
  });
}

// Presiona el boton en caso de que el usuario presione enter (keycode 13)
formulario.addEventListener("keyup", (e) => {
  // Asegura que el usuario presione enter (keycode 13)
  // e.preventDefault();
  if (e.keyCode === 13) {
    // alert("has presionado la tecla");
    // le da click al boton ejejecutando la funcion correspondiente
    boton.click();
  }
});


const prueba = document.querySelector("#prueba");
prueba.addEventListener("submit", (e) => {
  e.preventDefault();
});


// Web API fetch
// const fetchImages = (query) => {
//   window
//   // Conectarnos al servidor
//   // .fetch(`${URL}/photos/?client_id=${API_KEY}`, {
//     .fetch(`${URL}/search/photos/?query=${query}&per_page=1&access_token=${access_token}`, {
//     // .fetch(`${URL}`, {
//       method: "GET",
//       withCredentials: true,
//       // headers: {
//         //   "Authorization": `Client-ID ${API_KEY}`,
//       //   "Content-Type": "application/json"
//       // }
//     })
//       .then(resp => resp.json())

//       .then((data) => {

//         console.log("ha funcionado")
//         console.log(data);
//         let images = [];
//         // data.forEach(element => {
//           // Se crea el <div> contenedor de la imagen
//           const imageContainer = document.createElement('div');
//           imageContainer.className = "p-4";
          
//           // Se crea el nuevo elemento de <img>
//           const image = document.createElement('img');
//           // clase de la imagen
//           image.className = "mx-auto rounded-md bg-gray-300 card";
//           // dimensiones de la imagen
//           image.height = 350;
//           image.width = 350;
//           // Direccion de la imagen
//           // image.src = element.links.download;
          
//           // image.src = data[0].urls.raw + "&h=350&w=350";
          
//           // Devuelve la primera imagen que coincida con la busqueda
//           image.src = data.results[1].urls.raw;
          
//           // image.src = data[0].urls.raw;
          
//           // Se agrega el elemento <img> al <div> contenedor
//           imageContainer.append(image);
//           images.push(imageContainer);
//           // })
          
//           // Se agrega el array de imagenes al contenedor principal
//           appNode.append(...images);
//         })
        
//         .catch(function(error) {
//           console.log("NO se pudo conectar")
//           console.log(error);
//         });
// };





      // TODO: agregar formulario que permita buscar por nombre o tematica de imgenes, y el usuario pueda ir agregando imagenes
      
// const createImageNode = () => {
//   // Se crea el <div> contenedor de la imagen
//   const imageContainer = document.createElement('div');
//   imageContainer.className = "p-4";

//   // Se crea el nuevo elemento de <img>
//   const image = document.createElement('img');
//   // clase de la imagen
//   image.className = "mx-auto rounded-md bg-gray-300 card";
//   // dimensiones de la imagen
//   image.height = 350;
//   image.width = 350;
//   // Direccion de la imagen
//   image.src = "https://rickandmortyapi.com/api/character/avatar/322.jpeg";

//   // Se agrega el elemento <img> al <div> contenedor
//   imageContainer.appendChild(image);
//   return imageContainer;
// }


// Se crea una nueva imagen
// const newImage = createImageNode();

// Nodo principal donde se insertan las imagenes
// const mainNode = document.querySelector("#images");
// TODO: arreglar esto luego con el bucle para que no haya doble agregacion de elementos
// mainNode.appendChild(newImage);

// appNode.appendChild(newImage);
