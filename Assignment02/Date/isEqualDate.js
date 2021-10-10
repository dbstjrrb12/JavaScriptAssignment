const isEqualDate = (day1, day2) =>
  day1.getFullYear() !== day2.getFullYear()
    ? false
    : day1.getMonth() !== day2.getMonth()
    ? false
    : day1.getDate() !== day2.getDate()
    ? false
    : true;
console.log(isEqualDate(new Date('2021/07/24'), new Date('2021/07/24')));
