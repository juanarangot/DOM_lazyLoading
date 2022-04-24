/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

// API endpoint
const URL = "https://api.unsplash.com"
const appNode = document.querySelector("#app");

// API credentials
const USER = "juanmaracho10@gmail.com";
const API_KEY = "WLd665Y8DzWCBC55jZ8p94RPliXgzslaYYPYTXuEODM";

// Web API fetch
// Conectarnos al servidor
window
  .fetch(`${URL}/photos/?client_id=${API_KEY}`, {
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
        // console.log(element.links.download);
          // Se crea el <div> contenedor de la imagen
          const imageContainer = document.createElement('div');
          imageContainer.className = "p-4";

          // Se crea el nuevo elemento de <img>
          const image = document.createElement('img');
          // clase de la imagen
          image.className = "mx-auto rounded-md bg-gray-300 card";
          // dimensiones de la imagen
          // image.height = 350;
          // image.width = 350;
          // Direccion de la imagen
          // image.src = element.links.download;

          // image.src = data[0].links.download;
          image.src = data[0].urls.raw + "&h=350&w=350";
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
