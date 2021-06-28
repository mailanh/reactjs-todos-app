import React, { PureComponent } from 'react';
// Components
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
// Css
import './css/style.css';

class App extends PureComponent {
  state = {
    todoList: [],
    editTodoId: ''
  }

  addTodo = (todo = {}) => {
    this.setState(preState => ({
      todoList: [...preState.todoList, todo]
    }))
  }

  getTodoById = (id = '') => {
    this.setState({ editTodoId: id })
  }

  onEditTodo = (todo = {}, index = -1) => {
    if (index >= 0) {
      const { todoList: list } = this.state
      list.splice(index, 1, todo)
      this.setState({
        todoList: list,
        editTodoId: ''
      })
    }
  }

  markCompleted = (id = '') => {
    this.setState(preState => ({
      todoList: preState.todoList.map(todo => todo.id === id ? ({ ...todo, isCompleted: !todo.isCompleted }) : todo)
    }))
  }

  render() {

    const { todoList, editTodoId } = this.state
    return (
      <div className="todoapp">
        <Header addTodo={this.addTodo} />
        <TodoList
          todosList={todoList}
          getTodoById={this.getTodoById}
          editTodoId={editTodoId}
          onEditTodo={this.onEditTodo}
          markCompleted={this.markCompleted}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
