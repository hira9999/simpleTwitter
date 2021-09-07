import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Home from "../route/home"
  import Auth from "../route/auth"
  
const AppRouter = ({isLoggedIn}) => {
    return(
    <Router>
        <Switch>
            {isLoggedIn ? (<Route exact path="/">
                <Home />
            </Route>) : (<Route exact path="/">
                <Auth />
            </Route>)}
        </Switch>
    </Router>
    )};

export default AppRouter;