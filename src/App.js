import React, {useState, useEffect} from 'react';

import './App.css';
import Home from './components/Home'
import Trucks from './components/Trucks'
import Join from './components/Join'
import Login from './components/Login'
import {Route} from'react-router-dom'
import axios from 'axios';
import * as Yup from 'yup'
// import formSchema from './validation/formSchema'
import formSchema from './validation/formSchema'
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

const initialFormErrors = {
  userType: '',
  username: '',
  email: '',
  password: ''
}

const initialUsers = []
const initialTrucks = []

function App() {



  
  const [formJoinValues, setJoinFormValues] = useState(initialJoinValues)
  const [formLoginValues, setLoginFormValues] = useState(initialLoginValues)
  const [user, setUser] = useState(initialUsers)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [trucks, setTrucks] = useState(initialTrucks)

  const getTrucks = () => {
    axios.get('https://food-truck-development.herokuapp.com/api/trucks')
    .then(res=>{
      console.log(res)
      setTrucks(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  }
  useEffect(() => {
    getTrucks()
  }, [])
  const onChangeJoin = evt => {
    const {name, value} = evt.target;

    // Yup Validation
    Yup
    .reach(formSchema, name)
    //we can then run validate using the value
    .validate(value)
    // if the validation is successful, we can clear the error message
    .then(() => {
      setFormErrors({
        ...formErrors,
        [name]: ""
      })
    })
    /* if the validation is unsuccessful, we can set the error message to the message 
      returned from yup (that we created in our schema) */
    .catch(err => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0] // investigate
      })
    })

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
        <Join values={formJoinValues} errors={formErrors} onChange={onChangeJoin} onSubmit={onJoinSubmit} />
      </Route>
      <Route path='/login'>
        <Login values={formLoginValues} onChange={onChangeLogin} onSubmit={onLoginSubmit}  />
      </Route> 
      <Route path='/trucks'>
        <Trucks trucks={trucks}  />
        </Route> 

    </div>
  );
}

export default App;
