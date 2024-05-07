import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type user = {
  name: string;
  email: string;
};

type userAuth = {
  isLoggedIn: boolean;
  user: user | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<userAuth | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<user | null>(null);
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {

  }, [])
  
  const login = async (email: string, password: string) => {};
  const signup = async (email: string, name: string, password: string) => {};
  const logout = async () => {};

  const value = {
    user,
    isLoggedIn,
    login,
    logout,
    signup,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

export const useAuth = () => useContext(AuthContext);
