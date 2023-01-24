import { useState } from 'react';
import './App.css';
import { Input } from './components/input/input';
import { TodoList } from './components/list/todoList';


const App = () => { 
  const [todos, setTodos] = useState([]);
  const [todo , setTodo] = useState("");

  const addTodo = () => { 
    if(todo!== "") {  
      setTodos([... todos,todo])
      setTodo("")
    }
  };


  const deleteTodo = (text) => {  
    const newTodos = todos.filter((todo) => { 
      return todo !== text ;
    })
    setTodos(newTodos)
  }

  return (  
    <div className='App'>
      <h1>TODO</h1>
      <Input todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TodoList list={todos} remove={deleteTodo} />
    </div>
  )
}



export default App;
