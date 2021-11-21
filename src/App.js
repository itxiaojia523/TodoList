import React, { Component } from 'react'
import Search from './Components/Search'
import List from './Components/List'

export default class App extends Component {
  state = {
    users:[],
    isFirst:true,//是否第一次打开 请求前改为false
    isLoading:false,//点击后 请求前改为true，数据回来了不论成功false
    err:'' //请求错误信息

  }

  updateAppState = (stateObj)=>{
    this.setState(stateObj)
  }

  render() {
    return (
    <div className="container">
      <Search updateAppState={this.updateAppState}/>
      <List {...this.state}/>
    </div>
    )
  }
}

