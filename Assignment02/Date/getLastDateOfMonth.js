const getLastDateOfMonth = (year, month) => new Date(year, month + 1, 0).getDate();

console.log(getLastDateOfMonth(2021, 0));
