import { hojaImpresionContainer, inputCantidadMasa,inputCantidadCuadraditos, listaRecetas, header, contenedorMain, DescripcionProductoInput } from "../Logica/CONST.js";
import { Masa } from "../Logica/MASA.js";
import { MasaDeChocolate } from "../Logica/MASA_DE_CHOCOLATE.JS";
import { recetas } from "../Logica/CUADRADITOS.js";
import { mostrarRecetaDeCuadraditos, mostrarRecetaDeMasa } from "./FUNCIONES.js";

import { cuadraditosScript } from "./cuadraditosScript.js";
const cuadraditos = new cuadraditosScript();
document.addEventListener("DOMContentLoaded", () => {    
    const params = new URLSearchParams(window.location.search);
    const sector = params.get("sector");   
    header.innerHTML = `<section id="titulo-receta">Receta de ${sector}</section    > 
    <button onclick="window.print()" id="btnImprimir">Imprimir</button> `;

    if (sector === "Masa") {
        Masa.forEach(ingrediente => {
              hojaImpresionContainer.innerHTML += `
                <section class="receta-item">
                    <label>${ingrediente.nombre}</label> 
                    <p>${ingrediente.cantidad}</p>
                </section>
                `;
        });
        mostrarRecetaDeMasa(inputCantidadMasa);
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
    if (sector === "Cuadraditos") {        
        contenedorMain.innerHTML = '<section id="recetas-lista"></section><section class="hijo-receta"></section>';
        const listaRecetas = document.getElementById("recetas-lista");
        recetas.forEach(receta => {
            listaRecetas.innerHTML += `
                <button class="btn-receta-item">${receta.mercaderia}</button>
                `;
        });
         cuadraditos.render();    
 
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