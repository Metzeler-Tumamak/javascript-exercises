const repeatString = function (text, count) {
  if (count < 0) return "ERROR";
  let repeatedText = "";

  for (let i = 0; i < count; i++) {
    repeatedText += text;
  }

  return repeatedText.trim();
};

// Do not edit below this line
module.exports = repeatString;
