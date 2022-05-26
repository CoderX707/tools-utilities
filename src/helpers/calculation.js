export const tempratureCalculations = (from, to, inputValue) => {
  let result, formula;
  const kelvinValue = 273.15;

  if (from === 'Celsius' && to === 'Fahrenheit') {
    result = (inputValue * 9) / 5 + 32;
    formula = `(${inputValue}°C × 9/5) + 32 = ${result}°F`;
  }

  if (from === 'Celsius' && to === 'Kelvin') {
    result = inputValue + kelvinValue;
    formula = `${inputValue}°C + 273.15 = ${result}°K`;
  }

  if (from === 'Fahrenheit' && to === 'Celsius') {
    result = ((inputValue - 32) * 5) / 9;
    formula = `(${inputValue}°F − 32) × 5/9 = ${result}°C`;
  }

  if (from === 'Fahrenheit' && to === 'Kelvin') {
    result = ((inputValue - 32) * 5) / 9 + kelvinValue;
    formula = `(${inputValue}°F − 32) × 5/9 + ${kelvinValue} = ${result}K`;
  }

  if (from === 'Kelvin' && to === 'Fahrenheit') {
    result = ((inputValue - kelvinValue) * 9) / 5 + 32;
    formula = `(${inputValue}°K − ${kelvinValue}) × 9/5 + 32 = ${result}°F`;
  }

  if (from === 'Kelvin' && to === 'Celsius') {
    result = inputValue - kelvinValue;
    formula = `(${inputValue}K - ${kelvinValue}) = ${result}°C`;
  }

  if (from === to) {
    result = inputValue;
    formula = `${from} equal ${to}`;
  }

  return { result, formula };
};

export const lengthCalculations = (from, to, inputValue) => {
  // TODO: implement all conversions 
  let result, formula;
  if (from === 'Kilometre') {
    const { calculation, formulaStr } = convertKilometer(from, to, inputValue);
    result = calculation;
    formula = formulaStr;
  }

  if (from === 'Meter') {
    const { calculation, formulaStr } = convertMeter(from, to, inputValue);
    result = calculation;
    formula = formulaStr;
  }

  if (from === to) {
    result = inputValue;
    formula = `${from} equal ${to}`;
  }

  return { result, formula };
};

const convertKilometer = (from, to, inputValue) => {
  let calculation, formulaStr;
  if (from === 'Kilometre' && to === 'Meter') {
    calculation = inputValue * 1000;
    formulaStr = `Length (${inputValue} * 1000) = ${calculation}`;
  }

  if (from === 'Kilometre' && to === 'Centimeter') {
    calculation = inputValue * 100000;
    formulaStr = `Length (${inputValue} * 100,000) = ${calculation}`;
  }

  if (from === 'Kilometre' && to === 'Millimetre') {
    calculation = inputValue * 1000000;
    formulaStr = `Length (${inputValue} * 1,000,000) = ${calculation}`;
  }

  if (from === 'Kilometre' && to === 'micrometres') {
    calculation = inputValue * 1000000000;
    formulaStr = `Length (${inputValue} * 1,000,000,000) = ${calculation}`;
  }

  if (from === 'Kilometre' && to === 'Nanometre') {
    calculation = inputValue * 1000000000000;
    formulaStr = `Length (${inputValue} * 1,000,000,000,000) = ${calculation}`;
  }

  if (from === 'Kilometre' && to === 'Mile') {
    calculation = inputValue * 0.621371;
    formulaStr = `Length (${inputValue} * 0.621371) = ${calculation}`;
  }

  if (from === 'Kilometre' && to === 'Yard') {
    calculation = inputValue * 1093.61;
    formulaStr = `Length (${inputValue} * 1093.61) = ${calculation}`;
  }

  if (from === 'Kilometre' && to === 'Foot') {
    calculation = inputValue * 3280.839895;
    formulaStr = `Length (${inputValue} * 3,280.839895) = ${calculation}`;
  }

  if (from === 'Kilometre' && to === 'Inch') {
    calculation = inputValue * 39370.1;
    formulaStr = `Length (${inputValue} * 39370.1) = ${calculation}`;
  }

  if (from === 'Kilometre' && to === 'Nautical mile') {
    calculation = inputValue / 1.852;
    formulaStr = `Length (${inputValue} / 1.852) = ${calculation}`;
  }
  return { calculation, formulaStr };
};

const convertMeter = (from, to, inputValue) => {
  let calculation, formulaStr;
  if (from === 'Meter' && to === 'Kilometre') {
    calculation = inputValue / 1000;
    formulaStr = `Length (${inputValue} / 1000) = ${calculation}`;
  }

  if (from === 'Meter' && to === 'Centimeter') {
    calculation = inputValue * 100;
    formulaStr = `Length (${inputValue} * 100) = ${calculation}`;
  }

  if (from === 'Meter' && to === 'Millimetre') {
    calculation = inputValue * 1000;
    formulaStr = `Length (${inputValue} * 1000) = ${calculation}`;
  }

  if (from === 'Meter' && to === 'micrometres') {
    calculation = inputValue * 1000000;
    formulaStr = `Length (${inputValue} * 1,000,000) = ${calculation}`;
  }

  if (from === 'Meter' && to === 'Nanometre') {
    calculation = inputValue * 1000000000;
    formulaStr = `Length (${inputValue} * 1,000,000,000) = ${calculation}`;
  }

  if (from === 'Meter' && to === 'Mile') {
    calculation = inputValue / 1609.344;
    formulaStr = `Length (${inputValue} * 1,609.344) = ${calculation}`;
  }

  if (from === 'Meter' && to === 'Yard') {
    calculation = inputValue * 1.09361;
    formulaStr = `Length (${inputValue} * 1.09361) = ${calculation}`;
  }

  if (from === 'Meter' && to === 'Foot') {
    calculation = inputValue * 3.28084;
    formulaStr = `Length (${inputValue} * 3.28084) = ${calculation}`;
  }

  if (from === 'Meter' && to === 'Inch') {
    calculation = inputValue * 39.3701;
    formulaStr = `Length (${inputValue} * 39.3701) = ${calculation}`;
  }

  if (from === 'Meter' && to === 'Nautical mile') {
    calculation = inputValue / 1852;
    formulaStr = `Length (${inputValue} / 1852) = ${calculation}`;
  }
  return { calculation, formulaStr };
};
