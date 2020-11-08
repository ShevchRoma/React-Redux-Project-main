import dialogReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';



let store = {
    _state :{
        profilePage:{
        posts: [{id: 1,message: "It's my first Tesla",likesCount: 12},
               {id: 2,message: "My car",likesCount: 11}],
               newPostText: 'it-kamasutra.com'
        
        },
        dialogPage:{
        
        dialogsData: 
            [ {id: 1,name: 'Alex'},
          {id: 2,name: 'Alexandr'},
          {id: 3,name: 'Sveta'},
          {id: 4,name: 'Sasha'},
          {id: 5,name: 'John'},
          {id: 6,name: 'Viktor'},
          {id: 7,name: 'Valera'},
          {id: 8,name: 'Kate'}],
        
        messagesData: 
            [{id: 1,message: 'Hi!'},
          {id: 2,message: 'How are things?'},
          {id: 3,message: 'How much is youre car?'},
          {id: 4,message: 'Where are you?'}],
        newMessageBody: ""
        
        
    },
    },
    _callSubscriber(){
        console.log('State changed');
    },
    getState(){
        return this._state
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    
    
    dispatch(action){
     this._state.profilePage = profileReducer(this._state.profilePage,action);
     this._state.dialogReducer = dialogReducer(this._state.dialogPage,action);
     this._state.sidebarReducer = sidebarReducer(this._state.sidebar,action);
        
     this._callSubscriber(this._state);
            
        }
        
    }
    



    
    export default store;

