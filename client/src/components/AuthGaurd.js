import React, { useEffect, useState } from "react";
import Login from "./Login";

const AuthGaurd = ({children}) => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("loginToken")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  if (isLogin) {
    return <>{children}</>
  } else {
    return <Login/>
  }
};

export default AuthGaurd;
