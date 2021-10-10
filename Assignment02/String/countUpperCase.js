const countUpperCase = function (str) {
  return str.replace(/[a-z]/g, '').length;

  // return str.match(/[A-Z]/g).length;
};

console.log(countUpperCase('KoreaTimeGood'));
