import React from 'react';
// rename imports with the 'as' keyword
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// Import pages
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import PageNotFound from './pages/404'
import AppBar from './components/appbar/AppBar'

function App() {
  // Application Logic

  // Never put JS in the return statement (only JSX)
  return (
   <Router>
     <AppBar/>
     <Switch>
       <Route exact path="/"> <HomePage/> </Route>
       <Route path="/login"> <LoginPage/> </Route>
       <Route path="/register"> <RegisterPage/> </Route>
       <Route path="*"> <PageNotFound/> </Route>
     </Switch>
   </Router>
  );
}

export default App;
