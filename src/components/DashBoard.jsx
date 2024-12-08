import React, { useContext } from 'react'
import { AuthContext } from '../AuthContext'
import LoginForm from './LoginForm';

const DashBoard = () => {
    const {username, handleLogout} = useContext(AuthContext);
  return (
    <div className='justify-center flex mt-20 text-fuchsia-800 text-2xl	'>
        <div>
            <h1>Welcome {username}!</h1>
        </div>
        
        <div className='pt-40 justify-center flex'>
          <button onClick={handleLogout} className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-300">Log Out</button>
        </div>
        
    </div>
  )
}

export default DashBoard