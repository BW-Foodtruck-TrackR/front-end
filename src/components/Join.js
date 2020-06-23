import React from 'react'
import { Button } from 'reactstrap'

export const Join = (props) => {
    const {
        values,
        onSubmit,
        onChange,
        errors
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
                        value={values.userOrOperator}
                        name='userOrOperator'
                        >
                        <option value=''>---Select---</option>
                        <option value='1'>User</option>
                        <option value='2'>Operator</option>
                        </select>
                    </label>
                    <label>Name:    
                        <input 
                        value={values.username}
                        onChange={onChange}
                        name='username' />
                    </label>
                    <label>Email:
                        <input
                        value={values.email}
                        onChange={onChange}
                        name='email'
                        />
                    </label>
                    <label>Password:
                        <input
                        value={values.password}
                        onChange={onChange}
                        name='password'
                        />
                    </label>
                    <Button color='primary'>Let's Go!</Button>
                </form>
            </div>
        </div>
    )
}

export default Join