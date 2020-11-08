import { usersAPI } from "../../API/api";

const ADD_POST= 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState={
            
        posts: [
               {id: 1,message: "It's my first Tesla",likesCount: 12},
               {id: 2,message: "My car",likesCount: 11}],
               profile: null
        };
const profileReducer = (state=initialState, action) =>{
    switch (action.type){
        case ADD_POST:{
            let newPost ={
                id: 3,
                message: action.newPostText,
                likesCount: 0
                
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
         
        case SET_USER_PROFILE: {
            return{...state,profile: action.profile}
        }
    default:
    return state;
    }
}
    
    export const addPostActionCreator =(newPostText) =>({type: ADD_POST,newPostText});
    
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const getUserProfile = (userId) => (dispatch) =>{
    usersAPI.getProfile(userId).then(response =>{
        dispatch(setUserProfile(response.data));
        
    })
}            
        
    
    
export default profileReducer;