import React from 'react';
import classes from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem.js';
import Message from './Message/Message.js';
//import {sendMessageCreator, updateNewMessageBodyCreator} from "./../../Components/Redux/dialogs-reducer";
import {Field, reduxForm} from "redux-form";
 

const Dialogs = (props)=> {
    
    let state = props.dialogPage;
    
    let messagesElements = state.messagesData.map(message =><Message message={message.message} key={message.id} /> );
                                            
    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} /> );
    
    let newMessageBody = state.newMessageBody;
    
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }
    
        
    
    return(
        <div className={classes.dialogs}>
    
        <div>
          <div className={classes.dialogsItems}>
                                          
                            {dialogsElements}
            
              </div>
        </div>
               <div className={classes.messages}>
                         <div>{messagesElements}</div>
                         
                   
                   
               </div>
               <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
    );
    
    
    
    
}
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageBody" placeholder="Enter your message" />
            </div>
            <div><button className ={classes.b}>Send</button></div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);


export default Dialogs;
