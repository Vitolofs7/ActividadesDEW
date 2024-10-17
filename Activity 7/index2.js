const container = document.getElementById("table-container2");

const posterSize = 100; // Tamaño del cartel

let posterCount = 0; // Contador de carteles

function createPoster() {
  const poster = document.createElement("div");
  poster.classList.add("poster");

  // Posición aleatoria dentro del contenedor
  const posX = Math.random() * (container.offsetWidth - posterSize); // 50 es el ancho del poster
  const posY = Math.random() * (container.offsetHeight - posterSize); // 50 es el alto del poster

  poster.style.left = `${posX}px`;
  poster.style.top = `${posY}px`;

  posterCount++;

  container.appendChild(poster);
}

// setInterval(createPoster, 1000);