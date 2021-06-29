import React from 'react';
import './TaskItem.css';

class TaskItem extends React.Component {

    isCompleted() {
        if (this.props.completed) {
            return <input 
                    type="checkbox" 
                    disabled="disabled" 
                    checked="checked" 
                    className="isCompleted" 
                />
        } else {
            return <input type="checkbox" className="isCompleted" />
        }
    }
    
    render() {
        return (
            <div className="TaskItem">
                {this.isCompleted()}
                <p>{this.props.task}</p>
            </div>
        )
    }
}

export default TaskItem