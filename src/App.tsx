import React, { useState, useCallback, useMemo } from 'react'; 
import TodoForm from './components/TodoForm'; 
import TodoList from './components/TodoList'; 
import './App.css';  

const App: React.FC = () => {  
  
  const [todos, setTodos] = useState<string[]>(() => {     
    const storedTodos = localStorage.getItem('todos');     
    return storedTodos ? JSON.parse(storedTodos) : [];   
  });    

 
  const updateLocalStorage = useCallback((updatedTodos: string[]) => {     
    localStorage.setItem('todos', JSON.stringify(updatedTodos));   
  }, []);    
  
  const addTodo = (task: string) => {     
    setTodos((prevTodos) => {       
      const updatedTodos = [...prevTodos, task];       
      updateLocalStorage(updatedTodos);       
      return updatedTodos;     
    });   
  };    

    
  const removeTodo = (index: number) => {     
    setTodos((prevTodos) => {       
      const updatedTodos = prevTodos.filter((_, i) => i !== index);       
      updateLocalStorage(updatedTodos);       
      return updatedTodos;     
    });   
  };    

  
  const memoizedTodos = useMemo(() => todos, [todos]);

  return (     
    <div className="app-container">       
      <h1>To-Do List</h1>       
      <TodoForm addTodo={addTodo} />       
      <div className="todo-list-container">         
        <TodoList todos={memoizedTodos} removeTodo={removeTodo} />       
      </div>     
    </div>   
  ); 
};

export default App;
