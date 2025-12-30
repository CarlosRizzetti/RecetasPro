import { hojaImpresionContainer } from "./CONST";
document.addEventListener("DOMContentLoaded", () => {

    const params = new URLSearchParams(window.location.search);
    const sector = params.get("sector");
    console.log(hojaImpresionContainer);
    hojaImpresionContainer.innerHTML = `<h1>Receta de ${sector}</h1>`;
});