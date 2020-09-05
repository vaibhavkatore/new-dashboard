import Constants from './Constants'

 const loginAction = (data) => dispatch => {
    dispatch({
     type: Constants.LOGIN_ACTION,
     payload: data
    })
   }

export default {
    loginAction
}