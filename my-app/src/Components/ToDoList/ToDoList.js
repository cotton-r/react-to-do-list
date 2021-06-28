import React from 'react';
import './ToDoList.css';

import InputField from '../InputField/InputField';

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

                </div>
            </div>
        )
    }
}

export default ToDoList;