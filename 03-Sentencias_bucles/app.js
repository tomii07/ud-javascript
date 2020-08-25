var nombre = 'Tomas';
var estadoCivil = 'soltero';

if (estadoCivil === 'casado') {
    console.log(nombre + ' está ' + estadoCivil);
} else {
    console.log(nombre + ' está ' + estadoCivil);
}

var nombre = 'Pedro';
var edad = 15;

/**
 * edad < 12 => es un niño.
 * edad > 11 y edad < 18 => es un adolescente.
 * edad > 17 y edad < 60 => es un adulto
 * edad > 60 => es un anciano
 */

if (edad < 12) {
    console.log(nombre + ' es un niño.');
} else if ((edad > 11) && (edad < 18)) {
    console.log(nombre + ' es un adolescente.');
} else if ((edad > 17) && (edad < 60)) {
    console.log(nombre + ' es un adulto.');
} else {
    console.log(nombre + ' es un anciano.');
}

/** 
 * OPERADOR TERNARIO 
 */

var nombre = 'Pedrito';
var edad = 20;

edad >= 18 ? console.log(nombre + ' es mayor de edad.') : console.log(nombre + ' no es mayor de edad.');

/**
 * SWITCH
 */

var mes = 3;

switch(mes) {
    case 1:
        console.log('Enero');
        break;
    case 2:
        console.log('Febrero');
        break;
    case 3:
        console.log('Marzo');
        break;
    case 4:
        console.log('Abril');
        break;
    case 5:
        console.log('Mayo');
        break;
    case 6:
        console.log('Junio');
        break;
    case 7:
        console.log('Julio');
        break;
    case 8:
        console.log('Agosto');
        break;
    case 9:
        console.log('Septiembre');
        break;
    case 10:
        console.log('Octubre');
        break;
    case 11:
        console.log('Noviembre');
        break;
    case 12:
        console.log('Diciembre');
        break;
    default: 
        conconsole.log('Mes inexistente (fuera del rango 1-12).');
        break;
}

/**
 * FOR
 */

for (var i = 0; i < 10; i++) {
    console.log(i);
}

/**
 * WHILE
 */

var i = 1;

while(i < 10) {
    console.log(i);
    i++;
}

/**
 * DO-WHILE
 */

var i = 1;
 do {
     console.log(i);
     i++;
 } while (i < 10);

 /**
  * VALORES
  */

// Valores falsos => undefined - null - 0 - ''
// Valores verdaderos => El resto.

var edad;

if (edad) {
    console.log('Variable está defininda.');
} else {
    console.log('Variable no está definida.');
}

/**
 * === y ==
 */

var edad = '10';

if (edad == 10) {
    console.log('Variable con coersión.');
} else {
    console.log('Variable sin coersión.');
}



