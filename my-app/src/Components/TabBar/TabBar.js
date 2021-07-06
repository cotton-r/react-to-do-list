import React from 'react';
import './TabBar.css';

class TabBar extends React.Component {

    render() {
        return (
            <div className="TabBar">
                <button 
                    className="Tab-button" 
                    id="to-do-list-button" 
                    onClick={this.props.toggleToDoList}
                >
                    To-Do List
                </button>
                <div className="divider"></div>
                <button 
                    className="Tab-button" 
                    id="completed-button" 
                    onClick={this.props.toggleCompletedList}
                >
                    Completed
                </button>
            </div>
        )
    }
}

export default TabBar;