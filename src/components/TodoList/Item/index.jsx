import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
    state = {mouse:false}
    // 移入移除高亮和显示隐藏按钮
    handleMouse = (flag)=>{
      return ()=>{
        this.setState({mouse:flag})
      }
    }
    
    // 勾选和取消勾选 
    handleCheck = (id)=>{
      return (event)=>{
        this.props.updateTodo(id,event.target.checked)
      }
    }
    //只需要id 告诉app 删除ip所对应的节点 
    handleDelete = (id)=>{
      //弹窗是否确定删除 一定要加window
      if(window.confirm('确定删除吗？')){
        this.props.deleteTodo(id)
      }
    }

    render() {
        // 定义没用，会有警告，可以需要时再接受  
        const {mouse} = this.state
        const {id,name,done} = this.props

        return (
            <li style={{backgroundColor: mouse ? "#ddd" : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} >
              <label>
                {/* checked + onchange函数，用defaultchecked 可以写,但后期有bug */}
                {/* bug:用了default后 footer的全选了，但是每个item不会变 */}
                <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                <span>{name}</span>
              </label>
              <button onClick={()=>{this.handleDelete(id)}} className="btn btn-danger" style={{display: mouse? 'block' : 'none'}}>删除</button>
            </li>
        )
    }
}
