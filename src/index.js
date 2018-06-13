import React from 'react'
import ReactDom from 'react-dom'
import { 
    BrowserRouter, 
    Route, 
    Redirect,
    Switch 
} from 'react-router-dom'
import { createStore,applyMiddleware,compose} from 'redux'//applyMiddleware开启中间件thunk 支持异步 compose 建立和chrome redux插件的联系
import { Provider } from 'react-redux' 
import thunk from 'redux-thunk'//支持异步
//import { counter } from './index.redux';//合并所有的reducer 去除这一行
import reducers from './Reducer'
import Auth from './Auth'
import Dashboard from './Dashboard'
const store = createStore(reducers,compose(
  applyMiddleware(thunk),
  window.devToolsExtension?window.devToolsExtension():f=>f
  )
);
// 登陆页面
//     没有登陆信息 统一跳转到login
// 页面  导航页面+显示+注销
//     一营
//     二营
//     骑兵连
ReactDom.render(
    (<Provider store = { store }>
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Auth}></Route>
                <Route path="/dashboard" component={Dashboard}></Route>
                <Redirect to="/dashboard"></Redirect>
            </Switch>             
        </BrowserRouter>
    </Provider>) ,
  document.getElementById('root')
);