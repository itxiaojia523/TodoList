import React, { Component } from 'react'

import './index.css'

export default class Footer extends Component {

  //根据checkbox打钩情况 决定全选/全不选
  handleCheckAll = (event)=>{
    this.props.checkAllTodo(event.target.checked)
  }

  // 
  handleClearAllDone = ()=>{
    this.props.clearAllDone()
  }

    render() {
      const {todos} = this.props
      //计算已完成
      const doneCount = todos.reduce((pre,cur)=>{return pre + (cur.done ? 1 : 0)},0)
      //计算总数
      const total = todos.length
        return (
            <div className="todo-footer">
              <label>
                {/* 注意defauledchecked只做初始化，希望后面勾选改变 要用checked + onChange */}
                {/* 相等的同时，总数不能等于0，全删了，或者初始为空，不能打钩 */}
                <input type="checkbox" onChange ={this.handleCheckAll} checked={doneCount === total && total !== 0 ? true : false}/>
              </label>
              <span>
                <span>已完成{doneCount}</span> / 全部{total}
              </span>
              <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}
