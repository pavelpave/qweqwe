import React, { Component } from 'react';


class FlagWork extends Component {
    constructor(props) {
        super(props)
        this.el = props.el
        this.ClassNameDiv = this.ClassNameDiv.bind(this)
    }
    ClassNameDiv(){
        if(this.props.statusEl === "Выполняется"){
            return 'badge badge-warning'
        }else if(this.props.statusEl === "Открыта"){
            return 'badge badge-primary'
        }else if(this.props.statusEl === "На проверке"){
            return 'badge badge-info'
        }
    }
    render() {      
        return (
            <div >
                <p className={this.ClassNameDiv()}>{ this.props.statusEl}</p>                
            </div>
        )
    }
}

export default FlagWork