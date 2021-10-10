const isPalindrome = function (str) {
  const copied = str.toLowerCase().replace(/[^a-zA-z0-9]/gi, ''); // [] 안에 있는 표현은 or 조건

  return copied === [...copied].reverse().join('');
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
