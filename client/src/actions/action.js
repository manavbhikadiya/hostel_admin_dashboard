export const login = (collegeId) => ({
    type: "LOGIN",
    payload: collegeId,
  });

export const adminData = (data) =>({
  type: "ADMIN_DATA",
  payload: data
})

export const isLoggedIn = (isLogin) =>({
  type: "IS_LOGGEDIN",
  payload: isLogin
})