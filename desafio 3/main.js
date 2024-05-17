let nombreProducto = "Zapatillas"
let precioUnidad = 1000
let cantidadDeseada = prompt("Indique la cantidad deseada: ")
parseInt(cantidadDeseada)
const precioTotal = precioUnidad * cantidadDeseada

if (cantidadDeseada >= 5){
    let Descuento = precioTotal * 10 / 100 
    let precioDescuento = precioTotal - Descuento
    alert (`Su total de ${cantidadDeseada} ${nombreProducto} es de $${precioDescuento}. Se aplicó un 10% de descuento `) 
}
else{
    alert(`Su total de ${cantidadDeseada} ${nombreProducto} es de $${precioTotal}`)
}
