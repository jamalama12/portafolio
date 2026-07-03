import React from 'react';
import { Briefcase, Award, GraduationCap, Monitor, Palette, PenTool, Brush, Users } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: <Monitor className="w-5 h-5" />, title: "UI/UX", items: "Figma, Adobe XD, Design Systems" },
    { icon: <Palette className="w-5 h-5" />, title: "Design", items: "Photoshop, Illustrator, InDesign" },
    { icon: <PenTool className="w-5 h-5" />, title: "Motion", items: "Premiere Pro, After Effects" },
    { icon: <Brush className="w-5 h-5" />, title: "Extras", items: "AI Design, Illustration, WordPress" },
  ];

  const certifications = [
    { 
      name: "Google User Experience (UX) Design", 
      issuer: "Coursera (2025)",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/VURSUMM70M1T?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof",
      color: "from-[#6AAB56]/10 to-[#6AAB56]/5"
    },
    { 
      name: "HTML, CSS & JavaScript", 
      issuer: "Alura (2024)",
      link: "https://app.aluracursos.com/certificate/6d91b1b9-6c8d-4d05-a246-d91d5c13b949?lang",
      color: "from-[#8DCB7A]/10 to-[#94D17F]/5"
    },
    { 
      name: "User Experience: Beginner's Guide", 
      issuer: "Interaction Design Foundation (2024)",
      link: "https://www.interaction-design.org/members/montserrat-mendoza-perea/certificate/course/789bbcbd-9bcb-48e6-8011-3cd5bfd3dcf4",
      color: "from-[#7EBF69]/10 to-[#A8D897]/5"
    },
    { 
      name: "Community Manager Expert", 
      issuer: "Certjoin (2024)",
      link: "https://badges.parchment.com/public/assertions/HYbHA0VTRNO-I12XV0QSlA",
      color: "from-[#A8D897]/10 to-[#CAE8C1]/5"
    },
  ];

  // Función para manejar el clic en "Let's Work Together"
  function handleWorkTogetherClick(e: { preventDefault: () => void; }) {
    e.preventDefault();

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
  }

  // Función para manejar el clic en "View My Portfolio"
  const handlePortfolioClick = (e: { preventDefault: () => void; }) => {
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

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Solo foto de perfil centrada */}
        <div className="flex justify-center mb-16">
          <div className="relative group">
            {/* Contenedor circular con efecto hover */}
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#6AAB56]/20 shadow-xl bg-white relative transform transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl">
              {/* TU FOTO DE PERFIL */}
              <img
                src="/images/about/profile-photo.jpg"
                alt="Montserrat Mendoza - UI/UX Designer"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay con gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Efecto de borde animado */}
              <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-[#6AAB56]/30 transition-all duration-500"></div>
            </div>
            
            {/* Badge de certificación */}
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-[#6AAB56] rounded-full flex items-center justify-center shadow-lg border-4 border-white z-10 group-hover:scale-110 transition-transform duration-300">
              <Award className="w-8 h-8 text-white" />
            </div>
            
            {/* Elemento decorativo */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#6AAB56]/10 rounded-full -z-10 group-hover:scale-125 transition-transform duration-700"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#94D17F]/10 rounded-full -z-10 group-hover:scale-125 transition-transform duration-700 delay-150"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Experience & Skills */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-[#6AAB56]/10 rounded-lg flex items-center justify-center mr-4">
                <Briefcase className="w-6 h-6 text-[#6AAB56]" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-gray-800">
                Professional Experience
              </h3>
            </div>
            
            <p className="font-body text-gray-600 text-lg leading-relaxed mb-8">
              With over 7 years in the design industry, I've honed my skills in UI/UX design, 
              team leadership, and remote collaboration. Fluent in English (C1 level), 
              I'm equipped to work in international environments and lead cross-cultural teams.
            </p>
            
            {/* Skills Section */}
            <div className="mb-10">
              <h4 className="font-heading text-xl font-semibold text-gray-800 mb-6">Core Skills</h4>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-xl p-4 text-center border border-[#E8F5E9] hover:border-[#CAE8C1] hover:shadow-md transition-all duration-300 group hover:bg-[#faf7f5]"
                  >
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-[#6AAB56]/10 rounded-lg text-[#6AAB56] mb-3 group-hover:bg-[#6AAB56]/20 transition-colors">
                      {skill.icon}
                    </div>
                    <h4 className="font-heading font-semibold text-gray-800 text-sm mb-1">{skill.title}</h4>
                    <p className="font-body text-gray-600 text-xs">{skill.items}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Section */}
            <div className="bg-white rounded-2xl p-6 border border-[#E8F5E9] shadow-sm hover:shadow-lg transition-all duration-300 hover:bg-[#faf7f5]">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-[#6AAB56]/10 rounded-lg flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-[#6AAB56]" />
                </div>
                <h4 className="font-heading text-xl font-semibold text-gray-800">Languages</h4>
              </div>
              <ul className="font-body text-gray-600 space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#6AAB56] rounded-full mr-3"></div>
                  Spanish (Native)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#6AAB56] rounded-full mr-3"></div>
                  English (C1 – IELTS 2021)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#6AAB56] rounded-full mr-3"></div>
                  French (A1)
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Education & Certifications */}
          <div className="space-y-8">
            {/* Education Card */}
            <div className="bg-white rounded-2xl p-6 border border-[#E8F5E9] hover:shadow-lg transition-all duration-300 shadow-sm hover:bg-[#faf7f5]">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#6AAB56]/10 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-7 h-7 text-[#6AAB56]" />
                  </div>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-semibold text-gray-800 mb-2">Education</h4>
                  <p className="font-body text-gray-700 font-medium">Bachelor's Degree in Graphic Design</p>
                  <p className="font-body text-gray-600 text-sm">Universidad Anáhuac Querétaro — Mexico</p>
                  <p className="font-body text-gray-500 text-sm mt-2">
                    Specialized in visual communication, brand identity, and digital media design.
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications Card - SIN ÍCONO EN TÍTULO */}
            <div className="bg-white rounded-2xl p-6 border border-[#E8F5E9] hover:shadow-lg transition-all duration-300 shadow-sm hover:bg-[#faf7f5]">
              {/* Certifications Header - Sin ícono */}
              <div className="mb-6">
                <h4 className="font-heading text-lg font-semibold text-gray-800 mb-1">Certifications</h4>
                <p className="font-body text-gray-600 text-sm">Continuous learning in design & technology</p>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {certifications.map((cert, index) => (
                  <a 
                    key={index}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-4 p-4 rounded-xl bg-white border border-[#E8F5E9] hover:border-[#6AAB56] hover:shadow-md transition-all duration-300 hover:bg-[#faf7f5]`}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-lg bg-white flex items-center justify-center border border-[#E8F5E9] group-hover:border-[#6AAB56] transition-colors shadow-sm">
                        <div className="w-10 h-10 rounded-md bg-gradient-to-br from-[#6AAB56]/20 to-[#6AAB56]/10 flex items-center justify-center">
                          <Award className="w-5 h-5 text-[#6AAB56]" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-heading font-semibold text-gray-800 text-sm mb-1 group-hover:text-[#6AAB56] transition-colors">
                        {cert.name}
                      </h5>
                      <p className="font-body text-gray-600 text-xs">{cert.issuer}</p>
                      <div className="flex items-center mt-1">
                        <span className="font-body text-[#6AAB56] text-xs font-medium flex items-center">
                          View Certificate
                          <svg className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Remote Work Note */}
            <div className="bg-white rounded-2xl p-6 border border-[#E8F5E9] shadow-sm hover:shadow-lg transition-all duration-300 hover:bg-[#faf7f5]">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#6AAB56]/10 rounded-lg flex items-center justify-center mr-4">
                  <Briefcase className="w-6 h-6 text-[#6AAB56]" />
                </div>
                <div>
                  <h5 className="font-heading font-semibold text-gray-800 mb-1">Remote Work Ready</h5>
                  <p className="font-body text-gray-600 text-sm">
                    Experienced in distributed teams across different time zones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button 
              onClick={handleWorkTogetherClick}
              className="font-heading px-8 py-3 bg-[#6AAB56] text-white rounded-full hover:bg-[#5A9545] transition-all duration-300 text-lg font-medium shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 inline-flex items-center justify-center group focus:outline-none"
            >
              Let's Work Together
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <button 
              onClick={handlePortfolioClick}
              className="font-heading px-8 py-3 bg-white text-gray-700 rounded-full border-2 border-[#E8F5E9] hover:border-[#6AAB56] hover:text-[#6AAB56] transition-all duration-300 text-lg font-medium shadow-sm hover:shadow-md hover:scale-105 active:scale-95 inline-flex items-center justify-center focus:outline-none"
            >
              View My Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;