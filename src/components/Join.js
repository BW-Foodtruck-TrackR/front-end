import React from 'react'
import { Button } from 'reactstrap'
import {Link} from 'react-router-dom'

export const Join = (props) => {
    const {
        values,
        onSubmit,
        onChange,
        errors,
        disabled
    } = props
    return (
        
        <div className="join">
            <div className='left'>
                <h1>
                Join the world's most satisfying Food Truck Tracker
                </h1>
                <h1>Get started today</h1>
            </div>
            <div className='right'>
                
                <form onSubmit = {onSubmit}>
                <h1>Welcome Get Started Now!</h1>
                    <label>
                        Are you a ?
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
                    <div className="error">{errors.userType}</div>
                    <label>Name:    
                        <input 
                        value={values.username}
                        onChange={onChange}
                        name='username' />
                    </label>
                    <div className="error">{errors.username}</div>

                    <label>Email:
                        <input
                        value={values.email}
                        onChange={onChange}
                        name='email'
                        />
                    </label>
                    <div className="error">{errors.email}</div>
                    <label>Password:
                        <input
                        type='password'
                        value={values.password}
                        onChange={onChange}
                        name='password'
                        />
                    </label>
                    <div className="error">{errors.password}</div>
                    {/* <Link to='/trucks' > */}
                         <Button type='submit' color='primary' onSubmit={onSubmit}>Let's Go!</Button>
                    {/* </Link> */}
                    
                </form>
            </div>
        </div>
    )
}

export default Join