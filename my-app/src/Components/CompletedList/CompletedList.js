import React from 'react';
import '../CompletedList/CompletedList.css';

import TaskItem from '../TaskItem/TaskItem';

class CompletedList extends React.Component {
    render() {
        return (
            <div style={{display: this.props.completedListVisibility}}>
                <div className="CompletedList">
                    {
                        this.props.completedTasks.map((task, index) => {
                            return <TaskItem 
                                task={task}
                                isCompleted={true}
                                key={index}
                            />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default CompletedList;