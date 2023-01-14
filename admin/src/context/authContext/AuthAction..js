export const loginStart = () => ({type: "LOGIN_START"})

export const loginSuccess = () => ({type: "LOGIN_SUCESS", payload: user})

export const loginFailure = () => ({type: "LOGIN_FAILURE"})
