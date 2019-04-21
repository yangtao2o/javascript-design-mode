var name = 'globalName';
var obj = {
  name: 'tyang',
  getName: function () {
    return this.name
  }
}
var getName = obj.getName;
console.log(obj.getName()); // tyang
console.log(getName()); // globalName

function func() {
  'use strict'
  console.log(this) // undefined
}

func();

var MyClass = function () {
  this.name = 'Lisi';
  return 'wangwu'
}
var nameObj = new MyClass();
console.log(nameObj.name); // Lisi

var personObj = {
  name: 'ytao',
  age: '22'
}

function person() {
  return this.name + this.age
}
console.log(person.call(personObj))

var getId = function (id) {
  return document.getElementById(id);
}

getId('divBox');

getId2 = document.getElementById;
// getId2('divBox');  // Uncaught TypeError: Illegal invocation

document.getElementById = (function (func) {
  return function () {
    return func.apply(document, arguments);
  }
})(document.getElementById);

getId3 = document.getElementById;
getId3('divBox');

var applyFunc = function (a, b, c) {
  'use strict';
  console.log(this === null);
}
applyFunc.apply(null, [1, 2, 3]); // true

document.getElementById('divBox').onclick = function () {
  console.log(this.id); // divBox
  var func = function () {
    console.log(this.id); // divBox
  }
  func.call(this);
}

// bind
// Function.prototype.bind = function(context) {
//   var self = this;  // 保存原函数
//   return function() {  // 返回新函数
//     return self.apply(context, arguments)  // 将传入的 context 当做新函数体内的 this
//   }
// };

// var bindObj = {
//   name : 'tyang'
// };

// var bindFunc = function() {
//   console.log(this.name);  // tyang
// }.bind(bindObj);

// bindFunc();

Function.prototype.bind = function () {
  var self = this,
    context = [].shift.call(arguments), // 获取参数中第一个为绑定的this上下文
    args = [].slice.call(arguments); // 将剩余的参数转化为数组
  return function () {
    return self.apply(context, [].concat.call(args, [].slice.call(arguments)));
  }
}

var bindObj = {
  name: 'lisisi'
}

var bindFunc = function (a, b, c, d) {
  console.log(this.name); // lisisi
  console.log([a, b, c, d]); // [1, 2, 3, 1]
}.bind(bindObj, 1, 2);

bindFunc(3, 4);

var A = function (name) {
  this.name = name;
}
var B = function () {
  A.apply(this, arguments);
}
B.prototype.getName = function () {
  return this.name;
}
var bbb = new B('Yangtao');
console.log(bbb.getName()); //Yangtao

(function () {
  Array.prototype.push.call(arguments, 3);
  console.log(arguments); // [1, 2, 3]
})(1, 2);

var aObj = {};
Array.prototype.push.call(aObj, 'first');
console.log(aObj.length) // 1
console.log(aObj[0]) // first

var num = 1;
Array.prototype.push.call(num, '2');
console.log(num.length) // undefined
console.log(num[0]) // undefined


var gName = 'The window';
var gObject = {
  gName: 'My object',
  getName: function () {
    var that = this;
    return function () {
      return that.gName;
    };
  }
}

console.log(gObject.getName()()); // 'My object'