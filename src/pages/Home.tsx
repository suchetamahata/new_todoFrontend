import { useEffect, useState } from 'react';
import FormDialog from '../components/materialUiForm'

const Home =() =>{

    const [uname, setUname] = useState<string>('Your')

    useEffect(() => { 
        if(localStorage.getItem('uname') !== null){
            setUname( localStorage.getItem('uname')! )
        }
    }, [uname])
    return(
        <div>
            <h3 className='head-text'>{uname}'s ToDo List</h3>
           <h5 className='wel-text'> What would you like to do today ?</h5>
           <FormDialog {...{setUname}}></FormDialog>
        </div>
    )
}
export default Home