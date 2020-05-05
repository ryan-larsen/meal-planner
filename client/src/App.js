import React, { Component, useEffect } from 'react'
import './App.css'
import Nav from './components/Nav'
import Recipes from './components/Recipes'
import { BrowserRouter as Router } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import About from './components/About'
import Ingredient from './components/Ingredient'
// import Calender from './components/Cal'
import Calender from './components/Calender/src/components/Cal'
import Login from './components/pages/Login/login'
import signup from './components/pages/signup/signup'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import { loadUser } from './actions/authActions'
import store from './components/store'

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  const browserHistory = createBrowserHistory()

  return (
    <Router history={browserHistory}>
      <Provider store={store}>
        <div className='App'>
          <Nav />
          <Route exact path='/' component={Login} />
          <Route exact path='/signup' component={signup} />
          <Route exact path='/About' component={About} />
          <Route exact path='/recipes' component={Recipes} />
          <Route exact path='/ingredients/:label' component={Ingredient} />
          <Route exact path='/Calender' component={Calender} />
        </div>
      </Provider>
    </Router>
  )
}

export default App
