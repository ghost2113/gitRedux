import React from 'react'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from './Auth.redux'
import  axios  from 'axios'

// 两个reducers 每个reducers都有一个state
// 合并reducers
@connect(
    state=>state.auth,
    {login}
)
export default class Auth extends React.Component{
    componentDidMount(){
        console.log(1111)
        axios.get('./data').then((res)=>{
            console.log(res);
        }).catch((error)=>{
            console.log(error);
        })
    }
    render(){
        return (
            <div>
               { this.props.isAuth? <Redirect to='/dashboard'></Redirect> : null}
                <h2>你需要登录后才有权限查看内容</h2>
                <button onClick={this.props.login}>去登陆</button>
            </div>
        )
    }
};
