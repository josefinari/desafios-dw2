const productos = [
    "Remera",
    "Pantalón",
    "Campera",
    "Buzo",
    "Bufanda",
    "Chaleco",
];

for (let i = 0; i < productos.length; i++) {
    console.log(`Producto ${i + 1}: ${productos[i]}`);
}

for (let i = 0; 0 < productos.length; i++) {
    productos.pop();
    console.log("Stock Actualizado");
    for (let i = 0; i < productos.length; i++) {
        console.log(`Producto ${i + 1}: ${productos[i]}`);
    }
}
