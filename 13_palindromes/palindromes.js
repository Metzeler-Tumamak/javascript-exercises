const palindromes = function (text) {
  return (
    text.match(/\w/g).reverse().join("").toLowerCase() ===
    text.match(/\w/g).join("").toLowerCase()
  );
};

// Do not edit below this line
module.exports = palindromes;
