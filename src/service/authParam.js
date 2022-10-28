import  request from './authService'
import loginRequest from './apiTokin'
 export const authParam  = {
    register: (data) => request.post('signUp',data),
}

export const loginApi ={
    login: (data)=> loginRequest.post('signIn',data)

}

