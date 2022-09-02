'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

if (array.length <= 1){
  return array; }
else{
  let hh = Math.floor(Math.random() * (array.length-1));
  let arrayRight= [];
  let equal = [];
  equal.push(array[hh]);
  let arrayLeft = [];
  
  for(let i = 0; i < array.length; i++){
    if(hh === i){
      continue;
    }
    else if(array[hh] > array[i]){
      arrayLeft.push(array[i]);
    }
    else { arrayRight.push(array[i]);}
  }   
  return quickSort(arrayLeft).concat(equal).concat(quickSort(arrayRight));
}
}


function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

if (array.length === 1) {
  return array;
}
let dividir = division(array);
let left = dividir[0];
let right = dividir[1];


return union(mergeSort(left),mergeSort(right));
}
function division(array){
  let hh = Math.floor(array.length/2);
  let arrayLeft = array.slice(0, hh);
  let arrayRight = array.slice(hh);
   
  return [arrayLeft, arrayRight];
}

function union(arrayLeft,arrayRight){
  let concat = [];
  let indiceLeft = 0;
  let indiceRight = 0;

  while(indiceLeft < arrayLeft.length && indiceRight < arrayRight.length){
    if(arrayLeft[indiceLeft] < arrayRight[indiceRight]){
     concat.push(arrayLeft[indiceLeft]);
     indiceLeft++
    }
    else {
      concat.push(arrayRight[indiceRight]);
      indiceRight++;
    }
  }
  return concat.concat(arrayLeft.slice(indiceLeft)).concat(arrayRight.slice(indiceRight));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
