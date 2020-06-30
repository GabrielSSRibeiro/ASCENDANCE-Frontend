import React, { createContext, useState, useContext } from "react";
import api from "../services/api";
import { socket } from "../services/socket";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("user") || null);

  async function signUp(nickName, email, password, userAlreadyExists) {
    const response = await api.post("users", {
      nickName,
      email,
      password,
    });

    if (!(response.data === "")) {
      const { nickName } = response.data;
      localStorage.setItem("user", nickName);
      localStorage.setItem("password", password);

      //update socket connection
      socket.emit("login", nickName);

      setUser(nickName);
      return true;
    } else {
      alert(userAlreadyExists);
    }
  }

  async function signIn(nickName, password, userNotFound, incorrectPassword) {
    const response = await api.get("users", {
      params: { nickName, password },
    });

    if (response.data) {
      if (response.data === "incorrect") {
        alert(incorrectPassword);
      } else {
        localStorage.setItem("user", nickName);
        localStorage.setItem("password", password);

        //update socket connection
        socket.emit("login", nickName);

        setUser(nickName);
        return true;
      }
    } else {
      alert(userNotFound);
    }
  }

  function signOut() {
    localStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
