// objetos literales

// sintaxis
/*
let nombre = "Juan";
let apellido = "Perez";
let edad = 20;20
let nacionalidad = "Arg";
//Escrito como objeto es el objeto persona con todas sus variables dentro.

let persona ={nombre:"Juan", apellido:"Perez", edad:20, nacionalidad: "Arg"}; // clave valor. la clave es el nombre que le asigne y el valor son las variables.


console.log(persona["edad"]);
document.write(persona.apellido);

persona.dni = "20202022";
document.write(persona.dni);*/

// constructores 
// function nombre () {}
/*function Persona(nombre, apellido, edad, nacionalidad) {
    this.nombre = nombre;
    this.apellido= apellido;
    this.edad = edad;
    this.nacionalidad = nacionalidad;

}

const persona1 = Persona("Juan", "Perez", 20, "Arg");
const persona2= Persona("Carla", "Gomez", 21, "Arg");

console.log(persona1.nombre)

*/

// crear la funcion constructora de celular
/*
function celular(marca, modelo, color, pulgadas ){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.pulgadas = pulgadas;
    this.llamar = function(){confirm("Estas recibiendo una llamada")};
}

let celu1 = celular("samsung", "A51", "negro", 20);
let celu2  = celular("nokia", "Q21", "negro", 17);
let celu3 = celular("iphone", "13", "negro", 22);

//document.write(cncID_1.marca);

celu1.llamar();*/



/*
function SmartTv(marca,modelo,pulgadas,precio){
    this.marca = marca;
    this.modelo = modelo;
    this.pulgadas = pulgadas;
    this.precio = precio;
}


let producto1 = new SmartTv("lg", "ht-05", 42, 35000);
let producto2 = new SmartTv("samsung", "rv-080",  32, 22000);
let producto3 = new SmartTv("phillips", "bhg-035", 65, 45000);

console.log(producto1.marca, producto1.modelo);
document.write(producto1.marca);
*/

// Metodos  los metodos  mutas lo que nosotros estamos trabajando.

//upper tower

//.nombre {}
/*
let datos = prompt("Ingresa tu nombre").toLowerCase;
console.log(datos);
//console.log(datos.toLowerCase());// minusculas
//console.log(datos.toUpperCase());//mayusculas
*/

class Producto {
    constructor(nombre,precio){
        this.nombre = nombre.toUpperCase();
        this.precio = Number(precio);
        
    }
    sumarIva(){this.precio = this.precio * 1.21 
    }
}

const prodt1 = new Producto1("arroz", "110");
for (const prods in prodt1){
    console.log()
}



/*
let precio = 20;
console.log(precio);
precio *= 1.21;
console.log(precio);
*/



