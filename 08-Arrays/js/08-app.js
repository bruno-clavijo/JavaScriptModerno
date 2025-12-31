const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
};

// Destructuring
const { nombre, precio, disponible, noExiste} = producto;
console.log(nombre);

const numeros = [10,20,30,40,50];

const [ , , ...tercero ] = numeros;


console.log(tercero);