import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, ExternalLink, Sparkles } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Robotics Club Digital Launch",
      description: "Website design and development for a robotics club, featuring modern UI and interactive elements.",
      tags: ["Web Design", "UI/UX", "WordPress"],
      category: "Web Development",
      link: "/project/robotics-club",
      color: "from-[#6AAB56]/20 via-[#94D17F]/15 to-[#CAE8C1]/10",
      accent: "#6AAB56",
      imageAlt: "Robotics Club Website Design",
      hasCaseStudy: true,
      imageUrl: "/images/portfolio-covers/robotics-club.jpg"
    },
    {
      title: "Accountants Landing Page Design and Email Campaign",
      description: "Professional website design for accounting services with clean layout and user-friendly navigation.",
      tags: ["Web Design", "Branding", "UX"],
      category: "Web Development",
      link: "/project/accountants",
      color: "from-[#2C5282]/20 via-[#4299E1]/15 to-[#BEE3F8]/10",
      accent: "#2C5282",
      imageAlt: "Accountants Website Design",
      hasCaseStudy: true,
      imageUrl: "/images/portfolio-covers/accountants.jpg"
    },
    {
      title: "Digital Marketing Agency Design",
      description: "Complete brand identity and website design for a digital marketing agency.",
      tags: ["Branding", "Web Design", "Marketing"],
      category: "Agency",
      link: "/project/digital-agency",
      color: "from-[#9F7AEA]/20 via-[#D6BCFA]/15 to-[#FAF5FF]/10",
      accent: "#9F7AEA",
      imageAlt: "Digital Marketing Agency Design",
      hasCaseStudy: true,
      imageUrl: "/images/portfolio-covers/digital-agency.jpg"
    },
    {
      title: "Shopify Beauty E-commerce Design & Branding",
      description: "Comprehensive branding and website design for a luxury brand, including logo and visual identity.",
      tags: ["Branding", "Web Design", "Luxury"],
      category: "Branding",
      link: "/project/silk-rose",
      color: "from-[#805AD5]/20 via-[#B794F4]/15 to-[#E9D8FD]/10",
      accent: "#805AD5",
      imageAlt: "Silk & Rose Brand Identity",
      hasCaseStudy: true,
      imageUrl: "/images/portfolio-covers/silk-rose.jpg"
    },
    {
      title: "Prepped Foods Website Redesign and Social Media Branding",
      description: "Interactive prototype and Figma design for a meal prep service platform.",
      tags: ["Figma", "Prototype", "UI Design"],
      category: "Food Tech",
      link: "/project/prepped-foods",
      color: "from-[#DD6B20]/20 via-[#F6AD55]/15 to-[#FEEBC8]/10",
      accent: "#DD6B20",
      imageAlt: "Prepped Foods Website Design",
      hasCaseStudy: true,
      imageUrl: "/images/portfolio-covers/prepped-foods.jpg"
    },
    {
      title: "Production & Web Design Management",
      description: "Various projects utilizing AI design tools and advanced image editing techniques.",
      tags: ["AI Design", "Image Editing", "Illustration"],
      category: "Extras",
      link: "/project/ai-design",
      color: "from-[#319795]/20 via-[#81E6D9]/15 to-[#E6FFFA]/10",
      accent: "#319795",
      imageAlt: "AI Design Projects",
      hasCaseStudy: true,
      imageUrl: "/images/portfolio-covers/ai-design.jpg"
    }
  ];

  // ... resto del código ...

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => {
            const projectCard = (
              <div 
                key={index}
                className={`group relative overflow-hidden rounded-2xl border border-[#E8F5E9] hover:border-[#CAE8C1] hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] h-full ${
                  project.link ? 'cursor-pointer' : ''
                }`}
              >
                {/* Hero visual grande - 60% de la tarjeta */}
                <div className={`h-72 relative overflow-hidden ${project.color}`}>
                  {/* Gradiente dinámico */}
                  <div className="absolute inset-0 bg-gradient-to-br opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* IMAGEN DEL PROYECTO */}
                  <div className="absolute inset-0">
                    {project.imageUrl ? (
                      <img
                        src={project.imageUrl}
                        alt={project.imageAlt}
                        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    ) : (
                      // Placeholder si no hay imagen
                      <div className="w-full h-full flex items-center justify-center bg-white/10">
                        <div className="text-center p-8">
                          <div className="text-4xl mb-4 opacity-70">🖼️</div>
                          <p className="font-body text-gray-600 text-sm bg-white/80 backdrop-blur-sm rounded-lg p-3">
                            {project.imageAlt}
                          </p>
                        </div>
                      </div>
                    )}
                    
                    {/* Overlay para mejor contraste */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-50"></div>
                  </div>
                  
                  {/* Resto del código igual... */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                      <span className="font-heading font-bold text-sm" style={{ color: project.accent }}>
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Badge "View Case Study" */}
                  {project.hasCaseStudy && (
                    <div className="absolute bottom-6 right-6">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 shadow-sm flex items-center gap-2">
                        <span className="font-body text-xs font-medium" style={{ color: project.accent }}>
                          View Case Study
                        </span>
                        <ArrowRight className="w-3 h-3" style={{ color: project.accent }} />
                      </div>
                    </div>
                  )}
                  
                  {/* Botón de vista (arriba a la derecha) */}
                  {project.link && (
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-white/20">
                        <ArrowRight className="w-5 h-5" style={{ color: project.accent }} />
                      </div>
                    </div>
                  )}
                </div>

                {/* Resto del código igual... */}
                <div className="p-7 bg-white">
                  <h3 className="font-heading text-2xl font-bold text-gray-800 mb-3 group-hover:text-[#6AAB56] transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="font-body text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="font-body text-xs px-3 py-1.5 rounded-full border"
                        style={{
                          backgroundColor: `${project.accent}10`,
                          borderColor: `${project.accent}30`,
                          color: project.accent
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {project.hasCaseStudy && (
                    <div className="flex items-center justify-between pt-4 border-t border-[#E8F5E9] group-hover:border-[#CAE8C1] transition-colors duration-300">
                      <span className="font-body text-sm font-medium text-gray-700 flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        View Detailed Case Study
                      </span>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#6AAB56] transition-colors duration-300" />
                    </div>
                  )}
                </div>

                <div 
                  className="absolute inset-0 rounded-2xl border-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ borderColor: `${project.accent}40` }}
                ></div>
              </div>
            );

            return project.link ? (
              <Link key={index} to={project.link} className="block h-full">
                {projectCard}
              </Link>
            ) : (
              <div key={index} className="h-full">
                {projectCard}
              </div>
            );
          })}
        </div>

        {/* Resto del código igual... */}
      </div>
    </section>
  );
};

export default Portfolio;