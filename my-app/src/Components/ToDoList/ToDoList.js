import React from 'react';
import './ToDoList.css';

import InputField from '../InputField/InputField';
import TaskItem from '../TaskItem/TaskItem';

class ToDoList extends React.Component {
    render() {
        return (
            <div>
                <div className="InputField">
                    <InputField 
                        addItem={this.props.addItem}
                    />
                </div>
                <div className="itemList">
                    {
                        this.props.tasks.map(task => {
                            return <TaskItem 
                                task={task}
                                isCompleted={false}
                            />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ToDoList;