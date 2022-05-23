totalIngresos = 0;
totalGastos = 0;


function sumarIngresos() {
    for (let i = 0; i < misIngresos.length; i++) {
        totalIngresos = totalIngresos + misIngresos[i].monto
    }
    return totalIngresos;
}

function sumarGastos() {
    for (let i = 0; i < misGastos.length; i++) {
        totalGastos = totalGastos + misGastos[i].monto
    }
    return totalGastos;
}



class Dinero {
    constructor(concepto, monto) {
        this.concepto = concepto.toUpperCase();
        this.monto = parseInt(monto);
    }
    getGasto () {
        return this.monto;

    }
}


const misIngresos = [];
const misGastos = [];

for (let i = 1; i < 11; i++) {
    alert("Describa el ingreso n° " + i)
    let conceptoIngreso = prompt("Concepto del ingreso. Si desea salir sin colocar más nada, escriba " + "ESC");
    conceptoIngreso = conceptoIngreso.toUpperCase();
    
    if (conceptoIngreso != "ESC") {
        let montoIngreso = prompt("Monto del ingreso:");
        
        while (isNaN(montoIngreso) == true || parseInt(montoIngreso) < 0) {
            alert("ERROR. Sólo carácteres numéricos mayores a 0 válidos.");
            montoIngreso = prompt("Coloque nuevamente el monto del ingreso:");
            if (isNaN(montoIngreso) == false && (parseInt(montoIngreso) > 0)) {
                break;
            }
        }
        misIngresos.push(new Dinero(conceptoIngreso, montoIngreso)); 
    }
    else {
        break;
    }
}

for (let i = 1; i < 11; i++) {
    alert("Describa el gasto n° " + i)
    let conceptoGasto = prompt("Concepto del gasto. Si desea salir sin colocar más nada, escriba " + "ESC");
    conceptoGasto = conceptoGasto.toUpperCase();
    
    if (conceptoGasto != "ESC") {
        let montoGasto = prompt("Monto del gasto:");
        
        while (isNaN(montoGasto) == true || parseInt(montoGasto) < 0) {
            alert("ERROR. Sólo carácteres numéricos mayores a 0 válidos.");
            montoGasto = prompt("Coloque nuevamente el monto del gasto:");
            if (isNaN(montoGasto) == false && (parseInt(montoGasto) > 0)) {
                break;
            }
        }
        misGastos.push(new Dinero(conceptoGasto, montoGasto)); //cargo al array de gastos, el que cumplió el ciclo de validación con éxito
    }
    else {
        break;
    }
}

sumarIngresos();
sumarGastos();

let saldo = totalIngresos - totalGastos;

for (let )
document.write("<h3> Estos son los resultados </h3>");
let mostrarResultado = document.createElement("div");
mostrarResultado.innerHTML = `
                              <p> Tienes un total de ingresos por la cantidad de: ${totalIngresos} </p>
                              <p> Tus gastos de este mes, suman: ${totalGastos} </p>
                              <p> El resultado de tu saldo es de: ${saldo} </p>`;
   
                
                
/*

alert(
    "Tienes un total de ingresos por la cantidad de: $" + totalIngresos +"\n"+
    "Tus gastos de este mes, suman: $" +totalGastos +"\n"+
    "Por lo tanto, tu saldo es de: $" + saldo);
*/






