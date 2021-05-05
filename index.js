function isNumericValue(item) {
  return !isNaN(item) && item !== ''
}

function isCorrectItem(item) {
  const operators = ['+', '-', '*', '/']

  return isNumericValue(item) || operators.includes(item)
}

function startCalculation(calculationSteps) {
  switch (calculationSteps[1]) {
    case '+':
      return Number(calculationSteps[0]) + Number(calculationSteps[2])
    case '-':
      return Number(calculationSteps[0]) - Number(calculationSteps[2])
    case '*':
      return Number(calculationSteps[0]) * Number(calculationSteps[2])
    case '/':
      return Number(calculationSteps[0]) / Number(calculationSteps[2])
    default:
      return NaN
  }
}

function calculate(input) {
  let calculationSteps = []

  input.forEach((item) => {
    if (isCorrectItem(item)) {
      calculationSteps.push(item)
    }
  })
  if (calculationSteps.length !== 3) return NaN

  return startCalculation(calculationSteps)
}

module.exports = calculate
