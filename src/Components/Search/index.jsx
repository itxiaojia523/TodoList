import axios from 'axios'
import React, { Component } from 'react'

export default class Search extends Component {
    search = ()=>{
        // 连续结构赋值，拿到value，keyWordElement没有定义
        //value : keyword 是重命名
        const {keyWordElement:{value : keyword}} = this
        this.props.updateAppState({isFirst:false,isLoading:true}) //发送请求前， 
        // http://localhost:3000 可以略
        axios.get(`/api1/search/users?q=${keyword}`).then(
            (response)=>{
                this.props.updateAppState({isLoading:false,users:response.data.items})
            },
            (error)=>{ this.props.updateAppState({isLoading:false,err:error})}
            )        
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                <input ref={(currentNode)=>{this.keyWordElement = currentNode}} type="text" placeholder="enter the name you search"/>&nbsp;
                <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
