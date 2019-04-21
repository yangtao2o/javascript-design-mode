// 单例模式

var Singleton = function (name) {
  this.name = name;
  this.instance = null;
}

Singleton.prototype.getName = function () {
  console.log(this.name);
}

Singleton.getInstance = function (name) {
  if (!this.instance) {
    this.instance = new Singleton(name);
  }
  return this.instance;
}

var a = Singleton.getInstance('Tony1');
var b = Singleton.getInstance('Tony2');

console.log(a === b); // true

// 透明的单例模式

var CreateDiv = (function () {
  var instance;

  var CreateDiv = function (html) {
    if (instance) {
      return instance;
    }
    this.html = html;
    this.init();
    return instance = this;
  };

  CreateDiv.prototype.init = function () {
    var div = document.createElement('div');
    div.innerHTML = this.html;
    document.body.appendChild(div);
  };

  return CreateDiv;

})();

var aa = new CreateDiv('Sisi1');
var bb = new CreateDiv('Sisi2');

console.log(aa === bb); // true

// 代理实现单例模式
// var CreateDiv = function (html) {
//   this.html = html;
//   this.init();
// };

// CreateDiv.prototype.init = function () {
//   var div = document.createElement('div');
//   div.innerHTML = this.html;
//   document.body.appendChild(div);
// }

// var ProxySingletonCreateDiv = (function () {
//   var instance;
//   return function (html) {
//     if (!instance) {
//       instance = new CreateDiv(html);
//     }
//     return instance;
//   }
// })();

// var aaa = new ProxySingletonCreateDiv('Tony1');
// var bbb = new ProxySingletonCreateDiv('Tony2');

// console.log(aaa === bbb); // true

// JavaScript 中的单例模式

// 命名空间

// 对象字面量的方式
var namespace1 = {
  a: function () {
    console.log(1);
  },
  b: function () {
    console.log(2);
  }
}
namespace1.a(); //1

// 动态的创建命名空间
var MyApp = {};

MyApp.namespace = function (name) {
  var parts = name.split('.');
  var current = MyApp;
  for (var i in parts) {
    if (!current[parts[i]]) {
      current[parts[i]] = {};
    }
    current = current[parts[i]];
  }
}

MyApp.namespace('event');
MyApp.namespace('dom.style');

console.log(MyApp);

// 相当于：
// var MyApp = {
//   event: {},
//   dom: {
//     style: {}
//   }
// }

var user = (function () {
  var _name = 'Seven';
  var _age = 27;

  return {
    getUserInfo: function () {
      return _name + '-' + _age;
    }
  }
})();

console.log(user.getUserInfo()) // Seven-27

// QQ login

// var createLoginLayer = function () {
//   var div = document.createElement('div');
//   div.innerHTML = '我是一个小小的悬浮框';
//   div.style.display = 'none';
//   document.body.appendChild(div);
//   return div;
// };

// document.getElementById('loginBtn').addEventListener('click', function () {
//   var loginLayer = createLoginLayer();
//   loginLayer.style.display = 'block';
// });

// var createLoginLayer = (function () {
//   var div;
//   return function () {
//     if (!div) { // 判断是否已创建
//       div = document.createElement('div');
//       div.innerHTML = '我是一个小小的悬浮框';
//       div.style.display = 'none';
//       document.body.appendChild(div);
//     }
//     return div;
//   }
// })();

// document.getElementById('loginBtn').addEventListener('click', function () {
//   var loginLayer = createLoginLayer();
//   loginLayer.style.display = 'block';
// });

var getSingle = function (fn) {
  var result;
  return function () {
    return result || (result = fn.apply(this, arguments));
  }
}

var createLoginLayer = function () {
  var div = document.createElement('div');
  div.innerHTML = '我是一个小小的悬浮框';
  div.style.display = 'none';
  document.body.appendChild(div);
  return div;
}

var createSingleLoginLayer = getSingle(createLoginLayer);

document.getElementById('loginBtn').addEventListener('click', function () {
  var loginLayer = createSingleLoginLayer();
  loginLayer.style.display = 'block';
});

var createIframe = function () {
  var iframe = document.createElement('iframe');
  iframe.src = 'https://baidu.com';
  document.body.appendChild(iframe);
  return iframe;
}

var createSingleIframe = getSingle(createIframe);

document.getElementById('loginBtn2').addEventListener('click', function () {
  createSingleIframe();
});