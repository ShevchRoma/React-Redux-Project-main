import React from 'react';
import classes from './Post.module.css'


const Post =(props)=>{
    return (
        
        <div className={classes.tesla}>
        
        <img src ='https://upload.wikimedia.org/wikipedia/commons/4/4f/Tesla_Model_S_02_2013.jpg' />
        {props.message}
        
        <div className={classes.like}>
         <img src="https://www.pinclipart.com/picdir/middle/211-2116563_like-media-button-subscribe-facebook-advertising-social-facebook.png" />{props.likesCount}
         </div>
        </div>
        );
        }
        
        
 export default Post;       