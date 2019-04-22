// var calculateBouns = function (performancelevel, salary) {
//   if (performancelevel === 'S') {
//     return salary * 4;
//   }
//   if (performancelevel === 'A') {
//     return salary * 3;
//   }
//   if (performancelevel === 'B') {
//     return salary * 2;
//   }
// }
// console.log(calculateBouns('B', 20000)); //40000
// console.log(calculateBouns('S', 8000)); //32000

// var performanceS = function (salary) {
//   return salary * 4;
// }
// var performanceA = function (salary) {
//   return salary * 3;
// }
// var performanceB = function (salary) {
//   return salary * 2;
// }
// var calculateBouns = function (performancelevel, salary) {
//   if (performancelevel === 'S') {
//     return performanceS(salary);
//   }
//   if (performancelevel === 'A') {
//     return performanceA(salary);
//   }
//   if (performancelevel === 'B') {
//     return performanceB(salary);
//   }
// }
// console.log(calculateBouns('S', 8000))  //32000
/*
var performanceS = function () {}
performanceS.prototype.calculate = function (salary) {
  return salary * 4;
}

var performanceA = function () {}
performanceA.prototype.calculate = function (salary) {
  return salary * 3;
}

var performanceB = function () {}
performanceB.prototype.calculate = function (salary) {
  return salary * 2;
}

// 定义奖金类
var Bonus = function () {
  this.salary = null; // 原始工资
  this.strategy = null; // 绩效等级对应的策略对象
}
Bonus.prototype.setSalary = function (salary) {
  this.salary = salary; // 设置员工的原始工资
}
Bonus.prototype.setStrategy = function (strategy) {
  this.strategy = strategy; // 设置员工绩效等级对应的策略对象
}
Bonus.prototype.getBonus = function () {
  return this.strategy.calculate(this.salary);
}

var myBonus = new Bonus();
myBonus.setSalary(10000);
myBonus.setStrategy(new performanceA());
console.log(myBonus.getBonus()); // 30000

myBonus.setStrategy(new performanceS());
console.log(myBonus.getBonus());  // 40000
*/

var setSalaries = {
  'S': function (salary) {
    return salary * 4;
  },
  'A': function (salary) {
    return salary * 3;
  },
  'B': function (salary) {
    return salary * 2;
  }
}

var calculateBouns = function (level, salary) {
  return setSalaries[level](salary);
}

console.log(calculateBouns('S', 8000)); // 32000
console.log(calculateBouns('A', 8000)); // 24000