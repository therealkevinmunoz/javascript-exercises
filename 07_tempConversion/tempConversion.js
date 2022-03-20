const ftoc = function(fahrenheitTemp) {

  let celsiusTemp;

  let fullCelsiusValue = ((fahrenheitTemp - 32) * (5/9))

  celsiusTemp = Math.round(fullCelsiusValue * 10) / 10

  return celsiusTemp;

};

const ctof = function(celsiusTemp) {

  let fahrenheitTemp;

  fullFahrenheitValue = ((celsiusTemp * (9/5)) + 32);

   fahrenheitTemp = Math.round(fullFahrenheitValue * 10) / 10


  return fahrenheitTemp;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
