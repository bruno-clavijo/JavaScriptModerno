const carrito = [];

const producto = {
    nombre: "Monitor 32 pulgadas",
    precio: 400
}

const celular = {
    nombre: "Celular",
    precio: 800
}

carrito.push(producto);
carrito.push(celular);


const teclado = {
    nombre: "Teclado",
    precio: 50
}

carrito.unshift(teclado);

console.table(carrito);

// Eliminar ultimo elemento del arreglo
// carrito.pop();
// console.table(carrito);

// Eliminar del inicio del arreglo
// carrito.shift();
// console.table(carrito);

carrito.splice(1,1);
console.table(carrito);
