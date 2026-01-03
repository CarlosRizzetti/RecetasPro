import { hojaImpresionContainer,inputCantidadMasa } from "../Logica/CONST.js";
import { Masa } from "../Logica/MASA.js";
document.addEventListener("DOMContentLoaded", () => {
console.log(inputCantidadMasa)
    const params = new URLSearchParams(window.location.search);
    const sector = params.get("sector");
    console.log(hojaImpresionContainer);
    hojaImpresionContainer.innerHTML = `<h1>Receta de ${sector}</h1>`;

    if (sector === "Masa") {        
            Masa.forEach(ingrediente => {
                hojaImpresionContainer.innerHTML += `
                <section class="receta-item">
                    <label>${ingrediente.nombre}</label> 
                    <p>${Number(ingrediente.cantidad)*Number(inputCantidadMasa.value)}</p>
                </section>
                `;
            });
        }








});












/* function mostrarRecetas(nombre) {
    cuadradito.textContent=`RECETA DE ${nombre}:`;
    const recetaBuscada = recetas.filter(r => r.mercaderia.includes(nombre));   
    if (recetaBuscada) {
        tablaResultado.innerHTML = "";  
        recetaBuscada.forEach(receta => {
            receta.ingredientes.forEach(ingrediente => {
                tablaResultado.innerHTML += `
                <tr><td class="nombre-ingrediente">${ingrediente.nombre}</td>
                <td class="cantidad-ingrediente">${Number(ingrediente.cantidad)*Number(cantidadReceta.value)}</td></tr>`;
            });
        });
    }
} */ 