import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import HomeInsurance from "./pages/HomeInsurance";
import CarPurchase from "./pages/CarPurchase";
import CarSale from "./pages/CarSale";
import CarCalculator from "./pages/CarCalculator";
import SchoolInsurance from "./pages/SchoolInsurance";
import TravelInsurance from "./pages/TravelInsurance";
import Assistance from "./pages/Assistance";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/ubezpieczenie-domu" element={<HomeInsurance />} />
          <Route path="/zgloszenie-zakupu" element={<CarPurchase />} />
          <Route path="/zgloszenie-sprzedazy" element={<CarSale />} />
          <Route path="/kalkulator-oc-ac" element={<CarCalculator />} />
          <Route path="/ubezpieczenia-szkolne" element={<SchoolInsurance />} />
          <Route path="/ubezpieczenia-turystyczne" element={<TravelInsurance />} />
          <Route path="/assistance" element={<Assistance />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
