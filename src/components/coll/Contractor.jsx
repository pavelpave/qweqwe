import React from 'react'

const Proect = (props)=>{
    return(
        <p className='task_table__contractor'>Исполнитель: {props.el.contractor_object.first_name} {props.el.contractor_object.last_name}</p>
    )
}

export default Proect