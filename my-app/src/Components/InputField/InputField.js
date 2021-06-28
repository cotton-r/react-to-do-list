import React from 'react';
import './InputField.css';

class InputField extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            task: ''
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.addToList = this.addToList.bind(this);
    }

    handleChange(event) {
        this.setState({ task: event.target.value});
    }

    addToList(task) {
        this.props.addItem(this.state.task);
    }

    render() {
        return (
            <div className="InputField">
                <input type="text" placeholder="enter a task..." onChange={this.handleChange} />
                <input type="submit" value="Add" onClick={this.addToList} />
            </div>
        )
    }
}

export default InputField;