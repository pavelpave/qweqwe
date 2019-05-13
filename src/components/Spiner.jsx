import React, { Component } from 'react';


class Spiner extends Component {
    constructor(props) {
        super(props)
        this.state = props.state
    }
    render() {
        return (
            
            <tr>
                <td>
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                </td>
            </tr>
        )
    }
}

export default Spiner