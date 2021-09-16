import { useEffect, useState } from 'react';


import SignupForm from '../components/SignupForm'
import LoginForm from '../components/LoginForm'
import About from '../components/About';
import Logout from '../components/Logout';


const Home = () => {

    const [uname, setUname] = useState<string>('Your')
    const [password, setPassword] = useState<string>('')
    const [modal, setModal] = useState<boolean>(false)
    const [loginsignup, setLS] = useState<boolean>(true)
    const [signup, setS] = useState<boolean>(true)
    const [logout, setLO] = useState<boolean>(false)

    useEffect(() => {
        if (localStorage.getItem('uname') !== null) {
            setUname(localStorage.getItem('uname')!)
        }
    }, [uname])
    return (
        <>
            <div className='head-text'>
                <p className='text1'>{uname}'s ToDo List<p className='text2'>Work smarter. List your todos, update and view them.</p>
                    <p className='text2'>Sign in then login to create todos.</p>
                    <p className='text2'>Happy working !</p>
                </p>
                <img src='https://wallpapercave.com/wp/wp5973544.jpg' className='himage' alt='work desk'></img>
                <button className='about-btn' onClick={() => setModal(true)}>About</button>
                {modal && <About setModal={setModal} />}
            </div>
            <div className='lsindiv'>
               {loginsignup && signup && <SignupForm setUname={setUname} setPassword={setPassword} password={password} uname={uname} setS={setS}/>}
               {loginsignup && <LoginForm setUname={setUname} setPassword={setPassword} password={password} uname={uname} setLS={setLS} setLO={setLO}></LoginForm>}
               {logout && <Logout setLS={setLS} setLO={setLO} setS={setS}></Logout>}
            </div>
            <img src='https://wallpapercave.com/wp/wp5973544.jpg' className='himage2' alt='work desk'></img>
        </>
    )
}
export default Home