// Variables

let nombre = 'Gabriel';
let edad = 27;
let esMayorDeEdad = true;

console.log ( nombre, edad, esMayorDeEdad);

edad = 30; //Asi se cambia una variable, se coloca solo el nombre

//Constantes 
const hola = 'hola';

//hola = 'chao'; //Una constante no puede ser cambiada

//Suma de strings
const sumaDeStrings = `Hola soy ${nombre}, tengo ${edad} anos de edad`;

// operacion de numeros
const sumaDeNumeros = 10 + 20.25;

//Primitivos
const num1 = '42';
const num2 = 10;
const num1ANumero = Number(num1);

//Objetos

const user = {
    name: 'Gabriel',
    age: 27,
    esMayorDeEdad: true
};

const mostrarObjeto = `Hola soy ${user.name}, tengo ${user.age} anos de edad`;

//Funciones
const numero1 = 5;
const numero2 = 8;

function suma (x, y) {
    return x + y;
}

const total = suma (numero1, numero2);

const sumaNueva = (x,y) => x + y;

const totalNuevo = sumaNueva(numero1, numero2);

const user1 = {
    name: 'Gabriel',
    age: 27,
    esMayorDeEdad: true
    welcomeMsg: () => {
        console.log(`Hola soy ${user1.name}, tengo ${user1.age} anos de edad`);
    }
};

user1.welcomeMsg ();