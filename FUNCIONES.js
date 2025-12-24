export function irARecetas(sector) {
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
}