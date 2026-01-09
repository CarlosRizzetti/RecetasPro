import { hojaImpresionContainer, inputCantidadMasa, listaRecetas, header, contenedorMain, DescripcionProductoInput } from "../Logica/CONST.js";
import { Masa } from "../Logica/MASA.js";
import { MasaDeChocolate } from "../Logica/MASA_DE_CHOCOLATE.JS";
import { recetas } from "../Logica/CUADRADITOS.js";
import { mostrarRecetaDeMasa } from "./FUNCIONES.js";
document.addEventListener("DOMContentLoaded", () => {
    console.log(inputCantidadMasa)
    const params = new URLSearchParams(window.location.search);
    const sector = params.get("sector");
    console.log(hojaImpresionContainer);
    header.innerHTML = `<section id="titulo-receta">Receta de ${sector}</section    > 
    <button onclick="window.print()" id="btnImprimir">Imprimir</button> `;

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
    if (sector === "Cuadraditos") {
        const cantidad = inputCantidadMasa.value;
        console.log(inputCantidadMasa.value)
        DescripcionProductoInput.innerHTML = '';
        hojaImpresionContainer.innerHTML = '<section id="recetas-lista"></section>';
        const listaRecetas = document.getElementById("recetas-lista");
        recetas.forEach(receta => {
            listaRecetas.innerHTML += `
                <button class="btn-receta-item">${receta.mercaderia}</button>
                `;
        })
    }
    mostrarRecetaDeMasa(inputCantidadMasa);
    const btnRecetaItems = document.querySelectorAll(".btn-receta-item");
    btnRecetaItems.forEach(btn => {
        btn.addEventListener("click", () => {
            const recetaBuscada = recetas.filter(r => r.mercaderia.includes(btn.textContent));
            if (recetaBuscada) {
                hojaImpresionContainer.innerHTML = `
                        <section id="masa-section-input ">
                          <label id="masa_cantidad_label">Cantidad de cuadraditos</label>
                          <input type="number" id="masaCantidad">
                        </section>`;
                recetaBuscada.forEach(receta => {
                    receta.ingredientes.forEach(ingrediente => {
                        hojaImpresionContainer.innerHTML += `
                        
                        <section class="receta-item">
                            <label>${ingrediente.nombre}</label> 
                            <p>${ingrediente.cantidad}</p>
                        </section>                
                        `;

                    });
                });
            }
        });
    });
});
mostrarRecetaDeMasa(inputCantidadMasa);










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