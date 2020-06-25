import React from 'react'
import Truck from './Truck'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';


export const Trucks = (props) => {
    const {trucks} = props
    const user = localStorage.getItem('You')
    return (
        <div>
              <Navbar color="light" light expand="md">
                    <NavbarBrand>Food Truck Tracker</NavbarBrand>
                    <NavLink href='/'>Home</NavLink>
            </Navbar>
            <div className="hero-image">
           
            </div>
            <div className='hero-text'>
                <h1>Welcome Back, {user}!</h1>
                <h2>Get Your Grub On!</h2>
                <h2>Local Trucks</h2>
            </div>
            <div className='hero-trucks'>
                {
                    trucks.map(truck=>{
                        return(
                        <Truck truck={truck} key={truck.id}/>
                        )
                    })
                }
                
            </div>
         
        </div>
    )
}

export default Trucks
