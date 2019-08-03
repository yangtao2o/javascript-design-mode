var func = function () {
  var a = 1;
  return function () {
    a++;
    console.log(a);
  }
}
var f = func(); // f 返回一个匿名函数的引用
f(); //2
f(); //3
f(); //4

var myfunc = function () {
  var a = 1;
  a++;
  console.log(a);
}

myfunc(); // 2
myfunc(); // 2
myfunc(); // 2

// var items = document.getElementsByTagName('li');
// for (var i = 0, len = items.length; i < len; i++) {
//   (function (i) {
//     items[i].onclick = function () {
//       console.log(i);
//     }
//   })(i);
// }

var Type = {};

for (var i = 0, type; type = ['String', 'Array', 'Number'][i++];) {
  (function (type) {
    Type['is' + type] = function (obj) {
      return Object.prototype.toString.call(obj) === '[object ' + type + ']';
    }
  })(type);
}

console.log(Type.isString('sss')); // true
console.log(Type.isNumber(123)); //true