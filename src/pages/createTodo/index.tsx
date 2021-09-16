
import { AiOutlineSave } from 'react-icons/ai'

import Form from '../../components/Form'
import TodoList from '../../components/TodoList'
import React,{useState, useEffect} from 'react'
import disp from './createTodo.module.css';
import { Backend } from '../../hostURI'

import ReactNotification from 'react-notifications-component'
import { store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import 'animate.css-react'
import { Tooltip } from '@material-ui/core';


export interface TodoType{
  isCompleted?: boolean,
  inputText?: string |undefined,
  uuid?: string,
  uname?: string,
  _id?: string,
  item?: string,
  id?:string |number,
}


function App() {
  const [inputText,setInputText] = useState<string>("");
  const [todos,setTodos] = useState<TodoType[]>([]);
  const [status,setStatus] = useState<string>("");
  const [filterTodos, setFilterTodos] = useState<TodoType[]>([]);

 useEffect(()=>{
( () =>{
    switch(status){
      case "completed":
        setFilterTodos(todos.filter((todo)=> todo.isCompleted === true));
      break;
      case "uncompleted":
        setFilterTodos(todos.filter((todo)=> todo.isCompleted === false));
      break;
      default:
        setFilterTodos(todos)
      break;
    }
  }) ()
 }, [todos, status]);

 const submitToDataBase = (event:React.MouseEvent<HTMLButtonElement>)=>{
  event.preventDefault()
  const uuid = localStorage.getItem('uuid')
  const uname = localStorage.getItem('uname')
  const todoswithUUid = todos.map(todo => {
    return {
      ...todo,
      uuid,
      uname
    }
  })
  fetch(`${Backend}/todos/create`,{
      method : 'POST',
      mode:'cors',
      headers : new Headers( {
          'Content-Type':'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
      }),
      body:JSON.stringify(todoswithUUid)
  }).then((data) => {store.addNotification({
    title: " Yay! ",
    message: `Your list has been saved.`,
    type: "success",
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
     animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
        duration: 5000,
        onScreen: true
    }
  })
    console.log(data)
  }).catch((err) =>store.addNotification({
    title: "Oops!",
    message: `Your list is not saved`,
    type: 'danger',
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
     animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
        duration: 5000,
        onScreen: true
    }
  }))
}

  return ( 
  <>
     <ReactNotification />
     <h5 className='wel-text'> List all your work here </h5>
    <div className={disp.divstyle}>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} 
            setInputText={setInputText} setStatus={setStatus} ></Form>
      </div>
    <div className={disp.divstyle}>
      <TodoList todos={todos} setTodos={setTodos} filterTodos={filterTodos}></TodoList>
    </div>
     <div className={disp.divBtn}> 
     <Tooltip title='Save your whole todo list'>
        <button onClick={submitToDataBase} type='submit' className={disp.subButton} >Save <AiOutlineSave/></button>
      </Tooltip>
      </div>
  </>
  );
}

export default App;
