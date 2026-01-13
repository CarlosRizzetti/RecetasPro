import { hojaImpresionContainer, inputCantidadMasa, header, contenedorMain } from "../Logica/CONST.js";
import { Masa } from "../Logica/MASA.js";
import { MasaDeChocolate } from "../Logica/MASA_DE_CHOCOLATE.JS";
import { recetas } from "../Logica/CUADRADITOS.js";
import { mostrarRecetaDeMasa } from "./FUNCIONES.js";
import { CuadraditosSeleccionado } from "./FUNCIONES.js";

 let cantidadCuadraditos;
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
        contenedorMain.innerHTML = '<section id="recetas-lista"></section>';
        const listaRecetas = document.getElementById("recetas-lista");
        recetas.forEach(receta => {
            listaRecetas.innerHTML += `
            <section class="receta-cuadradito-item">
                <button class="btn-receta-item">${receta.mercaderia}</button>
                <input type="number" id="${receta.mercaderia}" placeholder="Cantidad ">
            </section>
                `;
        });    
               
        contenedorMain.appendChild(hojaImpresionContainer);
        cantidadCuadraditos = document.querySelectorAll("input[type='number']");
        CuadraditosSeleccionado(cantidadCuadraditos);
        cantidadCuadraditos.forEach(input => {
            input.addEventListener("change", () => {
                 CuadraditosSeleccionado(cantidadCuadraditos);
                 const aa=localStoreageLeer();
                 aa.forEach(historial => {
                    hojaImpresionContainer.innerHTML += historial;
                 });
            });
        });
    } 
 
});


function localStoreageLeer() {
    const historial= JSON.parse(localStorage.getItem("historial")) || [];
    return historial;
}



