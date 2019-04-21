class Shop {
  constructor(name) {
    return this[name].call({})
  }
  Steak() {
    this.time = 30
    this.price = 20
    return this
  }
}
let test = new Shop('Steak')
console.log(test)
// 使用 call 调用父构造函数，不仅能够获取父构造函数的属性，而且能返回自构造函数的属性
function Project(name, price) {
  this.name = name;
  this.price = price;
}
function Food(name, price) {
  Project.call(this, name, price);
  this.categories = 'food'
}
let myfood = new Food('noddle', 8);

// 使用call调用匿名函数
var animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Fail' }
];
for(var i = 0, l = animals.length; i < l; i++) {
  (function(i) {
    this.print = function() {
      console.log(i + ' this is ' + this.species + ', ' + this.name);
    }
    this.print();
  }).call(animals[i], i);
}
// 使用 call 调用函数并指定上下文的this
var personObj = {
  name: 'ytao',
  age: '22'
}
function person() {
  return this.name + this.age
}
console.log(person.call(personObj))
