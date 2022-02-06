import './App.css';
import Header from './Componenet/Header';
import ToDos from './Componenet/ToDos';
import Footer from './Componenet/Footer';
import React, { useEffect, useState } from 'react';
import AddTodo from './Componenet/AddTodo';
import { cleanup } from '@testing-library/react';


function App() {
  let initTodo;
  
  if (localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo)=>{
    console.log("I am onDelete", todo);
    
    setToDos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc)=>{
    console.log("I am adding this todo", title, desc )
    let sno;
    if(todos.length==0){
      sno = 0;
    }
    else{
      sno = todos[todos.length-1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setToDos([...todos,myTodo]);
    console.log(myTodo);
  }

  const [todos, setToDos] = useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
    
  }, [todos])
  return (
    <>
      <Header title="My Todos Project" searchBar={true} />
      <AddTodo addTodo={addTodo}/>
      <ToDos todos={todos} onDelete={onDelete}/>
      <Footer />
    </>
  )
}

export default App;
