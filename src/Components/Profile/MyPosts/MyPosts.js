import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.js';
//import {addPostActionCreator,updateNewPostTextActionCreator} from './../../Redux/profile-reducer';
import {Field, reduxForm} from "redux-form";
import {required,maxLength10} from './utils/validators';
import { Textarea } from '../../FormsControls/FormsControls.js';
 
let AddNewPostForm = (props) => {
     return <form onSubmit={props.handleSubmit}>
         <div>
         <Field name="newPostText" component={Textarea} placeholder={"Post message"} validate={[required,maxLength10]} />
         </div>
         <div>
             <button>Add post</button>
         </div>
     </form>
 }

 let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);





const MyPosts =(props)=>{
    
    
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    
    let newPostElement = React.createRef();

    let onAddPost =(values)=>{
        //props.addPost();
        //let text = newPostElement.current.value;
        //props.dispatch();
        props.addPost(values.newPostText);
        
    }
    let onPostChange =()=>{
        let text = newPostElement.current.value;
        
         //let action = updateNewPostTextActionCreator(text);
        //props.dispatch(action);
        props.u(text);
        
    }
    
    return ( <div>
                                        
        <div className={classes.form__block}>
            
            <AddNewPostFormRedux onSubmit={onAddPost} />
        
            
        </div>
                                        
       <div> 
        {postsElements}
        
        </div>
        
        
        </div>
       
        
        )
}
        

export default MyPosts;