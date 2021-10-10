// function solution(new_id) {
//   var answer = '';
//   let reg = /[a-z0-9\.\_\-]/;
//   let stack = [];

//   // 1단계 소문자
//   new_id = new_id.toLowerCase();

//   // 2단계 정규식 검사
//   for (let x of new_id) {
//     if (reg.test(x)) stack.push(x);
//   }
//   // 3단계 중복되는 점 제거
//   let tmp = [];

//   for (let i = 0; i < stack.length; i++) {
//     if (i + 1 < stack.length && stack[i] === '.' && stack[i + 1] === '.') continue;
//     else tmp.push(stack[i]);
//   }

//   stack = tmp.slice(0, tmp.length);

//   // stack = stack.join('').replace(/\.+/g,".").split('');

//   // 4단계
//   if (stack[0] === '.') stack.shift();
//   if (stack[stack.length - 1] === '.') stack.pop();

//   // 5단계
//   if (stack.length === 0) stack.push('a');

//   // 6단계, 7단계
//   if (stack.length >= 16) {
//     stack = stack.splice(0, 15);

//     if (stack[0] === '.') stack.shift();
//     else if (stack[stack.length - 1] === '.') stack.pop();
//   } else if (stack.length < 3) {
//     let lastchar = stack[stack.length - 1];
//     while (stack.length < 3) {
//       stack.push(lastchar);
//     }
//   }
//   answer = stack.join('');

//   return answer;
// }

const newId = function (str) {
  const recommended = str
    .toLowerCase()
    .replace(/[^a-z0-9-_.]/g, '') // +는 한 개 이상
    .replace(/\.{2,}/g, '.') // 임의의 문자가 2개 이상 연속으로 나오는 경우
    .replace(/^\.|\.$/g, '')
    .replace(/^$/g, 'a')
    .slice(0, 15)
    .replace(/\.$/g, '')
    .replace(/^[\w._-]{0,2}$/g, function concat(v) {
      if (v.length > 2) return v;
      v += v[v.length - 1];
      return concat(v);
    });

  return recommended;
};

console.log(newId('dd'));
