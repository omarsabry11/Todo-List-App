import React, { useContext, useEffect, useState } from 'react'
import Inputs from '../Inputs/Inputs'
import TodoList from '../TodoList/TodoList'
import { InputValueContext } from '../../contexts/InputValueContext/InputValueContext'
import { UpdatingContext } from '../../contexts/UpdatingContext/UpdatingContext'



export default function Home() {


  let { inputValue, setInputValue } = useContext(InputValueContext)
  const [editIndex, setEditIndex] = useState(null);

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });


  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos));


  },[todos])




  function handleAddTodo(newTodo) {
    let newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  }

  function handleDelateTodo(index) {
    let newTodoList = todos.filter((todo, todoIndex) =>
      todoIndex != index
    )
    setTodos(newTodoList);
  }


  function handleEditTodo(index) {
    setEditIndex(index);
  }

  function handleUpdateTodo(updatedTodo) {
    let updatedTodos = todos.map((todo, index) =>
      index === editIndex ? updatedTodo : todo
    );
    setTodos(updatedTodos);
    setEditIndex(null);
  }
  function clearTodos() {

    setTodos([]);

  }




  return (
    <div className='w-full min-h-[100vh] bg-[#f7f7f7]'>
      <div className='max-sm:w-[85%] mx-auto'>
        <h1 className='text-center pt-10 text-4xl font-semibold text-[#252424]'>Todo List App</h1>

        <Inputs todos={todos} handleAddTodo={handleAddTodo} handleUpdateTodo={handleUpdateTodo} clearTodos={clearTodos}></Inputs>
        <TodoList todos={todos} handleDelateTodo={handleDelateTodo} handleEditTodo={handleEditTodo} ></TodoList>

      </div>

    </div>
  )
}


