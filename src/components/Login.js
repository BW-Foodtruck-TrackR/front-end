import React from 'react'
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'


export const Login = (props) => {
    const {
        values,
        onLoginSubmit,
        onChange
    } = props
    return (
        <div className='login'>
            <div className='left'>
                <h1>
                    Welcome Back
                </h1>
                <h1>Get started now!</h1>
            </div>
            <div className='right'>
                
                <form onSubmit={onLoginSubmit}>
                <h1>Sign in here</h1>
                    <label>
                        Username:
                        <input
                        type='text'
                        value={values.username}
                        name='username'
                        onChange={onChange}
                        />
                    </label>
                    <label>
                        Password:
                        <input
                        type='text'
                        name='password'
                        value={values.password}
                        onCHnage={onChange}
                        />
                    </label>
                    <Button color='primary'>Login</Button>
                </form> 
                            
            </div>
        </div>
    )
}

export default Login