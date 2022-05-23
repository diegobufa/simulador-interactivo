/*
// ----Get Element By Id ----
let div = document.getElementById("app");
let p = document.getElementById("parrafo1");

console.log(div.innerHTML); // muestra la etiqueta p y su contenido de texto, como esta escrito dentro del codifo casi.
console.log(parrafo1.innerHTML); // muestra el texto contenido dentro del parrafo
*/
//--- Get Element By Class Name ---  
/*
let paises = document.getElementsByClassName("paises");

console.log(paises[0].innerHTML); // muestra arg que es el de indice 0.
console.log(paises[1].innerHTML); // muetra br que es del indice 1.
console.log(paises[2].innerHTML); // muestra eeuu que es del indice 2 dentro de la lista.

//---- Get Element By Tag Name()----*/

// let contenedores = document.getElementsByTagName("div");

//console.log(contenedores[0].innerHTML); // muestra todo lo que esta dentro del contenedor padre, en forma de codigo.
//console.log(contenedores[1].innerHTML); // mostro lo que contiene adentro el texto con lo escrito "contenedor 2".
//console.log(contenedores[2].innerHTML); // mostro lo que contiend adentro el texto con lo escrito "contenedor 3".


// Ejemplo aplicado: Recorre HTML Collection con for... of

let paises = document.getElementsByClassName("paises");
let contenedores = document.getElementsByTagName("div");

for (const pais of paises) {
    console.log(pais.innerHTML);
}

for(const div of contenedores) {
    console.log(div.innerHTML);
}
