import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderContainer from './Components/Header/HeaderContainer.js';
import Navigation from './Components/Navigation/Navigation.js'
import Dialogs from './Components/Dialogs/Dialogs.js';
import Music from './Components/Music/Music.js';
import {Route, withRouter} from "react-router-dom";
import ProfileContainer from './Components/Profile/ProfileContainer';
import {BrowserRouter} from "react-router-dom";
import DialogsContainer from './Components/Dialogs/DialogsContainer';

import UsersContainer from './Components/Users/UsersContainer';
import Login from './Components/Login/login';
import { connect } from 'react-redux';
import {getAuthUserData} from './Components/Redux/auth-reducer';
import { compose } from 'redux';
import Preloader from './Components/Preloader/Preloader';
import {initializeApp} from './Components/Redux/app-reducer';








class App extends React.Component{
    componentDidMount() {
        this.props.initializeApp();
    }
    render(){
        if(!this.props.initialized){
            return <Preloader />
        }
    
    return(
        
    <div className='app-wrapper'>
       <HeaderContainer />
        <Navigation />
        { /*<Profile />*/}
        <div className='app-wrapper-content'>
        <Route path='/dialogs' 
             render = { () => <DialogsContainer />} />
        <Route path='/profile/:userId?' render ={ ()=> <ProfileContainer />}/>
        <Route path='/Music' 
             render={() => <Music/>} />
                 <Route path='/users' 
             render={() =><UsersContainer />} />
             <Route path='/login' render={() =><Login />} />
        
        </div>
          
    </div>
        
    );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);