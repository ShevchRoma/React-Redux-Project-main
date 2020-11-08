import React from 'react';
import classes from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const Navigation =()=>{
    return <nav className={classes.nav}>
        <div>
           
          <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
         </div>
        <div>
            
            <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
         </div>
             <div>
             <a>News</a>
         </div>
         <div>
            <NavLink to="/users" activeClassName={classes.active}>Users</NavLink>
          </div>
          <div>
             <a href="/music">Music</a>
          </div>
          <div>
             <a>Settings</a>
           </div>
        </nav>
            
          
        
}
export default Navigation;