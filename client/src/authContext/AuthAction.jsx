// register
export const registerStart = () => ({type: "REGISTER_START"})

export const registerSuccess = (user) => ({type: "REGISTER_SUCESS", payload: user})

export const registerFailure = () => ({type: "REGISTER_FAILURE"})


// login
export const loginStart = () => ({type: "LOGIN_START"})

export const loginSuccess = (user) => ({type: "LOGIN_SUCESS", payload: user})

export const loginFailure = () => ({type: "LOGIN_FAILURE"})

// logout 
export const logout = () => ({type: "LOGOUT"})

