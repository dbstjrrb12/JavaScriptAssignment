const diffDays = (prev, next) => parseInt(Math.abs(prev.getTime() - next.getTime()) / 86400000); // 1 day = 86400000ms

console.log(diffDays(new Date('2021/01/01'), new Date('2021/12/31')));
