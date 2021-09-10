
import { AiOutlineSave } from 'react-icons/ai'
import "react-notification-alert/dist/animate.css";

//import FormDialog from '../../components/materialUiForm';
import Form from '../../components/Form'
import TodoList from '../../components/TodoList'
import React,{useState, useEffect} from 'react'
import disp from './createTodo.module.css';

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
  fetch('http://localhost:8000/todos/create',{
      method : 'POST',
      mode:'cors',
      headers : new Headers( {
          'Content-Type':'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
      }),
      body:JSON.stringify(todoswithUUid)
  }).then((data) => {
      console.log(data)
      alert('Your Todo List is saved')
  }).catch((error) =>{
      console.error(error)
      alert('error in saving')
  })
}

  return ( 
  <>
     <h5 className='wel-text'> List all your work here </h5>
    <div className={disp.divstyle}>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} 
            setInputText={setInputText} setStatus={setStatus} ></Form>
      </div>
    <div className={disp.divstyle}>
      <TodoList todos={todos} setTodos={setTodos} filterTodos={filterTodos}></TodoList>
    </div>
     <div className={disp.divBtn}> 
       <button onClick={submitToDataBase} type='submit' className={disp.subButton} >Save 
       <AiOutlineSave/></button>
      </div>
  </>
  );
}

export default App;
