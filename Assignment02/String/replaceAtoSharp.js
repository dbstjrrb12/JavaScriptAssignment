const replaceAtoSharp = function (str) {
  return str.replace(/A/g, '#');

  // return str.replaceAll('A', '#');
};

console.log(replaceAtoSharp('BANANA'));
