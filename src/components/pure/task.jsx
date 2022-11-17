import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'

const TaskComponent = ({ task }) => {

    useEffect(() => {
        console.log('Created task');
        return () => {
            console.log(`Task: ${task.name} is going to unmount`);
        }
    }, [task])

    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span>{task.description}</span>
            </td>
            <td className='align-middle'>
                {/* TODO: Sustituir por un badge */}
                <span>{task.level}</span>
            </td>
            <td className='align-middle'>
                {/* TODO: sustituir por iconos */}
                { task.completed ?
                    (<i className='bi-toggle-on' style={{color: 'green'}}></i>)
                    : (<i className='bi-toggle-off' style={{color: 'gray'}}></i>)
                }
                <span>{task.completed ? 'Completed' : 'Pending'}</span>
            </td>
        </tr>
        /* <div>
          <h2>Nombre: { task.name }</h2>
          <h3>Descripcion: { task.description }</h3>
          <h4>Level: { task.level }</h4>
          <h5>This task is: { task.completed ? 'COMPLETED':'PENDING'}</h5>
        </div> */
    );
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}

export default TaskComponent;
