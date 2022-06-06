const add = function(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
	
};

const subtract = function(firstNumber, secondNumber) {
	return firstNumber - secondNumber;
};

const sum = function(numArray) {
	return numArray.reduce((sum, number) => sum + number, 0);
};

const multiply = function(numArray) {
  return numArray.reduce((result, newNumber) => newNumber === 0 ? 0: result * newNumber, 1);
};

const power = function(firstNumber, secondNumber) {
	
  let result = firstNumber; 

  for(let i = 1; i < secondNumber; i ++)
  {
    result *= firstNumber;
  }

  return result;
};

const factorial = function(number) {
	let result = 1;
  
  if(number === 0)
  {
    return result;
  }
  else
  {
    for(let i=1; i <= number; i++)
    {
      result *= i;
    }

    return result;
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
