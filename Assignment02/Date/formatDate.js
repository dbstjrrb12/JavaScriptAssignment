const formatDate = date =>
  date.getFullYear() +
  '-' +
  (('' + date.getMonth()).length === 1 ? '0' + date.getMonth() : date.getMonth()) +
  '-' +
  date.getDate();

console.log(formatDate(new Date('2021/07/24')));
