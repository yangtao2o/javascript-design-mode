let star = {
  name: '张三',
  age: 24,
  phone: '13600110011'
}

let agent = new Proxy(star, {
  get: function(target, key) {
    if (key === 'phone') {
      return '18909090101'
    }
    if (key === 'price') {
      return 12000
    }
    return target[key]
  },
  set: function(target, key, val) {
    if (key === 'customPrice') {
      if (val < 100000) {
        throw new Error('价格太低')
      } else {
        target[key] === val
        return true
      }
    }
  }
})

console.log(agent.name)
console.log(agent.age)
console.log(agent.phone)
console.log(agent.price)

agent.customPrice = 1000
console.log(agent.customPrice)