import React from 'react'
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'


export const Login = (props) => {
    const {
        values,
        onSubmit,
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
                
                <form onSubmit={onSubmit}>
                <h1>Sign in here</h1>
                <label>
                    Are You a: 
                    <select
                        onChange={onChange}
                        value={values.userType}
                        name='userType'
                        >
                        <option value=''>---Select---</option>
                        <option value='1'>User</option>
                        <option value='2'>Operator</option>
                        </select>
                </label>
                    <label>
                        Email:
                        <input
                        type='text'
                        value={values.email}
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
                        onChange={onChange}
                        />
                    </label>
                    <Button color='primary'>Login</Button>
                </form> 
                            
            </div>
        </div>
    )
}

export default Login