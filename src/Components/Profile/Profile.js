import React from 'react'
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.js';
import ProfileInfo from './ProfileInfo/ProfileInfo.js';

import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile =(props)=>{
    
    
    return (<div>
        <ProfileInfo profile={props.profile} />
        <div className={classes.posts}>
        <h2>My posts</h2></div>
        
        <MyPostsContainer />
        
    </div>
       
)}
export default Profile;