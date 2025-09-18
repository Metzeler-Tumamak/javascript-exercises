const sumAll = function (a, b) {
  if (
    !Array.from(arguments).every((elem) => Number.isInteger(elem) && elem >= 0)
  )
    return "ERROR";
  const min = a < b ? a : b;
  const max = a > b ? a : b;
  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
