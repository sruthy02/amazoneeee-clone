import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(
  //<React.StrictMode>
    //<Router>
    //<CssBaseline />
    //<AppsBreadcrumbs/>
  //</Router>
  //</React.StrictMode>,
 //document.getElementById('root')
//);
//const history=createBrowserHistory();
ReactDOM.render(
  <React.StrictMode>
    
    
      <App/>
   
    
  </React.StrictMode>,

  document.getElementById('root'));
     
     //ReactDOM.render(</>,document.getElementById('root'));
//ReactDOM.render(<Amazonsignin/>,document.getElementById('root'));

         



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
