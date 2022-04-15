const collegeId = "";
const adminData = {};
const isLogin = false;

export const adminReducer = (state = collegeId, action) => {
  switch (action.type) {
    case "LOGIN":
      return (state = action.payload);
    default:
      return state;
  }
};

export const adminDataReducer = (state = adminData, action) => {
  switch (action.type) {
    case "ADMIN_DATA":
      return (state = action.payload);
    default:
      return state;
  }
};

export const checkLoginReducer = (state = isLogin, action) => {
  switch (action.type) {
    case "IS_LOGGEDIN":
      return (state = action.payload);
    default:
      return state;
  }
};
