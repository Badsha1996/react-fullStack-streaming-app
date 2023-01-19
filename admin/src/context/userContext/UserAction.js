// FETCH MOVIES 
export const getUserStart = () => ({type: "GET_USER_START"})

export const getUserSuccess = (user) => ({type: "GET_USER_SUCCESS", payload: user})

export const getUserFailure = () => ({type: "GET_USER_FAILURE"})


// // UPDATE MOVIES 
export const updateUserStart = () => ({type: "UPDATE_MOVIE_START"})

export const updateUserSuccess = (user) => ({type: "UPDATE_MOVIE_SUCCESS", payload: user})

export const updateUserFailure = () => ({type: "UPDATE_MOVIE_FAILURE"})

// // DELETE MOVIES
export const deleteUserStart = () => ({type: "DELETE_MOVIE_START"})

export const deleteUserSuccess = (id) => ({type: "DELETE_MOVIE_SUCCESS", payload: id})

export const deleteUserFailure = () => ({type: "DELETE_MOVIE_FAILURE"})

