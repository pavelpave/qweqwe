import React, { Component } from 'react';
import TableHead from './HederTable.jsx'
import TableBody from './TableBody.jsx'


class Table extends Component {
    constructor(props){
        super(props)
        this.state = props.state
        this.rerenderTree =props.rerenderTree
        this.setTaskList = props.setTaskList
    }
    render() {
    
        return (
            <table className='table table-striped'>
                <TableHead />
                <TableBody state={this.state} setTaskList={this.setTaskList} rerenderTree={this.rerenderTree}/>
            </table>
        )
    }
}

export default Table