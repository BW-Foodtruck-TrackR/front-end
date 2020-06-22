import React, {useState, useEffect} from 'react';

import './App.css';
import Home from './components/Home'
import Join from './components/Join'
import Login from './components/Login'
import {Route} from'react-router-dom'

const initialValues = {
  userOrOperator: '',
  username: '',
  email: '',
  password: ''
}

const initialUsers = []

function App() {



  
  const [formValues, setFormValues] = useState(initialValues)
  const [user, setUser] = useState(initialUsers)



  const onChange = evt => {
    const {name, value} = evt.target;
    setFormValues({
      ...formValues,
      [name]: value
    })
    
  }
  
  const onSubmit = evt => {

  }

  return (
    <div className="App">
      <Route path='/home'>
           
      </Route>
      <Route exact path='/'>
      <Home />
      </Route>
      <Route path='/join'>
        <Join values={formValues} onChange={onChange} onSubmit={onSubmit} />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>  

    </div>
  );
}

export default App;
