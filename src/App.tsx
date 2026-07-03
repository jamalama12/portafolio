import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// i18n is optional. Remove I18nextProvider if i18n is not present to avoid import errors.

// Componentes
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NotFound from "./pages/NotFound";

// Proyectos
import RoboticsClubProject from "./pages/RoboticsClubProject";
import AccountantsProject from "./pages/Accountantsproject";
import DigitalMarketingAgencyProject from "./pages/DigitalMarketingAgencyProject";
import SilkRoseProject from "./pages/SilkRoseProject";
import PreppedFoodsProject from "./pages/PreppedFoodsProject";
import PrintDesignProject from "./pages/PrintDesignProject";

const queryClient = new QueryClient();

// Página de Inicio (HOME)
const HomePage = () => (
  <div className="min-h-screen">
    <Navigation />
    <Hero />
    <About />
    <Portfolio />
    <Footer />
  </div>
);

// Página de Contacto (PÁGINA SEPARADA)
const ContactPage = () => (
  <div className="min-h-screen">
    <Navigation />
    <Contact />
    <Footer />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* TODAS LAS RUTAS DE PROYECTOS */}
            <Route path="/project/robotics-club" element={<RoboticsClubProject />} />
            <Route path="/project/accountants" element={<AccountantsProject />} />
            <Route path="/project/digital-agency" element={<DigitalMarketingAgencyProject />} />
            <Route path="/project/silk-rose" element={<SilkRoseProject />} /> 
            <Route path="/project/prepped-foods" element={<PreppedFoodsProject />} /> 
            <Route path="/project/ai-design" element={<PrintDesignProject />} />
            
            {/* RUTA 404 - DEBE IR AL FINAL */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;