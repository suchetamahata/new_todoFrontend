import { store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import 'animate.css-react'

interface lout{
    setLS: (a: boolean) => void,
    setLO: (a: boolean) => void,
    setS: (a: boolean) => void,
}

const Logout = ({setLS, setLO, setS}:lout) =>{
    
    const logoutfn = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('uname')
        store.addNotification({
            title: `Logged out of your account`,
            message: "Logout Successful",
            type:'info',
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true
            }
          })
        setLS(true)
        setS(true)
        setLO(false)
    }

    return(
        <>
            <button onClick={logoutfn}>LogOut</button>
        </>
    )
}
export default Logout