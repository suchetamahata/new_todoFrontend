import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import 'animate.css-react'

import { Backend } from '../hostURI';

interface FormDialogueprops {
    setUname: (a: string) => void,
    setPassword: (a: string) => void,
    password: string,
    uname: string,
    setLS: (a: boolean) => void,
    setLO: (a: boolean) => void,
  }
  
  interface LoginResponse {
    message: string,
    token: string
  }
export default function LoginForm({ setUname, setPassword, password, uname, setLS, setLO }: FormDialogueprops) {
   
  const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    
    const handleLogin = () => {
      localStorage.setItem('uname', uname);
      setUname(uname)
      console.log(uname)
  
      fetch(`${Backend}/user/login`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "uname": uname,
          "password": password
        })
      }).then((res: Response) => {
        const JsonPromise = res.json();
        JsonPromise.then((data: LoginResponse) => {
          localStorage.setItem('token', data.token)
          console.info('User successfully logged in')
          store.addNotification({
            title: " Login Successful",
            message: ` How have you been ${uname} ?`,
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 3000,
              onScreen: true
            }
          }) 
          setLO(true)
          setLS(false)
        }) 
      }).catch((err) =>
            store.addNotification({
            title: "Login failed",
            message: `Wrong username/password. Try again.`,
            type: 'danger',
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 3000,
              onScreen: true
            }
          })
        )
      setOpen(false)
    };
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      localStorage.setItem('uname', e.target.value);
      setUname(e.target.value)
    }
    const getPassword = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setPassword(e.target.value)
    }
  
  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Login 
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the following to login. If you are a new user, signup first. 
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Username"
            type="string"
            fullWidth
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="password"
            type="password"
            fullWidth
            onChange={getPassword} >
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLogin} color="primary">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}