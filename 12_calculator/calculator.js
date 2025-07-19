const add = function(num1, num2) {
  return (num1+num2)
};

const subtract = function(num1, num2) {
	return (num1-num2)
};

const sum = function(numArr) {
	return numArr.reduce((accumulator, currentValue)=> accumulator+currentValue ,0)
};

const multiply = function(numArr) {
  return numArr.reduce((accumulator, currentValue)=> accumulator*currentValue ,1)
};

const power = function(base, exponent) {
  return Math.pow(base,exponent)
};

const factorial = function(num) {
  if (num === 0) return 1
  else {
    let fact = 1
    for (let i=1; i<=num; i++) {
      fact *= i
    }
    return fact
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
