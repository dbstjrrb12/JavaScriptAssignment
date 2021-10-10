const getLastDayOfMonth = (year, month) => new Date(year, month + 1, 0).getDay();

console.log(getLastDayOfMonth(2021, 11));
