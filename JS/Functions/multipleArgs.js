function isSnakeEyes(die1, die2) {
  if (die1 === 1 && die2 === 1) {
    console.log('Snake Eyes');
  } else {
    console.log('Not Snake Eyes');
  }
}

isSnakeEyes(1,1) //Snake Eyes!
isSnakeEyes(1,5) //Not Snake Eyes!
isSnakeEyes(4,5) //Not Snake Eyes!


// RETURN VALUE EXERCISE
function multiply(x, y) {
  if (typeof x === 'number' && typeof y === 'number' && !Number.isNaN(x) && !Number.isNaN(y)) {
    console.log(x * y);
    return x * y;
  }
  console.log('Use Numbers instead');
}

multiply(2, 3);
multiply(2, 45);
multiply('b', 2);