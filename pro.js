import { irARecetas } from "./FUNCIONES.js";
const btnCategorias = document.querySelectorAll("button");
btnCategorias.forEach(btn => {
  btn.addEventListener("click", () => irARecetas(btn.textContent));
});