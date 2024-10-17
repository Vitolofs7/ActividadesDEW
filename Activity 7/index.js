const container = document.getElementById("table-container");

let currentX = 0; // Posición inicial X
let currentY = 0; // Posición inicial Y
const brickSize = 100; // Tamaño del ladrillo
const spaceBetween = 10; // Espacio entre los ladrillos

let brickCount = 0; // Contador de ladrillos

// Se obtiene el ancho del contenedor
const containerWidth = container.offsetWidth;

// Funcion para crear el ladrillo
function createBrick() {
  const brick = document.createElement("div"); // Se crea el div que ocupará el ladrillo
  brick.classList.add("brick"); // Se añade la clase "brick" para aplicar los estilos al ladrillo

  // Posicionar ladrillo en X y Y
  brick.style.left = `${currentX}px`;
  brick.style.top = `${currentY}px`;

  // Incrementar la posición en X para el siguiente ladrillo
  currentX += brickSize + spaceBetween;

  // Si el ladrillo se sale del contenedor en X, pasar a la siguiente fila
  if (currentX + brickSize > containerWidth) {
    currentX = 0; // Se reinicia la posición X para empezar la nueva fila
    currentY += brickSize + spaceBetween; // Aquí, se está incrementando currentY por el tamaño del ladrillo más el espacio entre ladrillos (spaceBetween).
    //Esto mueve la posición vertical hacia abajo, creando espacio para la nueva fila de ladrillos.
  }

  // Se incrementaa el contador de ladrillos
  brickCount++;

  // Se crea un evento para eliminar ladrillo al hacer click
  brick.addEventListener("click", () => {
    container.removeChild(brick); // Se elimina el ladrillo
    brickCount--; // Se decrementa el contador cuando un ladrillo se elimina
    checkGameOver(); // Verificar si se han eliminado todos los ladrillos
  });

  // Se añade el ladrillo al contenedor
  container.appendChild(brick);
}

// Se crea una función para verificar si todos los ladrillos han sido eliminados
function checkGameOver() {
  if (brickCount === 0) {
    // Si es asi
    alert("¡Has eliminado todos los ladrillos! Fin del juego."); // Se genera una alerta
    clearInterval(gameInterval); // Se detiene la creación de nuevos ladrillos
  }
}

// Se crea un ladrillo cada segundo
// const gameInterval = setInterval(createBrick, 1000);
