import Constants from './Constants';

const INITIAL_STATE = {
    success: false,
    loginData:{}
}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Constants.LOGIN_ACTION:
   
        
            return {
                ...state,
                loginData: action.payload,
            };

        
        default:
            return state;
    }
}