import React from 'react'
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'


export const Login = () => {
    return (
        <div className='login'>
            <div className='left'>
                <h1>
                    Welcome Back
                </h1>
                <h1>Get started now!</h1>
            </div>
            <div className='right'>
                <h1>Sign in here</h1>
                <Link to='/login/user'>
                    <Button color='primary'>User</Button>
                </Link>
                <Link to='/login/operator'>
                   <Button color='primary'>Operator</Button>
                </Link>                
            </div>
        </div>
    )
}

export default Login