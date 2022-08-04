'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var hh = num.split("");
  var decimal = 0;
  for (var i = 0; i < hh.length; i++) {
      decimal += hh[i] * Math.pow (2, (hh.length - 1 - i));
    }
  return decimal;
}

function DecimalABinario(num) {
  // tu codigo a
var hh = [];
while (num > 1) {
  hh.push(num % 2)
  num = Math.floor(num / 2)
}
hh.push(num)
return hh.reverse().join("");
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}