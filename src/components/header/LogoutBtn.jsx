import React from 'react'
import {useDispatch} from 'react-redux'
import Logout from '../../store/authSlice'
import authService from '../../appwrite/auth'

function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandle = () => {
        authService.logout().then(() => {
            dispatch(Logout());
        })
        
    }



  return (
    <button onClick={logoutHandle}
     className='px-6 py-2 duration-200 rounded-full inline-bock hover:bg-blue-100' >
        
    Logout 

    </button>
  )
}

export default LogoutBtn