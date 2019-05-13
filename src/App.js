import React, { Component } from 'react';
import Table from './components/Table'
// import api from './api/index'

// const apiTodo = api.todo
class App extends Component {
  constructor(props){
    super()
    this.state = props.state
  }
 
  render() {
    return (
      <Table state={this.props.state}/>
    )
  }
}

export default App;
