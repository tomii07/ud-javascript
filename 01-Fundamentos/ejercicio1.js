// Ejercicio de Codificación
// Datos:

var pesoLuis = 72;
var alturaLuis = 1.72;

var pesoCarlos = 89;
var alturaCarlos = 1.75;

/**
 * Utilizar la siguiente fórmula para calcular el IMC (Índice de masa corporal) de Luis y de Carlos,
 * IMC es igual al peso dividido entre la altura al cuadrado, luego comparar e indicar si el IMC de Carlos
 * es superior al de Luis
 */

 // Solución:

 var imcLuis = pesoLuis / alturaLuis ** 2;
 var imcCarlos = pesoCarlos / alturaCarlos ** 2;

 var compararImc = imcCarlos > imcLuis;

 console.log('El IMC de Luis es de: ' + imcLuis);
 console.log('El IMC de Carlos es de: ' + imcCarlos);

 console.log('¿El IMC de Carlos es superior al de Luis? ' + compararImc);



