// API endpoint
const URL = "https://api.unsplash.com";
// const xoauthURL = "https://unsplash.com/oauth/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code";
const access_token = "DN1szLs1ahAVP09UbQhum4O0hWumWUsTo_E8awrmlJQ";
// const oauthURL = "https://unsplash.com/oauth/authorize?client_id=WLd665Y8DzWCBC55jZ8p94RPliXgzslaYYPYTXuEODM&redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=code";
const appNode = document.querySelector("#app");

// API credentials
const USER = "juanmaracho10@gmail.com";
const API_KEY = "WLd665Y8DzWCBC55jZ8p94RPliXgzslaYYPYTXuEODM";


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
  e.preventDefault();
  let valor = document.querySelector("#queryForm").value;
  console.log(`Ha ingresado: ${valor}`);
  return valor
});
}

// boton.onclick.preventDefault();
const prueba = document.querySelector("#prueba");


// function getQuery() {
//   boton.addEventListener("click", (evento) => {
//     // Previene el comportamiento por defecto del formulario para que no se envíe 2 veces
//     evento.preventDefault();
//     alert()

//     let valor = document.querySelector("#queryForm");
//     console.log(`Ha ingresado: ${valor}`);
//     return valor
//   });
// }


// parametro de busqueda temporal para la prueba
const queryWord = getQuery();
// Web API fetch
// Conectarnos al servidor
window
  // .fetch(`${URL}/photos/?client_id=${API_KEY}`, {
  .fetch(`${URL}/search/photos/?query=${queryWord}&per_page=2&access_token=${access_token}`, {
  // .fetch(`${URL}`, {
    method: "GET",
    withCredentials: true,
    // headers: {
    //   "Authorization": `Client-ID ${API_KEY}`,
    //   "Content-Type": "application/json"
    // }
  })
    .then(resp => resp.json())

    .then((data) => {

      console.log("ha funcionado")
      console.log(data);
      let images = [];
      // data.forEach(element => {
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
          // Direccion de la imagen
          // image.src = element.links.download;

          // image.src = data[0].urls.raw + "&h=350&w=350";

          // Devuelve la primera imagen que coincida con la busqueda
          image.src = data.results[1].urls.raw;

          // image.src = data[0].urls.raw;

          // Se agrega el elemento <img> al <div> contenedor
          imageContainer.append(image);
          images.push(imageContainer);
      // })

      // Se agrega el array de imagenes al contenedor principal
      appNode.append(...images);
    })

      .catch(function(error) {
      console.log("NO se pudo conectar")
      console.log(error);
  });


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
