import React, {useState, useEffect} from 'react';

import './App.css';
import Home from './components/Home'
import Join from './components/Join'
import Login from './components/Login'
import {Route} from'react-router-dom'
import * as Yup from 'yup'
import formSchema from './validation/formSchema'
import axios from 'axios'


const initialValuesRegistraton = {
  userOrOperator: '',
  username: '',
  email: '',
  password: ''
}

const initialLoginFormValues = {
  username: '',
  password: ''
}

const initialFormErrors = {
  userOrOperator: '',
  username: '',
  email: '',
  password: ''
}

const initialUsers = []

function App() {



  
  const [registrationFormValues, setRegistrationFormValues] = useState(initialValuesRegistraton)
  const [loginFormValues, setLoginFormValues] = useState(initialLoginFormValues)
  const [user, setUser] = useState(initialUsers)
  const [formErrors, setFormErrors] = useState(initialFormErrors)



  const onChange = evt => {
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


    setRegistrationFormValues({
      ...registrationFormValues,
      [name]: value
    })
    
  }
  
  const onSubmit = evt => {
    evt.preventDefault()



    
  }



  return (
    <div className="App">
      <Route path='/home'>
           
      </Route>
      <Route exact path='/'>
      <Home />
      </Route>
      <Route path='/join'>
        <Join values={registrationFormValues} onChange={onChange} onSubmit={onSubmit} errors={formErrors} />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>  

    </div>
  );
}

export default App;
