import { useEffect, useState } from 'react';

import SignupForm from '../components/SignupForm'
import LoginForm from '../components/LoginForm'

const Home =() =>{

    const [uname, setUname] = useState<string>('Your')
    const [password, setPassword] = useState<string>('')

    useEffect(() => {
        if(localStorage.getItem('uname') !== null){
            setUname( localStorage.getItem('uname')! )
        }
    }, [uname])
    return(
        <> 
            <div className='head-text'>
                <p className='text1'>{uname}'s ToDo List<p className='text2'>Work smarter. List your todos, update and view them.</p>
                <p className='text2'>Sign in then login to create todos.</p>
                <p className='text2'>Happy working !</p>
                </p>
                <img src='https://wallpapercave.com/wp/wp5973544.jpg' className='himage' alt='work desk'></img>
            </div>
            <div className='lsindiv'>
                    <SignupForm  setUname={setUname} setPassword={setPassword} password={password} uname={uname}/> 
              <LoginForm  setUname={setUname} setPassword={setPassword} password={password} uname={uname}></LoginForm> 
            </div>
            <img src='https://wallpapercave.com/wp/wp5973544.jpg' className='himage2' alt='work desk'></img>
        </>
    )
}
export default Home