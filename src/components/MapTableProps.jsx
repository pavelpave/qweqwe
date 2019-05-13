import React from 'react'
import FlagWork from './coll/FlagWork.jsx'
import GroupButton from './coll/GroupButton.jsx'
import OpisTask from "./coll/OpisTask.jsx"

import Proect from './coll/Proect.jsx'
import DataCr from './coll/DataCr.jsx'
import Contractor from './coll/Contractor'
import Owner from './coll/Owner.jsx'
import TimeWork from './coll/TimeWork.jsx'


const TrRenderMap = (props) => {

    return (
        <>
            <th scope="row">{props.el.id}</th>
            <td >
                <GroupButton el={props.el} state={props.state} rerenderThreeTask={props.rerenderThreeTask} />
            </td>
            <td>
                <FlagWork el={props.el} statusEl={props.el.state_verbose} />
            </td>
            <td>
                <OpisTask el={props.el} state={props.state} />
            </td>
            <td>
                <Proect el={props.el} state={props.state} />
            </td>
            <td>
                <DataCr el={props.el} state={props.state} />
            </td>
            <td>
                <Contractor el={props.el} state={props.state} />
            </td>
            <td>
                <Owner el={props.el} state={props.state} />
            </td>
            <td>
                <TimeWork el={props.el} state={props.state} />
            </td>

        </>
    )
}
export default TrRenderMap