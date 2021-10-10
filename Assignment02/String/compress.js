// const compress = function (str) {
//   const strMap = new Map();
//   str.split('').forEach(char => strMap.set(char, strMap.get(char) + 1 || 1));

//   const compressed = [...strMap.entries()].map(e => (e[1] === 1 ? e[0] : e[0] + e[1])).join('');
//   return compressed;
// };

const compress = str =>
  str.forEach(char => (char.match(/(.)\1+/gi) > 1 ? char[0] + char.length : char));

console.log(compress('ABBCCCE'));
