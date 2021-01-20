import React from 'react';
import './Headeramazon.css';
import {Link} from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { ShoppingBasket } from '@material-ui/icons';
import { useStateValue } from './Statesss';
import Amazonsignin from './Amazonsignin';
import reducer from './reducer';
import { auth } from './Firebase';
function Headeramazon() {


  const [{ basket,user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  }
    return <nav className="Headeramazon">
        <Link>
        <img 
          className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
          />
        </Link>
        <div className="header_search">
        <input type="text" className="Headeramazon_searchInput"/>
        <SearchIcon className="header_searchIcon" />

        </div>
        <div className="header_nav">
          <Link to={!user && "/login"} className="header_link">
            
          <div onClick={login} className="header_option">

          
          <span className="header_optionLineOne">Hello Sruthy</span>
          <span className="header_optionLineTwo">{user ? 'sign Out' :'Sign In'}</span>
          </div>
          </Link>
          <Link to="/" className="header_link">
          <div className="header_option">
            

          
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">Orders</span>
          </div>
          </Link>
          <Link to="/" className="header_link">
          <div className="header_option">

          
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
          </div>
          </Link>
          <Link to="checkout" className="header_link">
            <div className="header_optionBasket">
              <ShoppingCart/>
<span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
            </div>
          </Link>
        </div>
        
    </nav>
}

export default Headeramazon;
