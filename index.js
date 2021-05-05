function isNumericValue(item) {
  return !isNaN(item) && item !== ''
}

function isCorrectItem(item) {
  const operators = ['+', '-', '*', '/']

  return isNumericValue(item) || operators.includes(item)
}

function calculate(input) {
  let calculationSteps = []

  input.forEach((item) => {
    if (isCorrectItem(item)) {
      calculationSteps.push(item)
    }
  })
}

module.exports = calculate
