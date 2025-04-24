console.log("Bienvenido al nivel 1: reflexionando sobre los videojuegos");
console.log("Creditos del","https://www.flaticon.es/iconos-gratis/palanca-de-mando", "palanca de mando iconos", "Palanca de mando iconos creados por Good Ware - Flaticon");

document.getElementById("start-button").addEventListener("click", () => {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("video-container").style.display = "block";

  const video = document.getElementById("game-video");
  video.play();
});

// Cambiar el fondo de pantalla cada 5 segundos
const juegos = ["bg-genshin", "bg-minecraft", "bg-league", "bg-fortnite"];
let indice = 0;

function cambiarFondo() {
  document.body.classList.remove(...juegos); // Solo quitamos las clases de fondo
  document.body.classList.add(juegos[indice]);
  indice = (indice + 1) % juegos.length;
}

setInterval(cambiarFondo, 5000);
cambiarFondo();
