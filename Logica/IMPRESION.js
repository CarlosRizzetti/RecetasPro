import { hojaImpresionContainer, inputCantidadMasa,listaRecetas,DescripcionProducto } from "../Logica/CONST.js";
import { Masa } from "../Logica/MASA.js";
import { MasaDeChocolate } from "../Logica/MASA_DE_CHOCOLATE.JS";
document.addEventListener("DOMContentLoaded", () => {
    console.log(inputCantidadMasa)
    const params = new URLSearchParams(window.location.search);
    const sector = params.get("sector");
    console.log(hojaImpresionContainer);
    DescripcionProducto.innerHTML = `<p id="titulo-receta">Receta de ${sector}</p>`;

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
    if (sector === "Masa de chocolate") {
        MasaDeChocolate.forEach(ingrediente => {  
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
            let ing=ingrediente.cantidad;
            let total= Number(ing)*Number(cantidad);
            console.log(total.toFixed(2));                                 
            hojaImpresionContainer.innerHTML += `
                <section class="receta-item">
                    <label>${ingrediente.nombre}</label> 
                    <p>${total.toFixed(2)}</p>
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