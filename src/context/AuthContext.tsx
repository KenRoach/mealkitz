// @refresh reload
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { User } from '../models/User';

export interface AuthContextType {
  currentUser: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (name: string, email: string, password: string) => Promise<void>;
}

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// A mock user database
const MOCK_USERS: { [email: string]: User & { pass: string } } = {
  'test@mealkitz.io': { name: 'Test User', email: 'test@mealkitz.io', pass: 'password123' }
};

// Create a provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const login = async (email: string, pass: string) => {
    // Simulate API call
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        const foundUser = MOCK_USERS[email];
        if (foundUser && foundUser.pass === pass) {
          setCurrentUser({ name: foundUser.name, email: foundUser.email });
          resolve();
        } else {
          reject(new Error('Invalid email or password'));
        }
      }, 500);
    });
  };

  const register = async (name: string, email: string, pass: string) => {
    // Simulate API call
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (MOCK_USERS[email]) {
          reject(new Error('User with this email already exists'));
        } else {
          const newUser = { name, email, pass };
          MOCK_USERS[email] = newUser;
          setCurrentUser({ name: newUser.name, email: newUser.email });
          resolve();
        }
      }, 500);
    });
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const value = { currentUser, login, logout, register };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a custom hook for easy consumption
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 