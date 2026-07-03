import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Función mejorada para scroll con fallback
  const scrollToSection = (sectionId: string) => {
    // Intentar con el ID principal
    let element = document.getElementById(sectionId);
    
    // Fallback: si no encuentra 'projects', intentar con 'portfolio'
    if (!element && sectionId === 'projects') {
      element = document.getElementById('portfolio');
    }
    
    // Fallback: si no encuentra 'about', intentar con 'about-me'
    if (!element && sectionId === 'about') {
      element = document.getElementById('about-me');
    }
    
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      console.warn(`⚠️ Element with id "${sectionId}" not found. Available IDs:`, 
        document.querySelectorAll('[id]').forEach(el => console.log(el.id))
      );
    }
  };

  // ✅ Función para manejar la navegación a secciones
  const handleSectionClick = (sectionId: string) => {
    setIsOpen(false);
    
    if (location.pathname === '/') {
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      navigate('/');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 300);
    }
  };

  // ✅ Función para ir a Home
  const goHome = () => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // ✅ Función para descargar el CV
  const handleDownloadCV = () => {
    const downloadUrl = 'https://drive.google.com/uc?export=download&id=1Gg_GLNmJIRnsm385RegIofYGtkBNf-in';
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'DIGITAL-DESIGNER-MONTSERRAT-MENDOZA.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // ✅ Función para manejar el clic en "Hire Me"
  const handleHireMe = () => {
    setIsOpen(false);
    if (location.pathname === '/contact') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const navbarHeight = 80;
        const elementPosition = contactSection.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      navigate('/contact');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg py-1 md:py-2' 
        : 'bg-transparent py-2 md:py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-10 md:h-12">
          
          {/* Logo */}
          <button onClick={goHome} className="flex items-center space-x-1.5 md:space-x-3 group focus:outline-none">
            <div className="w-6 h-6 md:w-10 md:h-10 bg-[#6AAB56] rounded-md md:rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300 shadow-sm">
              <span className="text-white font-bold text-xs md:text-lg font-heading">M</span>
            </div>
            <span className="hidden xs:inline text-lg md:text-2xl font-bold text-gray-800 font-heading group-hover:text-[#6AAB56] transition-colors duration-300">
              Montserrat
            </span>
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            <button onClick={goHome} className="font-body text-gray-700 hover:text-[#6AAB56] px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300">
              Home
            </button>
            <button onClick={() => handleSectionClick('projects')} className="font-body text-gray-700 hover:text-[#6AAB56] px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300">
              Projects
            </button>
            <button onClick={() => handleSectionClick('about')} className="font-body text-gray-700 hover:text-[#6AAB56] px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300">
              About
            </button>
            <button onClick={handleDownloadCV} className="font-body text-gray-700 hover:text-[#6AAB56] px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1">
              Resume
              <Download className="w-3 h-3" />
            </button>
            <button onClick={handleHireMe} className="font-body ml-2 px-4 py-2 bg-[#6AAB56] text-white rounded-full hover:bg-[#5A9545] transition-all duration-300 text-sm font-medium">
              Hire Me
            </button>
          </div>

          {/* Mobile Menu */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700 hover:text-[#6AAB56] p-1.5 rounded-lg focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-lg shadow-xl border-t border-gray-100">
          <div className="px-3 pt-2 pb-3 space-y-1">
            <button onClick={goHome} className="block w-full text-left text-gray-700 hover:text-[#6AAB56] px-3 py-2 rounded-lg text-sm font-medium">
              Home
            </button>
            <button onClick={() => handleSectionClick('projects')} className="block w-full text-left text-gray-700 hover:text-[#6AAB56] px-3 py-2 rounded-lg text-sm font-medium">
              Projects
            </button>
            <button onClick={() => handleSectionClick('about')} className="block w-full text-left text-gray-700 hover:text-[#6AAB56] px-3 py-2 rounded-lg text-sm font-medium">
              About
            </button>
            <button onClick={() => { handleDownloadCV(); setIsOpen(false); }} className="w-full text-left text-gray-700 hover:text-[#6AAB56] px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
              Resume
              <Download className="w-4 h-4" />
            </button>
            <button onClick={handleHireMe} className="block w-full text-center mt-2 px-4 py-2 bg-[#6AAB56] text-white rounded-full hover:bg-[#5A9545] transition-all duration-300 text-sm font-medium">
              Hire Me
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;