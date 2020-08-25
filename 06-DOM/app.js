/**
 * Examinando el DOM
 */

// console.dir(document);
/*console.log(document.URL);
console.log(document.title);

document.title = 'Prueba';
console.log(document.title);

console.log(document.head);
console.log(document.body);
//A partir de aca todos devuelven un array.
//console.log(document.all);
//console.log(document.all[5]);
console.log(document.forms);
console.log(document.forms[0]);
console.log(document.images);
console.log(document.links);*/

/**
 * getElementById();
 */

console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');

headerTitle.textContent = 'Hola';
headerTitle.innerText = 'Adios';
headerTitle.innerHTML = '<h3>Prueba</h3>';

/**
 * getElementsByClassName();
 */

 var items = document.getElementsByClassName('list-group-item');
 console.log(items[0]);
 items[0].textContent = 'Prueba';
 
 /**
  * getElementsByTagName();
  */

var item = document.getElementsByTagName('li');
console.log(item);
item[2].textContent = 'Prueba 02';

/**
 * querySelector();
 */

/*
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'Hola mundo';

var submit = document.querySelector('input[type="submit"]');
submit.value = 'Enviar';

var item = document.querySelector('.list-group-item');
item.style.color = 'red';*/

/**
 * querySelectorAll();
 */

var items = document.querySelectorAll('.list-group-item');

items[3].style.color = 'red';
items[1].style.color = '#ccc';

var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Prueba';

var impar = document.querySelectorAll('li:nth-child(odd)');
var par = document.querySelectorAll('li:nth-child(even)');

for (var i = 0; i < impar.length; i++) {
    impar[i].style.backgroundColor = '#ccc';
    par[i].style.backgroundColor = '#f4f4f4';
}
    


