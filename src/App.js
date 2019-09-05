import React, { Component } from 'react';
import './App.css';
import { getPortPromise } from 'portfinder';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      todos : ["walk dog", "throw rocks", "conquer the world"]
    }
  }

  render() {
    return (
      <div className="App">

        <Header />

        <ToDoContainer
          todos={this.state.todos}  />

        <SubmitBtn />

      </div>
    );
  }
}

const addNewToDoHandler = () => {
  alert('new todo added')
}

const deleteItemHandler = () => {
  alert('item is deleted')
}

const Header = () => {
  return <h1>To Do List</h1>
}

// to do container
const ToDoContainer = (props) => {
  return (
    <div>
    <h5>when i grow up i will have todos</h5>
      {
        props.todos.map((todo) => (
          <ToDoItem
            key={todo}
            todoText={todo} />
        ))
      }
    </div>
  )
}

// singular to do
const ToDoItem = (props) => {
  return (
    <div>
      <span>{props.todoText}</span>
      <button onClick={deleteItemHandler}>x</button>
    </div>
  )
}

const SubmitBtn = () => {
  return (
    <div>
      <input type="text" placeholder="new todo" />
      <br />
      <button onClick={addNewToDoHandler}>Add New To Do</button>
    </div>
  )
}


export default App;
