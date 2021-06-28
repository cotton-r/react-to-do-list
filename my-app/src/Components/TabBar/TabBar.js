import React from 'react';
import './TabBar.css';

class TabBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="TabBar">
                <button className="Tab-button" id="to-do-list-button">
                    To-Do List
                </button>
                <div className="divider"></div>
                <button className="Tab-button" id="completed-button">
                    Completed
                </button>
            </div>
        )
    }
}

export default TabBar;