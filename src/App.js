import React, {useState, useEffect} from 'react';

import './App.css';
import Home from './components/Home'
import Join from './components/Join'
import Login from './components/Login'
import {Route} from'react-router-dom'

const initialJoinValues = {
  userOrOperator: '',
  username: '',
  email: '',
  password: ''
}

const initialLoginValues = {
  username: '',
  password: ''
}

const initialUsers = []

function App() {



  
  const [formJoinValues, setJoinFormValues] = useState(initialJoinValues)
  const [formLoginValues, setLoginFormValues] = useState(initialLoginValues)
  const [user, setUser] = useState(initialUsers)



  const onChange = evt => {
    const {name, value} = evt.target;
    setJoinFormValues({
      ...formJoinValues,
      [name]: value
    })
    
  }
  
  const onJoinSubmit = evt => {

  }

  const onLoginSubmit = evt => {

  }

  return (
    <div className="App">
      <Route path='/home'>
           
      </Route>
      <Route exact path='/'>
      <Home />
      </Route>
      <Route path='/join'>
        <Join values={formJoinValues} onChange={onChange} onSubmit={onJoinSubmit} />
      </Route>
      <Route path='/login'>
        <Login values={formLoginValues} onChange={onChange} onSubmit={onLoginSubmit}  />
      </Route>  

    </div>
  );
}

export default App;
