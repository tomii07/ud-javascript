/**
 * Calcular cuantos años le falta a una persona para que se jubile.
 * Una persona se jubila a los 65 años de edad.
 * Enviar como datos a la función su año de nacimiento y su nombre.
 */

function edadActual(nacimiento) {
    return 2020 - nacimiento;
}

function jubilacion(nombre, edad) {
    edad = 65 - edad;
    edad > 0 ? console.log('A ' + nombre + ' le faltan ' + edad + ' años para jubilarse.') : console.log(nombre + ' ya está jubilado.'); 
}

var nombre = 'Pedro';
var nacimiento = 1814;

var edad = edadActual(nacimiento);
console.log('La edad de ' + nombre + ' es de ' + edad);

jubilacion(nombre, edad);