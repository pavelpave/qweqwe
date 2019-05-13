import React from 'react'

const Proect = (props)=>{
    return(
        <span title='Затраченное / Планируемое время' className='badge badge-warning text-wrap '> {`${props.el.spent_hours}`}ч. <br /> Из : {`${props.el.estimate_hours}`}ч.</span>
    )
}

export default Proect