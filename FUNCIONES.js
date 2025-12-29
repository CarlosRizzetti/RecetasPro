import { recetas } from "./CUADRADITOS.js";
import { listaRecetas,btnCalcularMasa} from "./CONST.js";
import { budines } from "./BUDINES.js";
import { masa } from "./MASA.js";


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
}
export function botonElegido(boton) {
       boton.addEventListener("click", () => {
                    listaRecetas.innerHTML = "";
                    if (boton.id === "recetas-container_Cuadraditos") {
                        agregarBotones(recetas);

                    }
                    if (boton.id === "recetas-container_Budines") {
                        agregarBotones(budines);
                    }
                    if (boton.id === "recetas-container_Masa") {
                        listaRecetas.innerHTML = `<section id="masa-section"><label id="masa_cantidad_label">Cantidad de masa</label>
                        <input type="number" id="masa_cantidad"></section>`;
                        
                        masa.forEach(ingrediente => {
                            const cantidadMasa = document.querySelector("#masa_cantidad").value;
                            listaRecetas.innerHTML +=
                                `<section class="receta-item">
                             <label>${ingrediente.nombre}</label> 
                             <p>${ingrediente.cantidad}</p>
                             </section>
                             `;
                        }); 
                    }
                })
}
/* export function abrirVentanaImpresion() {
    window.open("HojadeImpresion.html", "_blank");
} */
function agregarBotones(boton){    
   boton.forEach(receta => {
   listaRecetas.innerHTML +=
    `<section class="receta-item">
     <label>${receta.mercaderia}</label> 
     <input type="number" id="${receta.mercaderia}_cantidad" >
     </section>`;
   });

                    
}
