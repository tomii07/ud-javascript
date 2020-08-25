/**
 * Tienes dos alumnos, Pablo y María.
 * Pablo tiene las siguientes notas en el curso de JavaScript: 14, 8 y 16.
 * María tiene las siguientes notas en el curso de JavaScript: 12, 18 y 10.
 * 
 * Calcular el promedio de cada alumno, además indicar quién tiene el promedio superior,
 * e indicar si el alumno está aprobado, para ello su promedio debe ser superior a 13.
 */

var promPablo = (14 + 8 + 16) / 3;
console.log('El promedio de Pablo es de ' + promPablo);
promPablo > 13 ? console.log('Pablo está aprobado.') : console.log('Pablo no está aprobado.');

var promMaria = (12 + 18 + 10) / 3;
console.log('El promedio de María es de ' + promMaria);
promMaria > 13 ? console.log('María está aprobado.') : console.log('María no está aprobado.');

promMaria > promPablo ? console.log('María tiene el promedio más alto.') : console.log('Pablo tiene el promedio más alto.');