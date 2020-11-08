import React from 'react';
import  classes from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header =(props)=>{
    return <header className={classes.header}>
         <img src='https://i.pinimg.com/474x/45/24/9e/45249e20e04258a911866f75459b31fd.jpg'/>
             <span className={classes.logo}>Tesla-club</span>
             <div className={classes.loginBlock}>
                 
            { props.isAuth 
                ? <div>{props.login} - <button onClick={props.logout}>Logout</button> </div>
                : <NavLink to={'/login'}>Login</NavLink> }
        </div>
             </header>
    
}

export default Header;