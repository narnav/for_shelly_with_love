import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {doSigninAsync,selectEmail,selectUserName,logout,selectToken} from './loginSlice'

const Login = () => {
    const dispatch = useDispatch();
    const email = useSelector(selectEmail);
    const userName = useSelector(selectUserName);
    const token = useSelector(selectToken);
    return (
    <div>
        {userName && <div>User name: {userName}</div>}
        {email && <div> Email: {email}</div>}
        {token && <div> token: {token}</div>}
        <hr/>
        Login
        <button onClick={()=>dispatch(doSigninAsync())}>Login</button>
        <button onClick={()=>dispatch(logout())}>Logout</button>
    </div>
  )
}

export default Login