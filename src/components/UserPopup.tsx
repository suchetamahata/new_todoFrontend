import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import styles from './UserPopup.module.css';


const UserPopup = () => {
    
const checkUname=(e: React.ChangeEvent<HTMLInputElement>)=>{
}

return(
  <Popup trigger={<button>Set Username</button>} className={styles.divstyle} >
    <div className={styles.divstyle}>
        <form>
            <input placeholder='username' className={styles.inputs} onChange={checkUname}></input>
            <input placeholder='password' className={styles.inputs} type='text'></input>
            <button type='submit' className={styles.submitBtn}>Save</button>
        </form>
    </div>
  </Popup>)
}

export default UserPopup