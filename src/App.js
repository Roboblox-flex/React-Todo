import React from "react";
import "./components/Todo.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const todos = [
  {
    task: "eat lunch",
    id: 1,
    completed: false,
  },
  {
    task: "talk to wife",
    id: 2,
    completed: false,
  },
  {
    task: "finish components",
    id: 3,
    completed: false,
  },
  {
    task: "pick up the children",
    id: 4,
    completed: false,
  },
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todos, // same as === tasks: tasks
    };
  }

  addTodo = (e, task) => {
    e.preventDefault();
    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false,
    };
    this.setState(
      {
        todos: [...this.state.todos, newTodo],
      },
      () => {
        localStorage.setItem("todos", JSON.stringify(this.state.todos));
      }
    );
  };
  toggleTodo = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (id === todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    });
  };
  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter((todo) => !todo.completed),
    });
  };

  toggleCompleted(id) {
    debugger;
    this.setState({
      ...this.state,
      todoItem: this.state.todoItem.map((todo) => {
        if (id === todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      }),
    });
  }
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
