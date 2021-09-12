import './About.css'

interface AboutI{
    setModal:(a:boolean) => void
}

const About = ({setModal}: AboutI) =>{

    return (
        <div className='modalbg'>
            <div className='modalc'>
                <p> </p>
                <h4> Nice to meet you.</h4>
                <p> This is a todos app where you can list your work, update its status as completed/uncompleted and also save them to view them later. 
                    Do not forget to set username first. Hope your experience is good. </p> 
                <button onClick={()=> setModal(false)} className='btn'>Close About</button> 
            </div>
        </div>
    )
}

export default About