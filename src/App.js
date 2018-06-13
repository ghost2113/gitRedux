import React, { Component } from 'react';
import { connect } from 'react-redux';//connect props和state，action建立联系
import { addGUN,removeGUN,asyncGUN } from './index.redux';//动作属
// 装饰器模式
@connect(
	// 你要state什么属性放到props里
	state=>({num:state.counter}),
	// 你要什么方法，放到props里，自动dispatch
	{ addGUN,removeGUN,asyncGUN }
)
class App extends Component {
  render() {
    const addGUN = this.props.addGUN
    const removeGUN = this.props.removeGUN
    const asyncGUN = this.props.asyncGUN
    const num = this.props.num;
    return (
      <div>
        <h1 className="App">
          现在有机枪{num}把
        </h1>
        <button onClick = {addGUN}>增加武器</button>
        <button onClick = {removeGUN}>减少武器</button>
        <button onClick = {asyncGUN}>异步减少武器</button>
      </div>

    );
  }
}
export default App;
