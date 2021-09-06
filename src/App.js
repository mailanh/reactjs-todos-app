import React, { PureComponent } from 'react';
// Components
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
// Css
import './css/style.css';

const isNotCheckAll = (todos = []) => todos.find(s => !s.isCompleted);
const filterByStatus = (todos = [], status = "") => {
  switch (status) {
    case "ACTIVE":
      return todos.filter(s => !s.isCompleted)
    case "COMPLETED":
      return todos.filter(s => s.isCompleted)
    default:
      return todos;
  }
}
class App extends PureComponent {
  state = {
    todoList: [],
    editTodoId: '',
    isCheckAll: false,
    status: 'ALL',
  }

  addTodo = (todo = {}) => {
    const { todoList } = this.state;
    let isExistedWork = todoList.some(s => s.text == todo.text);
    if (isExistedWork) {
      alert("The to-do already exists");
      return;
    }
    this.setState(preState => ({
      todoList: [...preState.todoList, todo],
      isCheckAll: false,
      status: 'ALL',
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
    const { todoList } = this.state;
    const updatedTodo = todoList.map(todo => todo.id === id ? ({ ...todo, isCompleted: !todo.isCompleted }) : todo)
    this.setState({
      todoList: updatedTodo,
      isCheckAll: !isNotCheckAll(updatedTodo)
    })
  }

  checkAllTodos = () => {
    const { todoList, isCheckAll } = this.state;
    const updatedTodo = todoList.map(todo => ({ ...todo, isCompleted: !isCheckAll }))

    this.setState({
      todoList: updatedTodo,
      isCheckAll: !isCheckAll
    })
  }

  filterTodoList = (status = '') => {
    this.setState({ status: status })
  }

  clearCompleteTodoList = () => {
    const { todoList } = this.state
    this.setState({ todoList: filterByStatus(todoList, 'ACTIVE') })
  }

  removeTodoList = (id = '') => {
    const { todoList } = this.state
    this.setState({ 
      todoList: todoList.filter(s => s.id !== id)
    })
  }

  render() {

    const { todoList, editTodoId, isCheckAll, status } = this.state
    return (
      <div className="todoapp">
        <Header addTodo={this.addTodo} />
        <TodoList
          todosList={filterByStatus(todoList, status)}
          getTodoById={this.getTodoById}
          editTodoId={editTodoId}
          onEditTodo={this.onEditTodo}
          markCompleted={this.markCompleted}
          isCheckAll={isCheckAll}
          checkAllTodos={this.checkAllTodos}
          removeTodoList={this.removeTodoList}
        />
        <Footer
          filterTodoList={this.filterTodoList}
          status={status}
          clearCompleteTodoList={this.clearCompleteTodoList}
          numOfTodos={todoList.length}
          numOfTodosLeft={filterByStatus(todoList, 'ACTIVE').length}
        />
      </div>
    );
  }
}

export default App;
