var tipoM = 0;
var cantP = 0;
var nombreNuevaM;
var precioNuevaM = 0;
var texto = "El costo total es: $";

function calcs(){
cantP = parseFloat(document.getElementById("cantPesos").value);
console.log(cantP);
}

function valueSelect(){
tipoM = parseFloat(document.getElementById("tipoMoneda").value);
console.log(tipoM);
}

function calculoMoneda(){
    if(tipoM == 0 || cantP == 0){
        alert("Por favor, revise los datos ingresados para cotizacion de moneda");
    }
    else{
        var calculoTotal = parseFloat(tipoM * cantP);
        console.log(calculoTotal);
        resultadoTotal.innerHTML = texto + calculoTotal;
    }
}

function nombreNueva(){
nombreNuevaM = document.getElementById("nombreNuevaMoneda").value;
console.log(nombreNuevaM);
}

function precioNueva(){
precioNuevaM = parseFloat(document.getElementById("precioNuevaMoneda").value);
console.log(precioNuevaM);
}

function agregarMoneda(){
    if(nombreNuevaM == "" || precioNuevaM == 0){
        alert("Por favor, revise los datos ingresados para nueva moneda");
    }
    else{
        tipoMoneda.options.add(new Option(nombreNuevaM, parseFloat(precioNuevaM)));
    }
}