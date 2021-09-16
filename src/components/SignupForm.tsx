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
  setS: (a: boolean) => void,
}

// interface LoginResponse {
//   message: string,
//   token: string
// }

export default function SignupForm({ setUname, setPassword, password, uname, setS }: FormDialogueprops) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSignUp = () => {
    setUname(uname)

    fetch(`${Backend}/user/create`, {
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
      if (res.status === 400) {
        store.addNotification({
          title: `Username Unavailable`,
          message: "try another username OR login if you have an account",
          type: "danger",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true
          }
        })
      }
      else if (res.status === 403) {
        store.addNotification({
          title: `Error`,
          message: "not authorized",
          type: "danger",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true
          }
        })
      }
      else {
        store.addNotification({
          title: `welcome ${uname}`,
          message: "Sign up successful",
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
        setS(false)
      }
    }).catch((err) =>
      store.addNotification({
        title: `Couldn't signin. Try again`,
        message: "Signin failed",
        type: 'danger',
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      })
    )
    setOpen(false)
  }

  
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
        Signup
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Signup</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Create your own userid. Enjoy smart working.
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
          <Button onClick={handleSignUp} color="primary" >
            Sign Up
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
