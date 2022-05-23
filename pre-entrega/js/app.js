class Usuario {
    constructor (name, last_name, edad, sueldo, cuota, documento, ) {
        this.name = name;
        this.last_name= last_name;
        this.edad = edad;
        this.sueldo = sueldo;
        this.cuota = cuota;
        this.documento = documento;
        this.cliente = true;
    }
    getSueldo () {
    return this.sueldo;
  }
    getEdad () {
        return this.edad;
    }
    getCliente () {
        return this.cliente;
    }
    getCuota () {
        return this.cuota;
    }
}

let arrayUsuario = [];
let comprobacion = prompt("Eres cliente de nuestro banco?");

    
if (comprobacion === "si" || comprobacion === "SI"  || comprobacion === "Si" ){
           clienteU = comprobacion;
        let nameU = prompt("Introduce tu nombre?");
        let last_nameU = prompt("Introduce tu apellido?");
        let edadU = parseInt(prompt("Cual es tu edad?"));
        let sueldoU  = parseInt(prompt("Cual es tu sueldo mensual?"));
        let cuotasU = parseInt(prompt("Que cuotas elijes tienes 6, 12 o 24 cuotas?"));
        let documentoU = parseInt(prompt("Cuales son los numeros de tu DNI?"));
        arrayUsuario.push(new Usuario(nameU, last_nameU, edadU, sueldoU, cuotasU, documentoU));
    }else if (comprobacion === "no" || comprobacion === "NO"  || comprobacion === "No") {
         console.log("No puedes acceder al prestamo");

    }else {
        console.log("No cargaste bien los datos");        
    }  



for (const edadUs of arrayUsuario){
    if (edadUs.getEdad() > 18 || edadUs.getEdad () < 65){
        console.log ("Credito otorgado");
        console.log(arrayUsuario);
    } else if (edadUs.getEdad() < 18 || edadUs.getEdad () > 65){
        console.log ("No cumples con el requisito de la edad para el credito en fin.");
    }
        
   
}




/*

var DIARIO = "diario";
var SEMANAL = "semanal";
var QUINCENAL = "quincenal";
var MENSUAL = "mensual";
var BIMESTRAL = "bimestral";
var TRIMESTRAL = "trimestral";
var CUATRIMESTRAL = "cuatrimestral";
var SEMESTRAL = "semestral";
var ANUAL = "anual";

function getTasa(tasa, tasa_tipo, periodo) {
    tasa = tasa / 12
    tasa = tasa / 100.0
    return tasa;
}

function getValorDeCuotaFija(monto, tasa, cuotas, periodo, tasa_tipo, iva) {
    tasa = getTasa(tasa, tasa_tipo, periodo);
    valor = monto *( (tasa * Math.pow(1 + tasa, cuotas)) / (Math.pow(1 + tasa, cuotas) - 1) ) ;
    return valor.toFixed(2);
}

function getAmortizacion(monto, tasa, cuotas, IVA, periodo, tasa_tipo) {
    var saldo_al_capital = monto;
    var items = new Array();
    var valor_de_cuota = getValorDeCuotaFija(monto, tasa, cuotas, periodo, tasa_tipo, IVA);

    for (i=0; i < cuotas; i++) {
        var interes = saldo_al_capital * getTasa(tasa, tasa_tipo, periodo);
      
        abono_al_capital = valor_de_cuota - interes;
      
        saldo_al_capital -= abono_al_capital;
        numero = i + 1;
        
        interes = interes.toFixed(2);
      
        iva = interes * IVA/100;
        iva = iva.toFixed(2);
      
        abono_al_capital = abono_al_capital.toFixed(2);
        saldo_al_capital = saldo_al_capital.toFixed(2);
      
        var cuota = Number(abono_al_capital) + Number(interes) + Number(iva);
        cuota = cuota.toFixed(2);
        cuota = setMoneda(cuota);
        item = [numero, abono_al_capital, interes, iva , cuota, saldo_al_capital];
      
        items.push(item);
    }
    return items;
}


function setMoneda(num) {
    num = num.toString().replace(/\$|\,/g, '');
    if (isNaN(num)) num = "0";
    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num * 100 + 0.50000000001);
    cents = num % 100;
    num = Math.floor(num / 100).toString();
    if (cents < 10) cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
        num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
    return (((sign) ? '' : '-') + '$' + num + ((cents == "00") ? '' : '.' + cents));
}





        function calcular() {
            var monto = $('.prestamo').val();
            var cuotas = $('.cuotas').val();
            var tasa = $('.tasa').val();
            var inputIva = $('.iva').val();
            var items = getAmortizacion(monto, tasa, cuotas, inputIva, 'mensual', 'anual');
            var tbody = document.getElementById("tbody_1");
            tbody.innerHTML = "<tr><td>Nº</td><td>Capital</td><td>Interes</td><td>IVA</td><td>Total</td><td>Saldo de capital</td></tr>";
  
            for (i = 0; i < items.length; i++) {
                item = items[i];
                tr = document.createElement("tr");
                for (e = 0; e < item.length; e++) {
                    value = item[e]; 
                    if (e > 0) { value = setMoneda(value); }
                    td = document.createElement("td");
                    textCell = document.createTextNode(value);
                    td.appendChild(textCell);
                    tr.appendChild(td);
                }
                tbody.appendChild(tr);
            }
            var div1 = document.getElementById("div-valor-cuota");

            valor = setMoneda(items[0][4]);
            $('#div-valor-cuota').html(valor);
            
            var msg = "";
            msg = "Usted pagará " + valor + ", mensualmente por un periodo de " + items.length + " meses";
           var div2 = document.getElementById("div-comentario");
           div2.innerHTML = msg;
        }
calcular();
*/