import { hojaImpresionContainer, inputCantidadMasa,listaRecetas } from "../Logica/CONST.js";
import { Masa } from "../Logica/MASA.js";
document.addEventListener("DOMContentLoaded", () => {
    console.log(inputCantidadMasa)
    const params = new URLSearchParams(window.location.search);
    const sector = params.get("sector");
    console.log(hojaImpresionContainer);
    hojaImpresionContainer.innerHTML = `<p id="titulo-receta">Receta de ${sector}</p>`;

    if (sector === "Masa") {
        Masa.forEach(ingrediente => {  
            const cantidad = inputCantidadMasa.value;                                 
            hojaImpresionContainer.innerHTML += `
                <section class="receta-item">
                    <label>${ingrediente.nombre}</label> 
                    <p>${ingrediente.cantidad}</p>
                </section>
                `;
        });
    }
inputCantidadMasa.addEventListener("input", (e) => {
    e.preventDefault();
    hojaImpresionContainer.innerHTML =''
     Masa.forEach(ingrediente => {  
            const cantidad = inputCantidadMasa.value;                                 
            hojaImpresionContainer.innerHTML += `
                <section class="receta-item">
                    <label>${ingrediente.nombre}</label> 
                    <p>${Number(ingrediente.cantidad)*Number(cantidad)}</p>
                </section>                
                `;
        });
});







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