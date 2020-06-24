import React from 'react'

export const Truck = (props) => {
    const {
        truckName,
        cuisineType,
        currentLocation
    } = props.truck
    return (
        <div className='truck'>
            <h1>{truckName}</h1>
            <h2>{cuisineType}</h2>
            <p>{currentLocation}</p>
        </div>
    )
}

export default Truck
