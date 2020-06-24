import React from 'react'
import Truck from './Truck'

export const Trucks = (props) => {
    const {trucks, user} = props
    console.log(user)
    return (
        <div>
         
            <div className="hero-image">
           
            </div>
            <div className='hero-text'>
    <h1>Welcome Back! {user.username}</h1>
                <h2>Get Your Grub On!</h2>
                <h2>Local Trucks</h2>
            </div>
            <div className='hero-trucks'>
                {
                    trucks.map(truck=>{
                        return(
                        <Truck truck={truck} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Trucks
