import React, { useContext } from 'react'
import { AuthContext } from '../AuthContext'
import DashBoard from './DashBoard';
import LoginForm from './LoginForm';

const VerifyDisplay = () => {
    const {isLoggedIn} = useContext(AuthContext);
  return (
    <div>        
        {isLoggedIn ? <DashBoard /> :<LoginForm />}
        
    </div>
  )
}

export default VerifyDisplay