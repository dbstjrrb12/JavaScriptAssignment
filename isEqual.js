const isPrimitive = function (value) {
  return value === null || typeof value !== 'object';
};

const isArrayOrObject = function (obj) {
  return (
    !isPrimitive(obj) &&
    (obj.constructor === Array || obj.constructor === Object)
  );
};

const isSameTypeObject = function (firstObj, secondObj) {
  return firstObj.constructor === secondObj.constructor;
};

const isSameLength = function (firstObj, secondObj) {
  return Object.keys(firstObj).length === Object.keys(secondObj).length;
};

const isEmpty = function (obj) {
  return Object.keys(obj).length === 0;
};

const isEqual = function (firstArgument, secondArgument) {
  if (arguments.length < 2)
    throw new Error(
      `isEqual requires at least 2 argument, but only ${arguments.length} were passed`
    );

  let isequal = firstArgument === secondArgument;

  if (
    isPrimitive(firstArgument) === true &&
    isPrimitive(secondArgument) === true
  ) {
    isequal = Object.is(firstArgument, secondArgument);
  }

  if (
    isArrayOrObject(firstArgument) === true &&
    isArrayOrObject(secondArgument) === true
  ) {
    if (
      isSameLength(firstArgument, secondArgument) &&
      isSameTypeObject(firstArgument, secondArgument)
    ) {
      for (const key of Object.keys(firstArgument)) {
        isequal = isEqual(firstArgument[key], secondArgument[key]);
      }
      if (isEmpty(firstArgument) && isEmpty(secondArgument)) isequal = true;
    }
  }

  return isequal;
};

export default isEqual;
