import React, { Component } from 'react';
import Trtable from './Trtable.jsx'

class TableBody extends Component {
    constructor(props){
        super(props)
        this.state = props.state
        this.rerenderTree = props.rerenderTree
        this.setTaskList = props.setTaskList
    }
    render() {
        return (
           <tbody>
              <Trtable  state={this.state} setTaskList={this.setTaskList} rerenderTree={this.rerenderTree}/> 
           </tbody>
        )
    }
}

export default TableBody