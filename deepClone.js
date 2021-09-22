// 1. 요구사항 : 객체를 입력 받아 해당 객체를 깊인 복사하기
// 2. 주요 로직 : 전달받은 인수가 원시값이면 그대로 반환, 객체이면 객체를 깊은 복사함

const isPrimitive = function (value) {
  return value === null || typeof value !== 'object';
};

const assignArrayOrObject = function (value) {
  return Array.isArray(value) ? [] : {};
};

const deepClone = function (args) {
  let copied = args;

  if (isPrimitive(args) !== true) {
    copied = assignArrayOrObject(args);

    for (const key of Object.keys(args)) {
      copied[key] = deepClone(args[key]);
    }
  }

  return copied;
};

export default deepClone;
