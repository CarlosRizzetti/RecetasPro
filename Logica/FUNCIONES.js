import { recetas } from "../Logica/CUADRADITOS.js";
import { listaRecetas,btnCalcularMasa} from "../Logica/CONST.js";
import { budines } from "../Logica/BUDINES.js";
import { Masa } from "../Logica/MASA.js";

export function botonElegido(boton) {
       boton.addEventListener("click", () => {
                    listaRecetas.innerHTML = "";
                    if (boton.id === "recetas-container_Cuadraditos") {
                        recetas.forEach(receta => {
                            listaRecetas.innerHTML +=
                                `<section class="receta-item">
                             <label>${receta.mercaderia}</label> 
                             <input type="number" id="${receta.mercaderia}_cantidad" >
                             </section>`;
                        });
                        btnCalcularMasa.innerHTML=`<a href="hojaDeImpresion.html?sector=recetas" target="_blank">Calcular </a>`;

                    }
                    if (boton.id === "recetas-container_Budines") {
                        budines.forEach(receta => {
                            listaRecetas.innerHTML +=
                                `<section class="receta-item">
                             <label>${receta.mercaderia}</label> 
                             <input type="number" id="${receta.mercaderia}_cantidad" >
                             </section>`;
                        });
                        btnCalcularMasa.innerHTML=`<a href="hojaDeImpresion.html?sector=budines" target="_blank">Calcular </a>`;
                    }
                    if (boton.id === "recetas-container_Masa") {
                        listaRecetas.innerHTML = `<section id="masa-section"><label id="masa_cantidad_label">Cantidad de masa</label>
                        <input type="number" id="masaCantidad"></section>`;
                        Masa.forEach(ingrediente => {
                             listaRecetas.innerHTML +=
                                `<section class="receta-item">
                             <label>${ingrediente.nombre}</label> 
                             <p>${Number(ingrediente.cantidad)}</p>
                             </section>
                             `;
                        }); 
                        btnCalcularMasa.innerHTML=`<a href="hojaDeImpresion.html?sector=Masa" target="_blank">Calcular</a>`;
                    }
                })
}
/* export function irARecetas(sector) {
    window.location.href = `recetas.html?sector=${sector}`;
}
export function mostrarRecetas(nombre) {
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