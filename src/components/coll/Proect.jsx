import React from 'react'

const Proect = (props)=>{
    return(       
        <>
        <p className="Name_organiz">{props.el.project_object.title}</p>
        <p>{props.el.milestone_object.title}</p>
     </>   
    )
}

export default Proect