import React, {Component} from 'react';
import './App.css';
import TodoItem from './components/TodoItem/TodoItem.js';
import todoData from './data/todoData.js';


class App extends React.Component {
constructor () {
  super();
  this.state = {
    data: todoData
  };
  this.handleChange = this.handleChange.bind(this)
}

handleChange(id) {
  this.setState((prevState) => {
    const updatedTodos = prevState.data.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })

    return {
      data: updatedTodos
    }
  });
  console.log("changed", id)
}

  render() {
    const handleCh = this.handleChange;
    const todoItems = this.state.data.map(function(item) {
      return (
        <TodoItem key={item.id} item={item} handleChange={handleCh}/>
      );
    });

    return (
      <div className="TodoList">
        {todoItems}
      </div>
    );
  }
}


export default App;
