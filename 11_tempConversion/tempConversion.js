const convertToCelsius = function(tempInFahrenheit) {
  return Math.round((Number((tempInFahrenheit-32)*5/9)*10))/10
};

const convertToFahrenheit = function(tempInCelsius) {
  return Math.round((Number(tempInCelsius*(9/5)+32)*10))/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
