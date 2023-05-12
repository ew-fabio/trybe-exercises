const readline = require('readline-sync');
const handleBMIResult = require('./utils/rating');

const result = (weight, height) => {
  return (weight / (height**2)).toFixed(2);
};

const bmi = () => {
  const weight = readline.questionFloat('What’s your weight(kg)?  ');
  const height = readline.questionFloat('What’s your height(m)? ');

  const calculatedBMI = result(weight, height)
  const calculatedRating = handleBMIResult(calculatedBMI);

  return console.log(`Your BMI is ${calculatedBMI}, and your rating: ${calculatedRating}`);
}

bmi();