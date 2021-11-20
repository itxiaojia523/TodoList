import React,{Component} from 'react'
import welcome from './index.module.css'

export default class Welcom extends Component{
    render(){
        return <h2 className={welcome.demo}>Welcome!</h2>
    }
}