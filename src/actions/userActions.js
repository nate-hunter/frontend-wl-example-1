import { LOGIN_USER } from '../Constants'
// Sends the user's info to the backend to be verified
export const userPostFetch = user => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({ user })
    })
    .then(resp => resp.json())
    .then(userObj => {
      if (!userObj.message) {
        localStorage.setItem("token", userObj.jwt)
        dispatch(loginUser(userObj.user))
        debugger
      }
    })
  }
}


const loginUser = userObj => ({
  type: LOGIN_USER,
  payload: userObj
})
