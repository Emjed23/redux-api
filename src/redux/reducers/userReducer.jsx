import { ADD_USER, DELETE_USER, GET_USER,EDIT_USER } from "../constants/constants";

export const userReducer=(state={users:[]},{type,payload})=>{
switch (type) {
    case GET_USER:
     return {...state,users:payload}
    case ADD_USER:
        return {users:[...state.users,payload]}
    case DELETE_USER:
        return {users: state.users.filter((user)=>user.id!==payload)}
    default:
        return state;
        case EDIT_USER:
            return {users: state.users.filter((user)=>user.id!==payload)}
}

}