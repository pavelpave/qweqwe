import React, { Component } from 'react';
import api from '../../api/index'
import '../style/style_all.css'
const apiTodo = api.todo


class GroupButton extends Component {
    constructor(props) {
        super(props)
        this.state = props.state
        this.el = props.el
        this.clickBurg      = this.clickBurg.bind(this)
        this.StopDevelop    = this.StopDevelop.bind(this)
        this.SuccesDevelop  = this.SuccesDevelop.bind(this)
        this.ReopenDevelop  = this.ReopenDevelop.bind(this)
        this.CloseDevelop   = this.CloseDevelop.bind(this)
        this.StartDevelop   = this.StartDevelop.bind(this)

        this.rerenderThreeTask = props.rerenderThreeTask
    }
    clickBurg() {              
        let newState = { ...this.state.clikedBurger }                
        for (const key in newState) {
            if (Number(key) === this.props.el.id) {
                newState[key] = !newState[key]
            }
        }        
       this.setState({
            clikedBurger: newState
        })
    }

   async StopDevelop() {
        

     await   apiTodo.setTaskStop(this.el.id, (res) => {
            this.rerenderThreeTask()
        },(err)=>{
                      
              return this.rerenderThreeTask()
        })       
       
    }
   async SuccesDevelop() {
        
       await apiTodo.setTaskFinish(this.el.id, (res) => {           
            this.rerenderThreeTask()
        },(err)=>{
                      
              return this.rerenderThreeTask()
        })
    }
   async ReopenDevelop() {
       
       await apiTodo.setTaskReopen(this.el.id, (res) => {           
            this.rerenderThreeTask()
        },(err)=>{
                     
              return this.rerenderThreeTask()
        })
    }
   async CloseDevelop() {
        
       await apiTodo.setTaskClose(this.el.id, (res) => {
            this.rerenderThreeTask()
        },(err)=>{
                      
              return this.rerenderThreeTask()
        })
    }
   async StartDevelop() {
        
     await   apiTodo.setTaskStart(this.el.id, (res) => {
            this.rerenderThreeTask()
        },(err)=>{
                 
             return  this.rerenderThreeTask()
        })
    }
   
    render() {


        return (
            <div>
                <button className='btn-sm btn-primary' onClick={this.StartDevelop}>Взять задачу</button>

                <div className="Burger_button btn btn-secondary" data={this.props.el.id} onClick={this.clickBurg}>

                    <span></span>
                    <span></span>
                    <span></span>


                </div>
                <div className={this.state.clikedBurger[this.props.el.id] ? "clickedBurger" : 'disp_noneBlockBut'}>
                    {this.props.el.can_stop_develop ? <button onClick={this.StopDevelop} className="btn-sm btn-warning">Остановить!</button> : <></>}
                    {this.props.el.can_finish ? <button onClick={this.SuccesDevelop} className="btn-sm btn-success">Завершить!</button> : <></>}
                    {this.props.el.can_reopen ? <button onClick={this.ReopenDevelop} className="btn-sm btn-info">Переоткрыть!</button> : <></>}
                    {this.props.el.can_close ? <button onClick={this.CloseDevelop} className="btn-sm btn-danger">Закрыть!</button> : <></>}
                </div>


                <a href="/" className="btn btn-link">перейти</a>
            </div>
        )
    }
}

export default GroupButton