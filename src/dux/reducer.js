import axios from 'axios'


const initialState = {
    username: {},
    id: {},
    profilePicture: {}
}

const UPDATE_USER = 'UPDATE_USER'
export function updateUser(username, id, profilePicture){
    return{
        type: UPDATE_USER,
        payload: {username, id, profilePicture}
    }
}



export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case UPDATE_USER:
            return{payload}
            default:
                return state;
    }
}