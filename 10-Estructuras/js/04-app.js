//Operador Mayor que y menor que

const dinero = 300;
const totalAPagar = 500;
const tarjeta = true;

if (dinero >= totalAPagar) {
    console.log('si podemos pagar');
} else if (tarjeta) {
    console.log('si puedo pagar porque tengo la tarjeta');
} else {
    console.log('Fondos Insuficientes');
}