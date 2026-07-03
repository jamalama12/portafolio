import React from 'react';
import { Heart, Mail, CheckCircle, Clock, Globe, ArrowUp, Linkedin } from 'lucide-react';
// Importamos el ícono de Behance (si no existe en lucide-react, usamos un SVG personalizado)
// Como lucide-react no tiene Behance, lo agregamos manualmente

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const benefits = [
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Clear Communication",
      description: "Regular updates and transparent process"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Timely Delivery",
      description: "Meeting deadlines with quality work"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Remote Expertise",
      description: "Seamless collaboration across time zones"
    }
  ];

  // Ícono de Behance personalizado
  const BehanceIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 7H15V9H22V7ZM22 12H15V14H22V12ZM20.5 15.8C19.7 16.5 18.7 17 17.5 17C14.6 17 13 15.3 13 12.5C13 9.8 14.6 8 17.5 8C19.1 8 20.3 8.6 21.1 9.6L19.3 11.1C18.8 10.5 18.2 10.1 17.5 10.1C16.2 10.1 15.4 11 15.4 12.5C15.4 14 16.2 14.9 17.5 14.9C18.3 14.9 18.9 14.5 19.3 14L20.5 15.8ZM7 8H1V16H7.5C9.5 16 11 14.7 11 12C11 9.3 9.4 8 7 8ZM3 10H6.8C7.8 10 8.5 10.7 8.5 12C8.5 13.3 7.8 14 6.8 14H3V10ZM22 3H14V5H22V3Z" />
    </svg>
  );

  return (
    <footer id="work-with-me" className="bg-white border-t border-[#E8F5E9]">
      {/* Sección persuasiva */}
      <div className="py-16 bg-gradient-to-b from-white to-[#faf7f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Título en font-body (Quicksand) con Montserrat y gray-900 */}
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-gray-900 mb-4 font-normal tracking-tight">
              Why Work With Me
            </h2>
            <p className="font-body text-gray-600 text-lg max-w-2xl mx-auto">
              Ready to bring your vision to life? Let's create something amazing together.
            </p>
          </div>

          {/* Beneficios */}
          <div className="mb-12">
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 border border-[#E8F5E9] hover:border-[#CAE8C1] hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#6AAB56]/10 rounded-lg text-[#6AAB56] mb-4 group-hover:bg-[#6AAB56]/20 transition-colors">
                    {benefit.icon}
                  </div>
                  <h4 className="font-heading font-bold text-gray-800 text-lg mb-2">
                    {benefit.title}
                  </h4>
                  <p className="font-body text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <a 
              href="/contact"
              className="font-heading inline-flex items-center gap-3 px-10 py-4 bg-[#6AAB56] text-white rounded-full hover:bg-[#5A9545] transition-all duration-300 text-lg font-medium shadow-lg hover:shadow-xl hover:scale-105 group"
            >
              Start Your Project
              <ArrowUp className="w-5 h-5 transform rotate-45 group-hover:rotate-90 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer inferior */}
      <div className="py-8 bg-[#faf7f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="font-body text-gray-600 text-sm flex items-center">
              © {currentYear} Montserrat Mendoza. All rights reserved.
              <Heart className="w-3 h-3 mx-2 text-[#6AAB56]" style={{ fill: '#6AAB56' }} />
              Crafted with care
            </div>

            {/* Redes sociales y contacto */}
            <div className="flex items-center gap-4 flex-wrap justify-center">
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/montserrat-mendozaui/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-gray-700 hover:text-[#6AAB56] transition-colors duration-300 text-sm flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#E8F5E9] hover:border-[#CAE8C1]"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>

              {/* Behance - NUEVO */}
              <a 
                href="https://www.behance.net/monchmendoza"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-gray-700 hover:text-[#6AAB56] transition-colors duration-300 text-sm flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#E8F5E9] hover:border-[#CAE8C1]"
              >
                <BehanceIcon />
                Behance
              </a>

              {/* Email */}
              <a 
                href="mailto:designmindux@gmail.com"
                className="font-body text-gray-700 hover:text-[#6AAB56] transition-colors duration-300 text-sm flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#E8F5E9] hover:border-[#CAE8C1]"
              >
                <Mail className="w-4 h-4" />
                designmindux@gmail.com
              </a>
            </div>

            {/* Back to top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-body text-gray-600 hover:text-[#6AAB56] transition-colors duration-300 text-sm flex items-center gap-2"
            >
              Back to top
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;