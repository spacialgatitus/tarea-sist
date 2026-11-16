// Efecto de escritura tipo terminal
const frases = [
  "iniciando sesión en el ICC...",
  "comunicación: en línea",
  "socialización: en línea",
  "bienvenido a mi blog"
];
const destino = document.getElementById("tecleo");
let f = 0, c = 0;
function teclear() {
  const frase = frases[f];
  if (c <= frase.length) {
    destino.textContent = frase.slice(0, c++);
    setTimeout(teclear, 55);
  } else {
    setTimeout(() => { c = 0; f = (f + 1) % frases.length; teclear(); }, 1600);
  }
}
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  teclear();
} else {
  destino.textContent = frases[0];
}

// Barra de XP según el avance de lectura
const xp = document.getElementById("xp");
window.addEventListener("scroll", () => {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  xp.style.width = (total > 0 ? (window.scrollY / total) * 100 : 0) + "%";
});