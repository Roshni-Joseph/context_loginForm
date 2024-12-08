import { useContext, useState } from 'react'
import './App.css'
import LoginForm from './components/LoginForm'
import { AuthContext, AuthContextProvider } from './AuthContext'
import DashBoard from './components/DashBoard';
import VerifyDisplay from './components/VerifyDisplay';

function App() {
  return (
    <>
      <AuthContextProvider>
        <VerifyDisplay />
      </AuthContextProvider>
      
    </>
  )
}

export default App
