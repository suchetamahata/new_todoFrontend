import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface FormDialogueprops{
  setUname:(a:string)=>void,
  setPassword:(a:string)=>void,
  password:string,
  uname: string
}

interface LoginResponse {
  message: string,
  token: string
}

export default function FormDialog({setUname, setPassword, password, uname}:FormDialogueprops) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSignUp= () => {
    setUname(uname)
    fetch('http://localhost:8000/user/create', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "uname": uname,
        "password" : password
      })
    })
    setOpen(false);
  };

  const handleLogin= () => {
    localStorage.setItem('uname', uname);
    setOpen(false)
    setUname(uname)
    console.log(uname)
    const ResponsePromise = fetch('http://localhost:8000/user/login',{
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "uname": uname,
        "password" : password
      })
    })
    ResponsePromise.then((res: Response) => {
      const JsonPromise = res.json();
      JsonPromise.then((data: LoginResponse) => {
        localStorage.setItem('token', data.token)
        console.info('User successfully logged in');
      })
    })
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>{
    localStorage.setItem('uname', e.target.value);
    setUname(e.target.value)
  }
  const getPassword = (e: React.ChangeEvent<HTMLTextAreaElement>)=> {
      setPassword(e.target.value)
  }

  return (
    <div className='wel-text'>
      <Button variant="outlined" color="primary"  onClick={handleClickOpen}>
        Login \ Signup
      </Button>
      <Dialog open={open} onClose={()=>setOpen(false)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Signin / Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            If you are a new user please set your UserId. If you are a user, Login
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
          type="string"
          fullWidth
          onChange={getPassword} >
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSignUp} color="primary">
            Sign Up
          </Button>
          <Button onClick={handleLogin} color="primary">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
