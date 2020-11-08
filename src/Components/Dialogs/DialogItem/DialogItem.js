import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './../Dialogs.module.css';

const DialogItem =(props)=>{
    return(
    <div className={classes.dialog + ' ' + classes.active}><img src='https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg' />
              <NavLink to ={"/dialogs/"+props.id}>{props.name}</NavLink>
              </div>
);
}
    
    
    export default DialogItem;