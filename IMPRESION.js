import { hojaImpresionContainer } from "./CONST";
document.addEventListener("DOMContentLoaded", () => {

    hojaImpresionContainer.innerHTML = `<section class="receta-item">
                             <label>${ingrediente.nombre}</label> 
                             <p>${ingrediente.cantidad}</p>
                             </section>
                             `;
});