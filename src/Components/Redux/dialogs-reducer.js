const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
 
};

const dialogReducer =(state = initialState, action) =>{
    
     let stateCopy ={...state,
                     //messages: [...state.messagesData]
                    };
     //stateCopy.messagesData = [...state.messagesData];
       switch (action.type) {
        
                     
           case SEND_MESSAGE:
            let body = action.newMessageBody;
            
            return {
                ...state,
                newMessageBody: '',
                messagesData: [...state.messagesData,{id: 5, message: body}]
            };
            
           
         default:return state;
}
    
    
    
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogReducer;