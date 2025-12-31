const carrito = [];

const producto = {
    nombre: "Monitor 32 pulgadas",
    precio: 400
}

const celular = {
    nombre: "Celular",
    precio: 800
}

const teclado = {
    nombre: "Teclado",
    precio: 50
}

let resultado;

resultado = [...carrito, producto ];
resultado = [...resultado, celular ];
resultado = [teclado, ...resultado ]

console.table(resultado);