//sintaxis
/*
const persona = {
    nombre: "Juan",
    edad: 17,
    tengoHambre: true
};
//                0        1         2         3 
const nombres = ["juan", "Carlos", "pedro", "Maria", , "Pedrita"];// array de sting

// Elementos dentro del array
// contabilizan desde 0, su indice

const edades = [17, 20, 30]; // array de numeros

const datosR = ["Juan", 17, true]; // array mixto

const datos = []; // array vacio

console.log(nombres[4]);

nombres[4] = "Carla";

console.log(nombres[4]);*/
/*

const nombres = ["juan", "carlos", "pedro", "maria", , "pedrita"];

for (let i =0; i < nombres.length; i++){
    let element = nombres[i];
    console.log(element);

}
*/

// .nombre()
/*
let entrada = prompt("Ingresa una fruta ? ");

const frutas =["pera"];

for (let index = 0; index < Array.length; index++){
    console.log(frutas[index]);

}
*/

let entrada = prompt("Ingresa una fruta? ");

const frutas = [];

while (entrada != "ESC") {

    frutas.push(entrada)
    entrada = prompt("Ingresa otra fruta o la palabra 'ESC'para salir ")
   
} 
for (let index = 0; index < frutas.length; index++){
        console.log(frutas[index]);
}










