function bienvenido() {
    return 'Hola, bienvenido a la sección de Funciones en JavaScript.';
}

var mensaje = bienvenido();
console.log(mensaje);

function cuadradoNumero (num) {
    return num * num;
}

var numero = 3;
console.log(cuadradoNumero(numero));
console.log(cuadradoNumero(5));

/**
 * Ejemplo: De Fahrenheit a Celsius.
 * 32°F = 0°C.
 * °C = (°F - 32) * 5/9
 */

function conversionFahrenheitACelsius(gradosF) {
    return (gradosF - 32) * (5/9);
}

var tempF = 43;
console.log(conversionFahrenheitACelsius(tempF));

/**
 * Funciones como expresiones.
 */

// Undefined:
var nombre;
var prueba = function(n) {
    return 'Hola ' + n;
}

console.log(prueba(nombre));
console.log(prueba());
nombre = 'Tomás';
console.log(prueba(nombre));

// Null:
var a = null;
var valorNulo = function(a) {
    return a;
}

console.log(valorNulo(a));

// Argumentos por default:
var sumar = function(a = 5, b = 3, c = 3) {
    return a + b + c;
}

console.log(sumar(10, 4));
console.log(sumar(10, 4, 7));
console.log(sumar(10, null, 7));
console.log(sumar());

/**
 * Plantillas de textos/cadenas (template String).
 */

var nombre = 'Tomás';
console.log(`El nombre es ${nombre}`);

var a = 4;
var b = 3;
console.log(`La suma es ${a + b}`);

