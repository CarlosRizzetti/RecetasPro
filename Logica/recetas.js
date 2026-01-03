import {containerRecetas,hojaImpresionContainer,btnCalcularMasa} from "../Logica/CONST.js";
import {botonElegido} from "../Logica/FUNCIONES.js";    

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











