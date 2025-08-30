//TODO: temp file and unsecure
import { useState, useCallback } from "react";
import { AuthContext } from "./AuthContext";
import { users } from "../dummy"; //TODO: Replace with backend api

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = useCallback((username) => {
    //TODO: replace with backend api callback
    const foundUser = users.find((u) => u.name === username);
    if (foundUser) {
      setUser(foundUser);
      return foundUser;
    }

    return null;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const isLoggedIn = !!user;
  const role = user?.role ?? null;

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        role,
        login,
        logout,
        isAdmin: role === "admin" || role === "owner",
        isOwner: role === "owner",
        isWriter: role === "writer",
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
