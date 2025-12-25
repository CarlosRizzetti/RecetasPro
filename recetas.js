import { irARecetas, mostrarRecetas } from "./FUNCIONES.js";
export class Receta {
    constructor() { }


    render() {
        const url = window.location
        const params = window.location.search
        const allparams = new URLSearchParams(params)
        const sector = allparams.get("sector")
        const containerRecetas = document.querySelector("#recetas-container")

        console.log(sector, allparams, url);


        if (sector === "Pasteleria") {
            containerRecetas.innerHTML += `
            <button id="recetas-container_Cuadraditos">Cuadraditos</button>
            <button id="recetas-container_Budines">Budines</button>
            <button id="recetas-container_Masa">Masa</button>
            <button id="recetas-container_Masa de chocolate">Masa de chocolate</button>
            `;
            const btn = document.querySelectorAll("button");
            console.log(btn);
            btn.forEach(boton => {
                boton.addEventListener("click", () => {
                    mostrarRecetas(boton.textContent)
                })
            })
        }
    }


}










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