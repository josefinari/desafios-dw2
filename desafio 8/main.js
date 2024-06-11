const productos = ['Lapiceras', 'Hojas', 'Lapices', 'Cartuchera', 'Mochila']

for (const producto of productos){
    const h2 = document.createElement('h2');
    h2.innerHTML = producto
    document.body.appendChild(h2);
    
}