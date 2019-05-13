import React from 'react'
import moment from 'moment'


const Proect = (props) => {
    
    function contentdataText() {
    return (
        moment(props.el.created_at).format('MMMM Do YYYY, h:mm:ss')
    )
}
    return (
        <p className="data_created">{contentdataText()}</p>
    )
}

export default Proect