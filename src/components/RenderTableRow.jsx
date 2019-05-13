import React from 'react'
import TableMap from './MapTableProps'

const RenderTableRow = (props) => {
      
  return props.state.taskList.map((el, i) => {
        return (
            <tr className='row_style' key={i} data-id={i}>
                <TableMap el={el} state={props.state} rerenderThreeTask={props.state.rerenderThreeTask} />
            </tr>

        )
    })
}
export default RenderTableRow