import { recetas } from "./CUADRADITOS.js";
import {budines} from "./BUDINES.js";
import {masa} from "./MASA.js";
import {containerRecetas, listaRecetas,hojaImpresionContainer,btnCalcularMasa} from "./CONST.js";
import {botonElegido} from "./FUNCIONES.js";

    
console.log(hojaImpresionContainer)
console.log(btnCalcularMasa);
export class Receta {
    constructor() {}
    render() {
        const url = window.location
        const params = window.location.search
        const allparams = new URLSearchParams(params)
        const sector = allparams.get("sector")
        if (sector === "Pasteleria") {
            containerRecetas.innerHTML += `
            <button id="recetas-container_Cuadraditos">Cuadraditos</button>
            <button id="recetas-container_Budines">Budines</button>
            <button id="recetas-container_Masa">Masa</button>
            <button id="recetas-container_Masa de chocolate">Masa de chocolate</button>
            `;
        }
            const btn = document.querySelectorAll("button");           
            btn.forEach(boton => {
                botonElegido(boton);
            })        
    }
}
/* btnCalcularMasa.addEventListener("click", () => {
       
}); */











/* const categorias = document.getElementById("categorias");
categorias.addEventListener("change", function() {
     seleccionDeCategoria = categorias.value;
    console.log("Categoría seleccionada:", seleccionDeCategoria);
    if (seleccionDeCategoria === "Pasteleria") {
        masaDeCudraditos.innerHTML=`
        <label for="masa">Masa para cuadraditos</label>
        <input type="checkbox" id="masa">`;
        containerRecetas.innerHTML = "";
        recetas.forEach(receta => { 
            containerRecetas.innerHTML += `<option>${receta.mercaderia}</option>`;
             
        });
    }
    
}); */