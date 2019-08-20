import React from 'react';
import './TodoItem.css';

class TodoItem extends React.Component {
  constructor() {
    super();
    this.state = {}
  }
  
  render() {

    const style = {
      textDecoration: "line-through",
      color: "grey",
      fontStyle: "italic"
    };

    return (
      <div className="TodoItem">
        <input 
          type="checkbox" 
          checked={this.props.item.completed} 
          onChange={(event) => this.props.handleChange(this.props.item.id)}/>

        <p style={this.props.item.completed ? style : null}>{this.props.item.todo}</p>
      </div>
    );
  }
}

export default TodoItem;
