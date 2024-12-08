import React , { useContext ,useState } from 'react'
import { AuthContext } from '../AuthContext'

const LoginForm = () => {
  const { username, setUsername, handleSubmit } = useContext(AuthContext);

  
  return (
    <div className='justify-center flex pt-20'>
      <div className=''>
        <h1 className='justify-center flex pb-10'>Login Form</h1>
        <form>
          <table> 
            <tr>
              <td className='pr-4'>
                <label className='border border-gray-300 rounded-md p-1 bg-stone-400'>User Name</label>
              </td>
              <td>
                <input type="text" name="username" value={username} placeholder='User Name' onChange={(e) => setUsername(e.target.value)} className='border border-gray-300 rounded-md p-1 w-full focus:ring focus:ring-blue-200' />
              </td>
            </tr>
          </table>
        </form>
        <div className='pt-8 justify-center flex'>
          <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 ">Login</button>
        </div>
        
      </div>
    </div>
  )
}

export default LoginForm