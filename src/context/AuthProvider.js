import React, { createContext } from "react";

export const AuthContext = createContext();

//children of AuthProvider is App from index.js
const AuthProvider = ({ children }) => {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export default AuthProvider;
