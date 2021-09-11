import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import Home from "../route/home"
  import Auth from "../route/auth"
import Profile from '../route/profile';
  
const AppRouter = ({isLoggedIn, userObj}) => {
    return(
    <Router>
        <Switch>
            {isLoggedIn ? (<><Route exact path="/">
                <Home userObj={userObj}/>
            </Route>
            <Route exact path="/profile">
            <Profile />
        </Route></>
            ) : (<Route exact path="/">
                <Auth />
            </Route>)}
        </Switch>
    </Router>
    )};

export default AppRouter;