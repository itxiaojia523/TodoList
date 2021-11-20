import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import PropTypes from 'prop-types'
import './index.css'

export default class Header extends Component {
    // 限制接受的props的类型和必要性
    static propTypes = {
        addTodo : PropTypes.func.isRequired
    }

//输入框事件回调
    handleKeyup = (event)=>{
        // 不要用keyCode，废弃
        const {key,target} = event
        if(key !== "Enter") return
        if(target.value.trim() === ""){
            alert("输入不能为空")
            return
        } 
        const todoObj = {id:nanoid(),name:target.value,done:false};
        //把todoObj传给app（父）
        this.props.addTodo(todoObj)
        //清空输入栏
        target.value = " "
    }
    render() {
        return (
            <div className="todo-header">
              <input onKeyUp={this.handleKeyup} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        )
    }
}
