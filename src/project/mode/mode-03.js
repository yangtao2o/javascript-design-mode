/**
 * 原型模式
 */

// 原型编程范式的核心思想就是利用实例来描述对象，用实例作为定义对象和继承的基础。
// 在 JavaScript 中，原型编程范式的体现就是基于原型链的继承。

class Dog {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  eat() {
    console.log('肉骨头真好吃')
  }
}

// 等价于

// 创建一个Dog构造函数
function Dog(name, age) {
  this.name = name
  this.age = age
}
Dog.prototype.eat = function () {
  console.log('肉骨头真好吃')
}

// 使用Dog构造函数创建dog实例
const dog = new Dog('旺财', 3)

// isPrototypeOf() 与 instanceof 运算符不同。
// "object instanceof AFunction"中，object 的原型链是针对 AFunction.prototype 进行检查的，而不是针对 AFunction 本身。

dog instanceof Object // true
Dog.prototype.isPrototypeOf(dog) // true

/**
 * 深拷贝
 */

function deepClone(obj) {
  // 如果是 值类型 或 null，则直接return
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  // 定义结果对象
  let copy = {}

  // 如果对象是数组，则定义结果数组
  if (obj.constructor === Array) {
    copy = []
  }

  // 遍历对象的key
  for (let key in obj) {
    // 如果key是对象的自有属性
    if (obj.hasOwnProperty(key)) {
      // 递归调用深拷贝方法
      copy[key] = deepClone(obj[key])
    }
  }

  return copy
}

// JSON.stringify 存在一些局限性，
// 比如无法处理 function、无法处理正则等等
