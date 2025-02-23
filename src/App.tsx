
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { useAuth } from "./context/AuthContext";
import { Sidebar } from "./components/Sidebar";
import Index from "./pages/Index";
import Login from "./pages/Login";

const queryClient = new QueryClient();

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Sidebar />
      <main className="flex-1">{children}</main>
    </div>
  );
};

// App Layout Component
const AppLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Index />
                  </ProtectedRoute>
                }
              />
              {/* Add placeholder routes for sidebar navigation */}
              {["/workouts", "/schedule", "/progress", "/settings"].map((path) => (
                <Route
                  key={path}
                  path={path}
                  element={
                    <ProtectedRoute>
                      <div className="p-8">
                        <h1 className="text-3xl font-bold text-white">
                          {path.slice(1).charAt(0).toUpperCase() + path.slice(2)} Page
                        </h1>
                        <p className="text-gray-400 mt-2">
                          This is a placeholder page for {path.slice(1)}
                        </p>
                      </div>
                    </ProtectedRoute>
                  }
                />
              ))}
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default AppLayout;
