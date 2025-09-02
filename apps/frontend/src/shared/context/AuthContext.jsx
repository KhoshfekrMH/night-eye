import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  user: null,
  role: null,
  login: () => {},
  logout: () => {},
  isAdmin: false,
  isOwner: false,
  isWriter: false,
});
