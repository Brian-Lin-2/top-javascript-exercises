const convertToCelsius = (fahrenheit) => {
  // Convert using the formula.
  let celsius = (fahrenheit - 32) * (5/9);

  // Rounds to nearest decimal.
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = (celsius) => {
  // Convert using the formula.
  let fahrenheit = celsius * (9/5) + 32;

  // Rounds to nearest decimal.
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
