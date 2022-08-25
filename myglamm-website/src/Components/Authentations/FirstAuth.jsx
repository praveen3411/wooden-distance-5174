import { Box } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

export const FirstAuthContext = React.createContext();
let initail = {
  isAuth: false,
  token: null,
};
export default function Newlycreatedauthcontext({ children }) {
  const [state, setState] = useState(initail);
  let isLogin = (token) => {
    setState({
      ...state,
      isAuth: true,
      token: token,
    });
  };
  let isLogout = (token) => {
    setState({
      ...state,
      isAuth: false,
      token: token,
    });
  };
  return (
    <Box>
      <FirstAuthContext.Provider value={{ state, isLogin, isLogout }}>
        {children}
      </FirstAuthContext.Provider>
    </Box>
  );
}
