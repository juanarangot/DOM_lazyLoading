/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

// TODO: agregar formulario que permita buscar por nombre o tematica de imgenes, y el usuario pueda ir agregando imagenes

const createImageNode = () => {
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
  image.src = "https://rickandmortyapi.com/api/character/avatar/322.jpeg";

  // Se agrega el elemento <img> al <div> contenedor
  imageContainer.appendChild(image);
  return imageContainer;
}


// Se crea una nueva imagen
const newImage = createImageNode();

// Nodo principal donde se insertan las imagenes
const mainNode = document.querySelector("#images");

mainNode.appendChild(newImage);