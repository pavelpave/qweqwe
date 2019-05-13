import React, { Component } from 'react';
import api from '../api/index'
import Spiner from './Spiner.jsx'
import RenderTableRow from './RenderTableRow'
const apiTodo = api.todo


class Trtable extends Component {
    constructor(props) {
        super(props)
        this.updata = false
        this.state = props.state
        this.rerenderThreeTask = this.rerenderThreeTask.bind(this)
    }
    rerenderThreeTask() {

        apiTodo.getTasks({}, (respons) => {

            this.setState({
                taskList: respons.data.results
            })

            let massTaskID = []

            for (let key in this.state.taskList) {

                massTaskID[this.state.taskList[key].id] = false
            }
            this.setState({
                clikedBurger: massTaskID
            })
        })
    }
    componentDidMount() {
        apiTodo.getTasks({}, (res) => {
            let massTaskLIst = []
            res.data.results.map(el => {
                if (this.state[this.state.nameFilter].id === el[this.state.nameFilter].id) {
                    massTaskLIst.push(el)
                }
            })
            this.setState({
                taskList: massTaskLIst
            })

            let massTaskID = {}
            for (const key in this.state.taskList) {

                massTaskID[this.state.taskList[key].id] = false
            }
            this.setState({
                clikedBurger: { ...massTaskID },
                rerenderThreeTask: this.rerenderThreeTask
            })
        }, (err) => {
            this.setState({
                isLoadError: true
            })
        })
    }

    render() {
        if (this.state.isLoadError) {
            return (<tr>
                        <td>
                            Проблеммы с соединением или с сервером ,
                            попробуйте перезагрузить страницу или проверьте соединение с сетью!
                        </td>                      
                     </tr>)
        }
        if (!this.state.clikedBurger) {
            return <Spiner />
        }
        return <RenderTableRow state={this.state} />
    }
}

export default Trtable