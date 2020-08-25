/**
 * Arreglos
 */

var nombres = ['Tomás','Pancho','Mishi','Jebus'];
var frutas = new Array('Banana','Manzana','Mandarina');

console.log(nombres);
console.log(frutas);

console.log(nombres[0]);
console.log(frutas[2]);

nombres[1] = 'Liliana';
console.log(nombres[1]);

frutas[0] = 'Kiwi';
console.log(frutas[0]);

console.log(nombres);
console.log(frutas);

console.log(nombres.length);
console.log(frutas.length);

/**
 * Operaciones con arreglos
 */

for (var i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// Esta es la que mas se utiliza para recorrer un array
frutas.forEach(function(elemento, indice, array) {
    console.log(elemento, indice);
});

// Agregar al final
frutas.push('Pera');
console.log(frutas);

// Agregar al principio
frutas.unshift('Fresas');
console.log(frutas);

// Quitar al final
frutas.pop();
console.log(frutas);

// Quitar al principio
frutas.shift();
console.log(frutas);

// Devolver el indice de un elemento
var pos = frutas.indexOf('Manzana');
console.log(pos);

// Eliminar un elemento
frutas.splice(1, 1);
console.log(frutas);

/**
 * Array de varios tipos de datos
 */

 var persona = ['Tomás', 20, '1556514394', 1.66];
 console.log(persona);

/**
 * Objetos literales
 */

var persona = {
    nombre: 'Tomás',
    apellido: 'Gerardi',
    gustos: ['Cine','Deporte','Comida'],
    trabajo: 'Sin trabajo xd',
    esCasado: false
};

console.log(persona);
console.log(persona.nombre);
console.log(persona['trabajo']);

persona.gustos.push('Musica');
console.log(persona);  

/**
 * Objetos OBJECT
 */

var nuevaPersona = new Object();
nuevaPersona.nombre = 'Panchito';
nuevaPersona.apellido = 'Gerardi';
nuevaPersona['trabajo'] = 'Desocupado';

console.log(nuevaPersona);

/**
 * Objetos y métodos
 */

var persona = {
    // Propiedades
    nombre: 'Tomás',
    apellido: 'Gerardi',
    gustos: ['Cine','Deporte','Comida'],
    trabajo: 'Sin trabajo xd',
    esCasado: false,
    nacimiento: 2000,

    // Métodos
    calcularEdad: function(nacimiento) {
        this.edad =  2020 - this.nacimiento;
    }
};

console.log(persona);

persona.calcularEdad();
console.log(persona);