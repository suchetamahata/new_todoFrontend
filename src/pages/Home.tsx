import { useEffect, useState } from 'react';
import FormDialog from '../components/materialUiForm'

const Home =() =>{

    const [uname, setUname] = useState<string>('Your')
    const [password, setPassword] = useState<string>('')

    useEffect(() => { 
        if(localStorage.getItem('uname') !== null){
            setUname( localStorage.getItem('uname')! )
        }
    }, [uname])
    return(
        <div>
           <div className='head-text'> 
                <p className='text1'>{uname}'s ToDo List<p className='text2'>Work smarter. List your todos, update and view them.</p>
                <p className='text2'>Sign in then login to create todos.</p>
                <p className='text2'>Happy working !</p></p>
                <img src='https://i.pinimg.com/originals/92/81/bc/9281bc09993d71519d896eb5428044ba.jpg' className='himage'></img>
                <FormDialog  setUname={setUname} setPassword={setPassword} password={password} uname={uname}></FormDialog>
            </div>
        </div>
    )
}
export default Home