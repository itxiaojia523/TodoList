import React,{Component} from 'react'
import Header from './components/TodoList/Header'
import List from './components/TodoList/List'
import Footer from './components/TodoList/Footer'
import './App.css';

export default class App extends Component{
  //初始化
  state = {todos:[
    {id:'001',name:'吃饭',done:true},
    {id:'002',name:'睡觉',done:true},
    {id:'003',name:'代码',done:false}
  ]}
  
  //追加一个待办事项，新todo放在最上方
  addTodo = (todoObj)=>{
    const {todos} = this.state
    const newTodos = [todoObj,...todos]
    //更新
    this.setState({todos:newTodos})
  }

  //更新勾选
  updateTodo = (id,done)=>{
    const {todos} = this.state
    //1.匹配数据 2.匹配上了更改done
    const newTodos = todos.map((todoObj) =>{
      if(todoObj.id === id) return {...todoObj,done:done}
      // 对象中 done:done 简写为done
      else return todoObj
    })
    this.setState({todos:newTodos})
  }
  
  deleteTodo = (id)=>{
    const {todos} = this.state
    //删除指定id的todo
    const newTodos = todos.filter((todoObj) =>{
      return todoObj.id !== id
    })
    this.setState({todos:newTodos})
  }  

  // 勾选全选按钮
  checkAllTodo = (done)=>{
    const {todos} = this.state
    const newTodos = todos.map((todoObj) =>{
      return {...todoObj,done:done}
    })
    this.setState({todos:newTodos})
  }

  //清楚所有已完成 
  clearAllDone = ()=>{
    const {todos} = this.state
    const newTodos = todos.filter((todoObj) =>{
      // return todoObj.done === false
      return !todoObj.done
    })
    this.setState({todos:newTodos})
  }


  render(){
    const {todos} = this.state
    return(
      <div>
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo={this.addTodo}/>
            <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
            <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
          </div>
        </div>
      </div>
    )
  }
}

