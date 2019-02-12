// 父类
class People {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  eat() {
    alert(`${this.name} eat something`)
  }
  speak() {
    alert(`My name is ${this.name}, age ${this.age}`)
  }
}

// 子类继承父类
class Student extends People {
  constructor(name, age, number) {
    super(name, age)
    this.number = number
  }
  study() {
    alert(`${this.name} study`)
  }
}
let xiaoming = new Student('xiaoming', 20, 110)
xiaoming.study()
xiaoming.eat()