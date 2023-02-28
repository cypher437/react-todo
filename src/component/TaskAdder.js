import React, {Component} from "react";
import {fetchAddTodo} from "../actions";
import {connect,useDispatch} from "react-redux";

class TaskAdder extends Component {
  state = {newTask:""};

  constructor(props) {
    super(props);
  }

  handleInputChange = (event) => {
    this.setState({
      newTask: event.target.value
    });
  };

  handleButtonClick = (event) => {
    this.props.fetchAddTodo(this.state.newTask);
    this.setState({
        newTask: ""
    });
  };

  render() {
    const { newTask } = this.state;
    return (
      <div>
        <input type="text" value={newTask} onChange={this.handleInputChange} />
        <button onClick={this.handleButtonClick}>Add Todo</button>
      </div>
    )
  }
};

export default connect(null, { fetchAddTodo })(TaskAdder);
