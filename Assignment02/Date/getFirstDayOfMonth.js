const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

console.log(getFirstDayOfMonth(2021, 0));
