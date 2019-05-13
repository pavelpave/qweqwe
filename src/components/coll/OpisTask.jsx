import React, { Component } from 'react';


class OpisTask extends Component {
    constructor(props) {
        super(props)
  
        this.cklicked = this.cklicked.bind(this)
        this.state = props.state
        this.el = props.el
    }
    cklicked(){
      return  this.setState({
            opis:!this.state.opis
        })
    }
    
    render() {

        return (
            <div className="container_opis_task" onClick={this.cklicked} >
                {/* <span title='Затраченное / Планируемое время' className='time_work'> {this.props.el.spent_hours} ч./ {this.props.el.estimate_hours} ч.</span> */}
                <span>
                <strong>{this.props.el.title}</strong>
                  <div className="contentClikedBlock">
                        {this.state.opis ? <div contentEditable='true' dangerouslySetInnerHTML={{ __html: this.props.el.content }}></div> : <></>}
                    </div>
                </span>
            </div>
        )
    }
}

export default OpisTask

//   {/* <strong>{this.props.el.title}</strong> */}

//                     {/* <p className="data_created">{this.contentdataText()}</p> */}
//                     {/* <p className='task_table__contractor'>Исполнитель: {this.props.el.contractor_object.first_name} {this.props.el.contractor_object.last_name}</p> */}
//                       
                    