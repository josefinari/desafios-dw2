function calcularTotal (precioUnitario, cantidadDeseada) {
    let totalGastado = precioUnitario * cantidadDeseada
    return totalGastado
}

let cantidad = prompt("Indique la cantidad deseada del producto:")
let precio = 12
let compraTotal = calcularTotal(cantidad, precio)
console.log (compraTotal)