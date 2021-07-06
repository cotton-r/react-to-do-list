import React from 'react';
import './ToDoList.css';

import InputField from '../InputField/InputField';
import TaskItem from '../TaskItem/TaskItem';

class ToDoList extends React.Component {
    render() {
        return (
            <div style={{display: this.props.toDoListVisibility}}>
                <div className="InputField">
                    <InputField 
                        addItem={this.props.addItem}
                    />
                </div>
                <div className="itemList">
                    {
                        this.props.tasks.map((task, index) => {
                            return <TaskItem 
                                task={task}
                                isCompleted={false}
                                key={index}
                                onComplete={() => this.props.onComplete(index)}
                            />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ToDoList;