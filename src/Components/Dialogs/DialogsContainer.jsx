import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {sendMessageCreator} from './../../Components/Redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import { withAuthRedirect } from '../HOC/withAuthRedirect';
import {compose} from "redux";

let mapStateToProps = (state) =>{
    return {
        dialogPage: state.dialogPage
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
        sendMessage:(newMessageBody)=>{
            dispatch(sendMessageCreator(newMessageBody));

        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    
)(Dialogs);







