import React from 'react';

import TaskItem from '../TaskItem/TaskItem';

class CompletedList extends React.Component {
    render() {
        return (
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
        )
    }
}

export default CompletedList;