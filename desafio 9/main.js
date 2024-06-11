const boton = document.createElement('button')
boton.id = 'btnCarrito';
boton.innerHTML = 'Agregar al Carrito';
document.body.appendChild(boton);

let carrito = document.getElementById("btnCarrito");
carrito.addEventListener("click", function() {
    const texto = document.createElement('h3')
    texto.innerHTML = 'Producto agregado al carrito!'
    document.body.appendChild(texto);

})
