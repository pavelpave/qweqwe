import React from 'react'

const Proect = (props) => {
    return (
         < p > Постановщик  { props.el.owner_object.first_name } { props.el.owner_object.last_name }</p > 
    )
}

export default Proect