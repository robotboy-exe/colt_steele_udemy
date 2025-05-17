const sumAll = function () {
  let total = 0
  for (i = 0; i < arguments.length; i++) {
    total += arguments[i]
  }
  return total;
}

function sum(...num) {
  return num.reduce((total, el) => total += el);
}
