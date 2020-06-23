import React, {useState, useEffect} from 'react';

import './App.css';
import Home from './components/Home'
import Join from './components/Join'
import Login from './components/Login'
import {Route} from'react-router-dom'
import axios from 'axios';

const initialJoinValues = {
  userType: '',
  username: '',
  email: '',
  password: ''
}

const initialLoginValues = {
  userType: '',
  email: '',
  password: ''
}

const initialUsers = []

function App() {



  
  const [formJoinValues, setJoinFormValues] = useState(initialJoinValues)
  const [formLoginValues, setLoginFormValues] = useState(initialLoginValues)
  const [user, setUser] = useState(initialUsers)



  const onChangeJoin = evt => {
    const {name, value} = evt.target;
    setJoinFormValues({
      ...formJoinValues,
      [name]: value
    })
    
  }

  const onChangeLogin = evt => {
    const {name, value} = evt.target;
    setLoginFormValues({
      ...formLoginValues,
      [name]: value
    })
  }
  
  const onJoinSubmit = evt => {
    evt.preventDefault();
    const newUser = {
      username: formJoinValues.username,
      email: formJoinValues.email,
      password: formJoinValues.password,
      userType: formJoinValues.userType
    }
  }

  const onLoginSubmit = evt => {
    evt.preventDefault();
    const loginUser = {
      email: formLoginValues.email,
      password: formLoginValues.password,
      userType: formLoginValues.userType
    }

  }

  return (
    <div className="App">
      <Route path='/home'>
           
      </Route>
      <Route exact path='/'>
      <Home />
      </Route>
      <Route path='/join'>
        <Join values={formJoinValues} onChange={onChangeJoin} onSubmit={onJoinSubmit} />
      </Route>
      <Route path='/login'>
        <Login values={formLoginValues} onChange={onChangeLogin} onSubmit={onLoginSubmit}  />
      </Route>  

    </div>
  );
}

export default App;
