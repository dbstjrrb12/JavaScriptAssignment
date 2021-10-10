const count = function (str, target) {
  // return (
  //   str.length -
  //   str
  //     .split('')
  //     .filter(char => char !== target)
  //     .join('').length
  // );

  return str.match(new RegExp(target)).length;
};

console.log(count('COMPUTERPROGRAMMING', 'R'));
