import React from 'react';
import './TaskItem.css';

class TaskItem extends React.Component {

    isCompleted() {
        if (this.props.isCompleted) {
            return <input 
                    type="checkbox" 
                    disabled="disabled" 
                    checked="checked" 
                    className="isCompleted" 
                />
        } else {
            return <input 
                    type="checkbox" 
                    className="isCompleted" 
                    checked=""
                    onChange={this.props.onComplete}
                />
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