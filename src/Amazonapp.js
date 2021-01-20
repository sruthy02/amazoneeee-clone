import React from "react";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Amazonbar from './Amazonfiles/Amazonbar';
import Amazonlogin from './Amazonfiles/Amazonlogin';




export default function Amazonapp(){
    return(
        <>
        <BrowserRouter>
        
        <Switch>
            <Route exact path="/" render={props => <Amazonbar {...props}/>}/>
            <Route exact path="/Signin" render={props => <Amazonlogin {...props}/>}/>
        </Switch>
        </BrowserRouter>
        </>
    );
}