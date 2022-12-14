"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

BinarySearchTree.prototype.size = function (){
  if(this.right === null && this.left === null){
  return 1;
  }
  if(this.right === null && this.left !== null){
    return 1 + this.left.size();
    }
  if(this.right !== null && this.left === null){
      return 1 + this.right.size();
      }
  if(this.right !== null && this.left !== null){
        return 1 + this.right.size() + this.left.size();
        }    
     }
  
BinarySearchTree.prototype.insert = function (value){
  if(this.value < value){
    if(this.right !== null){
      this.right.insert(value);
    } else {
      this.right = new BinarySearchTree(value);
    }
  } 

  if (this.value > value){
    if (this.left !== null) {
      this.left.insert(value);
    } else {
      this.left = new BinarySearchTree(value);
    }
  }
}
  

BinarySearchTree.prototype.contains = function (nodo){
  if(this.value === nodo){
    return true;
  }
  else if (this.value < nodo){
    if(this.right === null){
      return false;
      }
    else return this.right.contains(nodo);
  }
  else if(this.value > nodo){
    if(this.left === null){
      return false;
    }
    else return this.left.contains(nodo);
  }
  else return false;
};
BinarySearchTree.prototype.depthFirstForEach = function (cb,arg){
  if(arg === 'pre-order'){
    cb(this.value);
    if(this.left !== null) this.left.depthFirstForEach(cb,arg);
    if(this.right !== null)  this.right.depthFirstForEach(cb,arg);
  }
  else if (arg === 'post-order'){
    if(this.left !== null)  this.left.depthFirstForEach(cb,arg)
    if(this.right !== null) this.right.depthFirstForEach(cb,arg)
    cb(this.value);
  }
  else{
    if(this.left !== null) this.left.depthFirstForEach(cb,arg)
    cb(this.value);
    if(this.right !== null) this.right.depthFirstForEach(cb,arg)

  }
}
BinarySearchTree.prototype.breadthFirstForEach = function (cb, hh = []){
  if(this.left !== null){
    hh.push(this.left);
  }
  if(this.right !== null){
    hh.push(this.right);
  }
  cb(this.value);
  
  if (hh.length > 0){
    hh.shift().breadthFirstForEach(cb,hh);
  }
};


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
