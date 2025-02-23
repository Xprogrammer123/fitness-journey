
import React, { createContext, useContext, useState, useCallback } from "react";

interface AuthContextType {
  user: string | null;
  login: (name: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<string | null>(() => {
    // Check if there's a stored user in localStorage
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = useCallback(async (name: string) => {
    try {
      // Simulate an API call with a delay
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      // Validate name
      if (!name || name.length < 2) {
        throw new Error("Invalid name");
      }

      // Store user in localStorage for persistence
      localStorage.setItem("user", JSON.stringify(name));
      setUser(name);
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      // Simulate an API call with a delay
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      // Clear stored user data
      localStorage.removeItem("user");
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
