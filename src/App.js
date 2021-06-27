import React, { PureComponent } from 'react';
// Components
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
// Css
import './css/style.css';

class App extends PureComponent {
  state = {
    todoList: [{
      id: 1,
      text: 'todo1',
      isCompleted: true
    },
    {
      id: 2,
      text: 'todo2',
      isCompleted: false
    }]
  }
  render() {

    const { todoList } = this.state
    return (
      <div className="todoapp">
        <Header />
        <TodoList todosList={todoList} />
        <Footer />
      </div>
    );
  }
}

export default App;
