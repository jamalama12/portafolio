import React from 'react';

const Hero: React.FC = () => {
  // Función para manejar el clic en "Let's Connect"
  const handleConnectClick = () => {
    // Verificar si estamos en la página de contacto o en home
    if (window.location.pathname === '/contact') {
      // Ya estamos en contact, hacer scroll al formulario
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      // Si estamos en home, verificar si la sección contact existe
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        // Si existe en la misma página, hacer scroll
        contactSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        // Si no existe, ir a la página de contacto
        window.location.href = '/contact';
      }
    }
  };

  // Función para manejar el clic en "View My Work"
  const handleViewWorkClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    if (window.location.pathname === '/contact') {
      // Si estamos en contact, ir a home con hash
      window.location.href = '/#portfolio';
    } else {
      // Si estamos en home, hacer scroll suave
      const portfolioSection = document.getElementById('portfolio');
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  // Función para manejar la descarga del CV
  const handleDownloadCV = () => {
    // 🔥 ENLACE DE DESCARGA DIRECTA DE GOOGLE DRIVE
    // ID del archivo: 1Gg_GLNmJIRnsm385RegIofYGtkBNf-in
    const downloadUrl = 'https://drive.google.com/uc?export=download&id=1Gg_GLNmJIRnsm385RegIofYGtkBNf-in';
    
    // Crear un enlace temporal para la descarga
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'DIGITAL-DESIGNER-MONTSERRAT-MENDOZA.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-[#F8FCF7] to-[#F0F8EC]">
      
      {/* Círculos de gradiente */}
      <div className="absolute top-20 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-[#6AAB56]/10 to-[#94D17F]/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />
      <div className="absolute bottom-20 -right-32 w-[500px] h-[500px] bg-gradient-to-tl from-[#8DCB7A]/8 to-[#CAE8C1]/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />
      
      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        
        {/* Título final */}
        <h1 className="font-heading mb-6 leading-tight">
          <span className="block text-gray-800 text-4xl md:text-5xl lg:text-6xl mb-3">
            Howdy, <span className="inline-block animate-bounce">🤠</span>
          </span>
          <span className="block text-[#6AAB56] text-5xl md:text-6xl lg:text-7xl font-bold">
            I am Montserrat
          </span>
        </h1>
        
        {/* Subtítulo - TODO en el mismo color */}
        <p className="font-heading text-2xl md:text-3xl text-gray-900 font-normal mb-10 max-w-2xl mx-auto">
          Great at designing visual experiences
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto mb-14">
          <div className="font-body px-5 py-2.5 bg-white/90 backdrop-blur-sm rounded-full border border-[#E8F5E9] shadow-sm hover:border-[#CAE8C1] transition-all duration-200 group">
            <span className="text-[#6AAB56] font-semibold group-hover:text-[#5A9545] transition-colors duration-200">+5 years</span>
            <span className="text-gray-600 ml-1 group-hover:text-gray-700 transition-colors duration-200">of experience</span>
          </div>
          
          <div className="font-body px-5 py-2.5 bg-white/90 backdrop-blur-sm rounded-full border border-[#E8F5E9] shadow-sm hover:border-[#CAE8C1] transition-all duration-200 group">
            <span className="text-[#6AAB56] font-semibold group-hover:text-[#5A9545] transition-colors duration-200">passion</span>
            <span className="text-gray-600 ml-1 group-hover:text-gray-700 transition-colors duration-200">for design</span>
          </div>
          
          <div className="font-body px-5 py-2.5 bg-white/90 backdrop-blur-sm rounded-full border border-[#E8F5E9] shadow-sm hover:border-[#CAE8C1] transition-all duration-200 group">
            <span className="text-[#6AAB56] font-semibold group-hover:text-[#5A9545] transition-colors duration-200">remote work</span>
            <span className="text-gray-600 ml-1 group-hover:text-gray-700 transition-colors duration-200">experience</span>
          </div>
        </div>
        
        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Botón View My Work */}
          <button 
            onClick={handleViewWorkClick}
            className="font-heading px-10 py-4 bg-[#6AAB56] text-white text-lg font-medium rounded-full hover:bg-[#5A9545] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 group relative overflow-hidden focus:outline-none"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#6AAB56] to-[#7EBF69] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          {/* Botón Let's Connect */}
          <button 
            onClick={handleConnectClick}
            className="font-heading px-10 py-4 bg-white/80 backdrop-blur-sm text-gray-700 text-lg font-medium rounded-full border-2 border-[#E8F5E9] hover:border-[#6AAB56] hover:text-[#6AAB56] transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 group focus:outline-none"
          >
            <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
              Let's Connect
            </span>
          </button>
        </div>

        {/* Botón de descarga de CV - CORREGIDO */}
        <div className="mt-6">
          <button 
            onClick={handleDownloadCV}
            className="font-body px-6 py-3 bg-white/90 backdrop-blur-sm text-gray-700 text-sm font-medium rounded-full border border-[#E8F5E9] hover:border-[#6AAB56] hover:text-[#6AAB56] hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 group focus:outline-none inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Resume
          </button>
        </div>
        
        {/* Nota de herramientas */}
        <div className="mt-14">
          <div className="font-body inline-flex flex-wrap justify-center gap-6 text-gray-500 text-sm">
            <span className="flex items-center gap-2 hover:text-gray-700 transition-colors duration-200 group">
              <div className="w-2 h-2 bg-[#6AAB56] rounded-full group-hover:scale-125 transition-transform duration-200"></div>
              Adobe Creative Suite
            </span>
            <span className="flex items-center gap-2 hover:text-gray-700 transition-colors duration-200 group">
              <div className="w-2 h-2 bg-[#6AAB56] rounded-full group-hover:scale-125 transition-transform duration-200"></div>
              Figma
            </span>
            <span className="flex items-center gap-2 hover:text-gray-700 transition-colors duration-200 group">
              <div className="w-2 h-2 bg-[#6AAB56] rounded-full group-hover:scale-125 transition-transform duration-200"></div>
              Basic Frontend
            </span>
             <span className="flex items-center gap-2 hover:text-gray-700 transition-colors duration-200 group">
              <div className="w-2 h-2 bg-[#6AAB56] rounded-full group-hover:scale-125 transition-transform duration-200"></div>
              Video Editing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;