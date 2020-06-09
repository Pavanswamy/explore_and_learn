import React, { Component, Fragment } from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Login from './Auth/Login'
import Register from './Auth/Register'
import Navbar from './Navbar'
import { AuthProvider } from './AuthContext'
import ProtectedRoute from './ProtectedRoute'
import UnprotectedRoute from './UnprotectedRoute'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {

  render(){
    return(
      <AuthProvider>
        <ToastContainer position="top-center"/>
        <Navbar/>
        <Switch>
          <UnprotectedRoute path="/login" component={Login}/>
          <UnprotectedRoute exact path="/register" component={Register} />
        </Switch>
      </AuthProvider>
    )
  }
}

export default App
