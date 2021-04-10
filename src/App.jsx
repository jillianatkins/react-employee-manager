import React from 'react';
// rename imports with the 'as' keyword
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import {AuthProvider} from './auth/AuthContext'

// Import pages
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import PageNotFound from './pages/404'
import DashBoard from './pages/dashboard/DashBoard'
import AppBar from './components/appbar/AppBar'

function App() {
  // Application Logic

  // Never put JS in the return statement (only JSX)
  return (
    <AuthProvider>
      <Router>
        <AppBar/>
        <Switch>
          <Route exact path="/"> <HomePage/> </Route>
          <Route path="/login"> <LoginPage/> </Route>
          <Route path="/register"> <RegisterPage/> </Route>
          <Route path="/dashboard"> <DashBoard/> </Route>
          <Route path="*"> <PageNotFound/> </Route>
        </Switch>
      </Router>
   </AuthProvider>
  );
}

export default App;
