/**
 * ES7 装饰器实践
 */

// React中的装饰器：HOC (Higher Order Component) 即高阶组件
// 高阶组件就是一个函数，且该函数接受一个组件作为参数，并返回一个新的组件

const BorderHoc = WrappedComponent =>
  class extends Component {
    render() {
      return (
        <div style={{ border: 'solid 1px red' }}>
          <WrappedComponent />
        </div>
      )
    }
  }

// 用BorderHoc装饰目标组件
@BorderHoc
class TargetComponent extends React.Component {
  render() {
    // 目标组件具体的业务逻辑
  }
}

// export出去的其实是一个被包裹后的组件
// export default TargetComponent

/**
 * 使用装饰器改写 Redux connect
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import action from './action.js'

class App extends Component {
  render() {
    // App的业务逻辑
  }
}

function mapStateToProps(state) {
  // 假设App的状态对应状态树上的app节点
  return state.app
}

function mapDispatchToProps(dispatch) {
  // 这段看不懂也没关系，下面会有解释。重点理解connect的调用即可
  return bindActionCreators(action, dispatch)
}

// 把App组件与Redux绑在一起
export default connect(mapStateToProps, mapDispatchToProps)(App)


// 把 connect 抽出来：

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import action from './action.js'

function mapStateToProps(state) {
  return state.app
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(action, dispatch)
}

// 将connect调用后的结果作为一个装饰器导出
export default connect(mapStateToProps, mapDispatchToProps)


// 在组件文件里引入connect：

import React, { Component } from 'react'
import connect from './connect.js'   

@connect
export default class App extends Component {
  render() {
    // App的业务逻辑
  }
}