import { contenedorMain,inputCantidadMasa } from "../Logica/CONST.js";
import { recetas } from "../Logica/CUADRADITOS.js";
import { mostrarRecetaDeCuadraditos } from "../Logica/FUNCIONES.js";
export class cuadraditosScript {
    constructor() { }

    render() {
        
        const btnRecetaItems = document.querySelectorAll(".btn-receta-item");
        btnRecetaItems.forEach(btn => {
            btn.addEventListener("click", () => {
                const hijo = document.createElement("section");
                hijo.classList.add("hijo-receta");
                const recetaBuscada = recetas.filter(r => r.mercaderia.includes(btn.textContent));
                if (recetaBuscada) {
                    hijo.innerHTML = `                            
                                   <section id="masa-section-input ">
                                     <label id="masa_cantidad_label">Cantidad de cuadraditos</label>
                                     <input type="number" id="masaCantidadCuadraditos">
                                    </section>`;
                    recetaBuscada.forEach(receta => {
                        receta.ingredientes.forEach(ingrediente => {
                            hijo.innerHTML += `                                   
                                   <section class="receta-item">
                                       <label>${ingrediente.nombre}</label> 
                                       <p>${ingrediente.cantidad}</p>
                                   </section>                
                                   `;
                        });
                    });
                }
                 
                contenedorMain.append(hijo);
                const inputCantidadCuadraditos = document.getElementById("masaCantidadCuadraditos");
                mostrarRecetaDeCuadraditos(inputCantidadCuadraditos);
            });
        })
        


    }
}