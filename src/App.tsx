import { Toaster } from "@/components/ui/toaster"; // Original Toaster from shadcn
import { Toaster as Sonner } from "@/components/ui/sonner"; // Sonner for richer notifications
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Page Imports
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import ApplicationHomePage from "./pages/ApplicationHomePage";
import NotFound from "./pages/NotFound"; // Assuming NotFound.tsx exists

const queryClient = new QueryClient();

const App = () => {
  console.log("App component rendered, router setup.");
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster /> {/* Shadcn Toaster */}
        <Sonner richColors position="top-right" /> {/* Sonner Toaster */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} /> 
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} /> 
            {/* Consider /reset-password/:token for real applications */}
            <Route path="/app-home" element={<ApplicationHomePage />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;