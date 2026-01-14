import { recetas } from "../Logica/CUADRADITOS.js";
import { contenedorMain, hojaImpresionContainer} from "../Logica/CONST.js";
import { Masa } from "../Logica/MASA.js";
let cuadraditos=[];
let contador=0;
export function mostrarRecetaDeMasa(cantidad) {
    cantidad.addEventListener("input", (e) => {
        e.preventDefault();
         console.log(e.target.value);
        hojaImpresionContainer.innerHTML = `<section class="descripcion-producto-item">
                                  <label>Cantidad de masa </label><p> ${e.target.value} Kilos</p>
                                </section>`;
        Masa.forEach(ingrediente => {
            const cantidad = e.target.value;
            let ing = ingrediente.cantidad;
            let total = Number(ing) * Number(cantidad);           
            hojaImpresionContainer.innerHTML += `
                    <section class="receta-item">
                        <label>${ingrediente.nombre}</label> 
                        <p>${total.toFixed(2)}</p>
                    </section>                
                    `;
        });
    });
}




















