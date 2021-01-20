import React, {useEffect} from 'react';
import "./App.css";
import Headeramazon from './Headeramazon';
import './Headeramazon.css';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Homeamazon from './Homeamazon';
import Login from './Login';
import { useStateValue } from './Statesss';
import { auth } from './Firebase';
import Checkout from './Checkout';


function Amazonappss(){
    const [{ basket }, dispatch] = useStateValue();



    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((authUser)=>{
            if (authUser){
                dispatch({
                    type:"SET_USER",
                    user:authUser
                });

            }else{
                dispatch({
                    type:"SET_USER",
                    user:null,
                });


            }
        });
        return() => {
            unsubscribe();
        }

    }, []);

    
    return(
        <Router>
        <div className="Amazonappss">
            <Switch>
                <Route path="/checkout">
                    <Headeramazon/>
                    <Checkout/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/">
                    <Headeramazon/>
                   
                    <Homeamazon/>
                </Route>

            </Switch>
        </div>
        </Router>
    );
}

export default Amazonappss;