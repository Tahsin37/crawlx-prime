import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Features from "./pages/Features";
import HowItWorks from "./pages/HowItWorks";
import UseCases from "./pages/UseCases";
import Pricing from "./pages/Pricing";
import Docs from "./pages/Docs";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";

// Dashboard Pages
import NewCrawl from "./pages/dashboard/NewCrawl";
import Crawls from "./pages/dashboard/Crawls";
import Extractors from "./pages/dashboard/Extractors";
import APIKeys from "./pages/dashboard/APIKeys";
import Usage from "./pages/dashboard/Usage";
import Billing from "./pages/dashboard/Billing";
import Settings from "./pages/dashboard/Settings";
import Webhooks from "./pages/dashboard/Webhooks";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<Index />} />
          <Route path="/features" element={<Features />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          
          {/* Dashboard Pages */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/crawls" element={<Crawls />} />
          <Route path="/dashboard/crawls/new" element={<NewCrawl />} />
          <Route path="/dashboard/extractors" element={<Extractors />} />
          <Route path="/dashboard/api-keys" element={<APIKeys />} />
          <Route path="/dashboard/usage" element={<Usage />} />
          <Route path="/dashboard/billing" element={<Billing />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="/dashboard/webhooks" element={<Webhooks />} />
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;