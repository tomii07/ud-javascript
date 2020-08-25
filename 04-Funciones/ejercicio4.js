/**
 * Implementar una función que nos permita evaluar el porcentaje de respuestas positivas y negativas
 * de un examen.
 * La función debe recibir el nombre, y la cantidad de respuestas positivas y negativas.
 * 
 * La función debe calcular el porcentaje que representa cada tipo de respuesta, en una base de 100 preguntas.
 * 
 * De las respuestas positivas se define el score de la persona en:
 * A(>90%) - B(70%-89%) - C(45%-69%) - D(<45%)
 */
var nombre = 'Tomás';
var respuestas = 60;
var score = function(nom, respuestas) {
    var porcentaje = (respuestas / 100) * 100;
    if (porcentaje >= 90) {
        return 'A';
    } else if ((porcentaje >= 70) && (porcentaje <= 89)) {
        return 'B';
    } else if ((porcentaje >= 45) && (porcentaje <= 69)) {
        return 'C'; 
    } else {
        return 'D';
    }
}   

console.log(`La nota de ${nombre} es una ${score(nombre, respuestas)}`);