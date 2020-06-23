import React from 'react'

export const Truck = (props) => {
    const {
        truckName,
        cuisineType
    } = props.truck
    return (
        <div className='truck'>
            <h1>{truckName}</h1>
    <h2>{cuisineType}</h2>
        </div>
    )
}

export default Truck
