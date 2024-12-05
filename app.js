// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollarToYen = function(valueInDollar){
    let conversor = ((1*oneEuroIs["JPY"])/oneEuroIs["USD"]).toFixed(2)
    let valueInYen = valueInDollar * conversor
    return valueInYen
}

const fromYenToPound = function(valueInYen){
    let conversor = ((1*oneEuroIs["GBP"])/oneEuroIs["JPY"]).toFixed(2)
    let valueInPound = valueInYen * conversor
    return valueInPound
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

console.log(fromYenToPound(1));
console.log(fromDollarToYen(1));




// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
// console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };