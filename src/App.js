import React, {useState, useEffect} from 'react';

import './App.css';
import Home from './components/Home'
import Trucks from './components/Trucks'
import Join from './components/Join'
import Login from './components/Login'
import {Route, useHistory} from'react-router-dom'
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
  // userType: '',
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
const initialDisabledValue = true

function App() {
  const {push} = useHistory()



  
  const [formJoinValues, setJoinFormValues] = useState(initialJoinValues)
  const [formLoginValues, setLoginFormValues] = useState(initialLoginValues)
  const [users, setUsers] = useState(initialUsers)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [trucks, setTrucks] = useState(initialTrucks)
  const [disabled, setDisabled] = useState(initialDisabledValue)

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


  // Effects
  useEffect(() => {
    getTrucks()
  }, [])

  useEffect(() => {
    formSchema.isValid(formJoinValues).then(valid => {
      setDisabled(!valid)
    })
  },[formJoinValues])

  // Change Handlers
  const onChangeJoin = evt => {
    const {name, value} = evt.target;

    // Yup Validation
    Yup
    .reach(formSchema, name)
    .validate(value)
    .then(() => {
      setFormErrors({
        ...formErrors,
        [name]: ""
      })
    })
    .catch(err => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0]
      })
    })

    setJoinFormValues({
      ...formJoinValues,
      [name]: value
    })    
  }

  // Login Change
  const onChangeLogin = evt => {
    const {name, value} = evt.target;
    setLoginFormValues({
      ...formLoginValues,
      [name]: value
    })
  }
  

  // Join Submit
  const onJoinSubmit = evt => {
    evt.preventDefault();
    const newUser = {
      username: formJoinValues.username,
      email: formJoinValues.email,
      password: formJoinValues.password,
      userType: formJoinValues.userType
    }

    postNewUser(newUser)
    push('/login')
  }

  // Register Post Request
  const postNewUser = newUser => {
    
    axios.post("https://food-truck-development.herokuapp.com/api/auth/register", newUser)
    .then(res=>{
      console.log(res.data)
      setUsers(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  }

  // Login Submit Handler
  const onLoginSubmit = evt => {
    evt.preventDefault();
    const loginUser = {
      email: formLoginValues.email,
      password: formLoginValues.password
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
        <Join values={formJoinValues} errors={formErrors} onChange={onChangeJoin} onSubmit={onJoinSubmit} disabled={disabled} />
      </Route>
      <Route path='/login'>
        <Login values={formLoginValues} onChange={onChangeLogin} onSubmit={onLoginSubmit}  />
      </Route> 
      <Route path='/trucks'>
        <Trucks trucks={trucks} user={users} />
      </Route> 

    </div>
  );
}

export default App;
