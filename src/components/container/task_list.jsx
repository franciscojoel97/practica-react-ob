import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import Taskform from '../pure/forms/taskForm';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

    const defaultTask1 = new Task('Example 1', 'For example 1', false, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example 2', 'For example 2', true, LEVELS.BLOCKING);
    const defaultTask3 = new Task('Example 3', 'For example 3', false, LEVELS.URGENT);

    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    //Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified');
        setLoading(false);
        return() => {
            console.log('TaskList component is going to unmount');
        }
    }, [tasks])

    const changeCompleted = (id) => {
        console.log('TODO: Cambiar estado de una tarea');
    }

    function completeTask(task) {
        console.log('Complete this task: ', task)
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h4>Your Task: </h4>
                    </div>
                    {/* Card content */}
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'}}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                { tasks.map((task, index) => {
                                    return (
                                        <TaskComponent key={index} task={task} complete={complete={completeTask}}></TaskComponent>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <Taskform></Taskform>
                </div>
            </div>
        </div>
    )
}

export default TaskListComponent;
