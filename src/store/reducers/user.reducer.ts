import { initialUserState, IUserState } from "../state/user.state";
import { UserActions, EUserAction } from '../actions/user.action';

export const userReducers = (
    state = initialUserState,
    action: UserActions
): IUserState => {
    switch(action.type) {
        case EUserAction.GetUsersSuccess: {
            return {
                ...state,
                users: action.payload
            };
        }
        case EUserAction.GetUserSuccess: {
            return {
                ...state,
                selectedUser: action.payload
            }
        }
        
        default: 
            return state
    }
};