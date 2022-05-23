// dos tipos de ciclos -> ciclo por conteo // ciclo por condicion

// ciclo por conteo -> estructura de for

// mdn una guia de javascript buscar en google mdn es una pagina web para palabras reservadas




/*for (let index = 0; index < Array.length; index++){
    const element = array[index];
}
*/

//for ([expresion-inicial];[condicion];[expesion-final])sentencia
/*
for (let i = 5; i >= 1; i--){
    console.log("Hola repeti " + i);
}
*/
// sentencia break // continue
/*
for (let i = 1; i <= 10; i++){

    if(i <= 5 ){
       // break;
        continue;

    }
    

    console.log("Hola repeti " + i);
}
*/
/*
for ( let i = 0; i <= 20 ; i++){

    
    for (let rep = 0; rep < i ; rep++){
        document.write(i);

    }
    document.write("<br>");
}
*/

let numrep = prompt("introduce el numero de");
 
// lo condicionamos como un num

if (Number(numrep) ==numrep){
    // condicion del 1 al 20

    if(numrep > 0 && numrep <=20){
        // hacemos el bucle para la piramide

        for(let i =0; i <= numrep; i++){
            for(let rep =0; rep <= i; rep++) {
                document.write(rep);

            }
            document.write("<br>");
        }
        
    } else if{
        alert("el numero introducido no cumple con la condicion");
    } else{
        alert("No introdujiste un numero, solo ingresa valores numericos);
    }
}

