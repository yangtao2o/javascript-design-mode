function loadImg(src) {
  let promise = new Promise(function(resolve, reject) {
    let img = document.createElement('img')
    img.onload = function() {
      resolve(img)
    }
    img.onerror = function() {
      reject('图片加载失败')
    }
    img.src = src
  })
  return promise
}

let src = 'http://img3.mukewang.com/5aee742a0001a53903790379-140-140.jpg'
let result = loadImg(src)

result.then(function(img) {
  // part1
  alert(`width: ${img.width}`)
  return img
}).then(function(img) {
  // part2
  alert(`height: ${img.height}`)
}).catch(function(ex) {
  alert(ex)
})

