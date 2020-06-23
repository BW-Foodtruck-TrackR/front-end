import React from 'react'
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom';

export const Home = () => {
    return (
        <div className="homeContainer">
            <div className="hero-image"></div>
            <div className="hero-text">
                    <h1>
                    FOOD TRUCK TRACKER
                    </h1>
                    <Link to='/join'>
                        <Button color='primary'>Join</Button>
                    </Link>
                    <Link to='/login'>
                          <Button color='primary'>Login</Button>
                    </Link>
                    
            </div>
            
        </div>
    )
}

export default Home
