import React, {useState, useRef, useEffect} from 'react';
import TodoList from './TodoList';

const LOCAL_STORAGE_KEY = 'todoApps.todos'

function App() {
  const [todos, setTodos] = useState([{id: 1, name: 'Todo 1', complete: true}])
  const todoNameRef = useRef();

  function fake_axios_post(){
    console.log('axios post');
  }

  ///Guardar valores en la pagina cuando refrescas useEffect
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)

    // axios post
    fake_axios_post()
    
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  ///Hace que pueda canviar el ojeto seleccionado
  function toggleTodo(id){
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  ///Añade lo que pones por pantalla
  function handleAddTodo(e) {
    const name = todoNameRef.current.value 
    if (name == '') return 
    setTodos(prevTodos => {
      return [...prevTodos, {id: 1, name: name, complete: false}]
    })
    todoNameRef.current.value = null 
  }

  function handleClearTodos(){
    const newTodos = todos.filter (todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <>
      <h1> Beat Me </h1>
      < TodoList todos = {todos} toogleTodo= {toggleTodo}/>                
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}> Add Todo </button>
      <button onClick={handleClearTodos}> Clear Complete </button>
      <div>{todos.filter(todo => !todo.complete).length}</div>
    </>
  )

}

export default App;
