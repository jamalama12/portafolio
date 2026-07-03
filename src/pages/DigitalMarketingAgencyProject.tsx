import React from 'react';
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Target,
  Users,
  ShoppingBag,
  Sparkles,
  Layers,
  ExternalLink,
  Clock,
  Briefcase,
  Wrench,
  Globe,
  Workflow,
  Mail,
  CheckCircle,
  ArrowUp,
  Linkedin,
  Lightbulb,
  Zap,
  MapPin,
  TrendingUp,
  ChevronRight,
  Rocket,
  Cpu,
  Monitor,
  Calendar,
  ShoppingCart,
  Clock as ClockIcon,
  MapPin as MapIcon,
  Instagram,
  Palette,
  Copy,
  Check,
  Menu,
  X,
  Download,
  Heart,
  Crown,
  Gem,
  Star,
  FolderOpen
} from "lucide-react";
import { Button } from "@/components/ui/button";

const DigitalMarketingAgencyProject = () => {
  // Navigation states
  const [scrolled, setScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [copiedColor, setCopiedColor] = React.useState<string | null>(null);
  const [activeTab, setActiveTab] = React.useState<"colors" | "typography" | "components">("colors");
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  /* ================= NAVIGATION ================= */
  
  const navItems = [
    { name: "Home", href: "#home", onClick: () => window.location.href = "/" },
    { name: "Projects", href: "#projects", onClick: () => window.location.href = "/#projects" },
    { name: "About", href: "#about", onClick: () => window.location.href = "/#about" },
    { name: "Resume", icon: <Download className="w-4 h-4 ml-1" />, onClick: () => {
      const link = document.createElement('a');
      link.href = '/resume.pdf';
      link.download = 'Montserrat_Mendoza_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }},
  ];

  /* ================= GALLERY DATA ================= */
  const galleryImages = [
    // Website Design - 6 imágenes con nombres CORRECTOS
    { id: 1, title: "Homepage Design", url: "/images/digital-marketing-agency/website-homepage.jpg", category: "website", type: "image" },
    { id: 2, title: "Services Section", url: "/images/digital-marketing-agency/website-services.jpg", category: "website", type: "image" },
    { id: 3, title: "Portfolio Showcase", url: "/images/digital-marketing-agency/website-portfolio.jpg", category: "website", type: "image" },
    { id: 4, title: "Testimonials Section", url: "/images/digital-marketing-agency/website-testimonials.jpg", category: "website", type: "image" },
    { id: 5, title: "About Us Page", url: "/images/digital-marketing-agency/website-about.jpg", category: "website", type: "image" },
    { id: 6, title: "Contact Section", url: "/images/digital-marketing-agency/website-contact.jpg", category: "website", type: "image" },
    
    // Presentation & Brand Guidelines - 2 imágenes
    { id: 7, title: "Client Presentation Deck", url: "/images/digital-marketing-agency/presentation-deck.jpg", category: "presentation", type: "image" },
    { id: 8, title: "Brand Guidelines", url: "/images/digital-marketing-agency/brand-guidelines.jpg", category: "brand", type: "image" },
    
    // Social Media Banners - 4 imágenes (4 GIFs ahora)
    { id: 9, title: "Social Media Animation", url: "/images/digital-marketing-agency/social-1.gif", category: "social", type: "gif", format: "square" },
    { id: 10, title: "Brand Story Loop", url: "/images/digital-marketing-agency/social-2.gif", category: "social", type: "gif", format: "square" },
    { id: 11, title: "Campaign Reminder", url: "/images/digital-marketing-agency/social-3.gif", category: "social", type: "gif", format: "square" },
    { id: 12, title: "Promotional Video", url: "/images/digital-marketing-agency/social-4.gif", category: "social", type: "gif", format: "square" },
  ];

  /* ================= PROJECT DATA ================= */

  const objectives = [
    { icon: ShoppingCart, text: "Streamlined visual materials for marketing campaigns" },
    { icon: ClockIcon, text: "Consistent brand identity across all platforms" },
    { icon: Zap, text: "Engaging social media content (static + animated)" },
    { icon: MapIcon, text: "Cohesive website design aligned with brand guidelines" },
    { icon: Users, text: "Professional client presentations and pitch decks" }
  ];

  const processSteps = [
    { title: "Discovery", icon: Target, points: ["Analyze campaign objectives", "Understand target audience"], color: "#ff4a6b" },
    { title: "Visual Design", icon: Palette, points: ["Establish typography & color systems", "Create visual hierarchy"], color: "#3B2F93" },
    { title: "Refinement", icon: Lightbulb, points: ["Collaborate with teams", "Optimize for clarity and impact"], color: "#b24a5d" },
    { title: "Delivery", icon: Rocket, points: ["Multi-platform adaptation", "Final asset delivery"], color: "#ff4a6b" }
  ];

  const solutions = [
    { icon: Monitor, title: "Website Enhancements", description: "Improved UI/UX and visual consistency across platforms" },
    { icon: Instagram, title: "Social Media Assets", description: "Static posts and 2D animated content for engagement" },
    { icon: Palette, title: "Brand Guidelines", description: "Comprehensive visual identity system for brand coherence" },
    { icon: Layers, title: "Stationary Design", description: "Professional business cards, letterheads, and envelopes" },
    { icon: Briefcase, title: "Corporate Materials", description: "Brochures, flyers, and internal communication assets" },
    { icon: Sparkles, title: "Presentations", description: "Impactful pitch decks and client-facing presentation templates" }
  ];

  const results = [
    { value: "Consistent", label: "Brand identity maintained across all touchpoints" },
    { value: "Engaging", label: "Social media content increased audience interaction" },
    { value: "Professional", label: "Presentations enhanced client communication" },
    { value: "Scalable", label: "Design systems adaptable for future campaigns" }
  ];

  const tools = ["Figma", "Adobe Creative Suite", "After Effects"];
  const benefits = [
    { icon: <CheckCircle className="w-5 h-5" />, title: "Clear Communication", description: "Regular updates and transparent process" },
    { icon: <Clock className="w-4 h-4" />, title: "Timely Delivery", description: "Meeting deadlines with quality work" },
    { icon: <Globe className="w-5 h-5" />, title: "Remote Expertise", description: "Seamless collaboration across time zones" }
  ];

  /* ================= STYLE GUIDE DATA ================= */
  const colorPalette = [
    { name: "Neon Passion", hex: "#ff4a6b", opacities: [{ value: "#ff4a6b", label: "100%" }, { value: "rgba(255,74,107,0.8)", label: "80%" }, { value: "rgba(255,74,107,0.6)", label: "60%" }] },
    { name: "Royal Eclipse", hex: "#3B2F93", opacities: [{ value: "#3B2F93", label: "100%" }, { value: "rgba(59,47,147,0.8)", label: "80%" }, { value: "rgba(59,47,147,0.6)", label: "60%" }] },
    { name: "Midnight Void", hex: "#000000", opacities: [{ value: "#000000", label: "100%" }, { value: "rgba(0,0,0,0.8)", label: "80%" }, { value: "rgba(0,0,0,0.6)", label: "60%" }] },
    { name: "Pure Alabaster", hex: "#ffffff", opacities: [{ value: "#ffffff", label: "100%" }, { value: "rgba(255,255,255,0.8)", label: "80%" }, { value: "rgba(255,255,255,0.6)", label: "60%" }] },
    { name: "Misted Amethyst", hex: "#D6D1F1", opacities: [{ value: "#D6D1F1", label: "100%" }, { value: "rgba(214,209,241,0.8)", label: "80%" }, { value: "rgba(214,209,241,0.6)", label: "60%" }] },
    { name: "Faded Rose", hex: "#b24a5d", opacities: [{ value: "#b24a5d", label: "100%" }, { value: "rgba(178,74,93,0.8)", label: "80%" }, { value: "rgba(178,74,93,0.6)", label: "60%" }] },
    { name: "Shadow Veil", hex: "#1a1a1a", opacities: [{ value: "#1a1a1a", label: "100%" }, { value: "rgba(26,26,26,0.8)", label: "80%" }, { value: "rgba(26,26,26,0.6)", label: "60%" }] },
    { name: "Storm Cloud", hex: "#4a4a4a", opacities: [{ value: "#4a4a4a", label: "100%" }, { value: "rgba(74,74,74,0.8)", label: "80%" }, { value: "rgba(74,74,74,0.6)", label: "60%" }] },
  ];

  // Typography for Style Guide only (Gilroy & Helvetica)
  const typography = [
    {
      family: "Gilroy",
      styles: [
        { name: "H1 / Display", example: "Digital Marketing", size: "96px", weight: "700", usage: "Hero titles & brand statements", lineHeight: "1.1" },
        { name: "H2 / Section Titles", example: "Our Process", size: "48px", weight: "600", usage: "Section headings & major titles", lineHeight: "1.2" },
        { name: "H3 / Subheadings", example: "Design Philosophy", size: "32px", weight: "600", usage: "Subheadings & card titles", lineHeight: "1.3" },
      ],
    },
    {
      family: "Helvetica",
      styles: [
        { name: "Body Regular", example: "Creating compelling visual content for digital marketing campaigns that resonate with target audiences and drive engagement across multiple platforms.", size: "18px", weight: "400", usage: "Paragraph text & descriptions", lineHeight: "1.6" },
        { name: "Body Small", example: "Supporting text and secondary information", size: "14px", weight: "400", usage: "Captions, footnotes, meta information", lineHeight: "1.5" },
        { name: "Navigation & Buttons", example: "View Work", size: "16px", weight: "500", usage: "Navigation links & button text", lineHeight: "1" },
        { name: "Bold Emphasis", example: "Important information", size: "18px", weight: "700", usage: "Emphasized text & key points", lineHeight: "1.5" },
      ],
    },
  ];

  const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedColor(value);
    setTimeout(() => setCopiedColor(null), 1500);
  };

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    if (sectionId === 'home') {
      window.location.href = "/";
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  const handleHomeClick = () => {
    window.location.href = "/";
  };

  const handleHireMe = () => {
    window.location.href = "/#contact";
  };

  const currentYear = new Date().getFullYear();

  // Scroll effect for navbar
  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen" style={{ 
      fontFamily: "'Quicksand', sans-serif",
      backgroundColor: '#FDFFF8'
    }}>
      
      {/* ================= NAVIGATION ================= */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg py-1 md:py-2' 
          : 'bg-transparent py-2 md:py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-10 md:h-12">
            <button onClick={handleHomeClick} className="flex items-center space-x-1.5 md:space-x-3 group focus:outline-none">
              <div className="w-6 h-6 md:w-10 md:h-10 bg-gradient-to-br from-[#ff4a6b] to-[#3B2F93] rounded-md md:rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300 shadow-sm">
                <span className="text-white font-bold text-xs md:text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>M</span>
              </div>
              <span className="hidden xs:inline text-lg md:text-2xl font-bold text-gray-800 group-hover:text-[#ff4a6b] transition-colors duration-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Montserrat
              </span>
            </button>
            
            <div className="hidden md:block">
              <div className="ml-8 flex items-baseline space-x-1">
                {navItems.map((item) => (
                  <button key={item.name} onClick={item.onClick}
                    className="text-gray-700 hover:text-[#ff4a6b] px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 relative group flex items-center focus:outline-none"
                    style={{ fontFamily: "'Quicksand', sans-serif" }}>
                    {item.name}
                    {item.icon}
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#ff4a6b] rounded-full group-hover:w-3/4 transition-all duration-300"></span>
                  </button>
                ))}
                <button onClick={handleHireMe}
                  className="ml-3 px-4 py-2 bg-gradient-to-r from-[#ff4a6b] to-[#b24a5d] text-white rounded-full hover:shadow-lg transition-all duration-300 text-sm font-medium shadow hover:-translate-y-0.5 focus:outline-none"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}>
                  Hire Me
                </button>
              </div>
            </div>
            
            <div className="flex items-center space-x-1 md:hidden">
              <button onClick={handleHireMe}
                className="px-3 py-1.5 bg-gradient-to-r from-[#ff4a6b] to-[#b24a5d] text-white rounded-full text-xs font-medium shadow transition-colors duration-200 focus:outline-none"
                style={{ fontFamily: "'Quicksand', sans-serif" }}>
                Hire Me
              </button>
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-[#ff4a6b] p-1.5 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none">
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        <div className={`md:hidden bg-white/98 backdrop-blur-lg shadow-xl border-t border-gray-100 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-3 pt-2 pb-3">
            <div className="space-y-0.5">
              {navItems.map((item) => (
                <button key={item.name} onClick={() => { item.onClick?.(); setIsOpen(false); }}
                  className="text-gray-700 hover:text-[#ff4a6b] hover:bg-[#ff4a6b]/5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between group w-full text-left focus:outline-none"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#ff4a6b] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {item.name}
                  </div>
                  {item.icon && <span className="text-[#ff4a6b]">{item.icon}</span>}
                </button>
              ))}
              <button onClick={() => { handleHireMe(); setIsOpen(false); }}
                className="text-gray-700 hover:text-[#ff4a6b] hover:bg-[#ff4a6b]/5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between group w-full text-left focus:outline-none"
                style={{ fontFamily: "'Quicksand', sans-serif" }}>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-[#ff4a6b] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  Hire Me
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="pt-28 pb-20 px-6 bg-gradient-to-br from-[#FBF8E8] via-white to-[#ff4a6b]/5">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#ff4a6b] mb-8 group"
            style={{ fontFamily: "'Quicksand', sans-serif" }}>
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Portfolio
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-sm font-medium bg-[#ff4a6b]/10 text-[#ff4a6b] px-3 py-1 rounded-full" style={{ fontFamily: "'Montserrat', sans-serif" }}>Marketing</span>
                <span className="text-sm font-medium bg-[#3B2F93]/10 text-[#3B2F93] px-3 py-1 rounded-full" style={{ fontFamily: "'Montserrat', sans-serif" }}>Visual Design</span>
                <span className="text-sm font-medium bg-[#b24a5d]/10 text-[#b24a5d] px-3 py-1 rounded-full" style={{ fontFamily: "'Montserrat', sans-serif" }}>Branding</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Digital Marketing
                <span className="block text-[#ff4a6b]">Agency Partnership</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                Comprehensive visual design solutions for a digital marketing agency, delivering cohesive brand experiences across presentations, social media, and web platforms.
              </p>

              <div className="flex flex-wrap gap-6 text-sm text-gray-500" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                <div className="flex items-center gap-2"><Briefcase className="w-4 h-4" /> Role: Lead Visual Designer</div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> Duration: Multi-year Engagement</div>
                <div className="flex items-center gap-2"><Wrench className="w-4 h-4" /> Tools: {tools.join(", ")}</div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#gallery" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: '#ff4a6b', color: 'white', fontFamily: "'Quicksand', sans-serif", fontWeight: '500', borderRadius: '10px' }}>
                  <ExternalLink className="w-4 h-4" /> View Gallery
                </a>
                <a href="#process" className="inline-flex items-center gap-2 px-6 py-3 border rounded-lg hover:bg-gray-50 transition"
                  style={{ fontFamily: "'Quicksand', sans-serif", borderRadius: '10px', borderColor: '#ff4a6b', color: '#ff4a6b' }}>
                  <Workflow className="w-4 h-4" /> Design Process
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl shadow-2xl overflow-hidden aspect-video">
                <img 
                  src="/images/digital-marketing-agency/hero-image.jpg"
                  alt="Digital Marketing Agency"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/1200x800/3B2F93/white?text=Digital+Marketing+Agency';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#ff4a6b] rounded-2xl rotate-12 flex items-center justify-center shadow-lg">
                <Crown className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECT OVERVIEW ================= */}
      <section className="py-16 px-6" style={{ backgroundColor: '#FDFFF8' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            <Rocket className="w-6 h-6 text-[#ff4a6b]" /> Project Overview
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg leading-relaxed mb-6 text-gray-600" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                Collaborated with a Chicago-based digital marketing agency to create compelling visual content for diverse client campaigns. This ongoing partnership involved designing across multiple touchpoints to strengthen brand identities and drive engagement.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-[#ff4a6b] mt-1" />
                  <div><h3 className="font-medium" style={{ fontFamily: "'Montserrat', sans-serif" }}>Challenge</h3><p className="text-gray-600" style={{ fontFamily: "'Quicksand', sans-serif" }}>Create versatile visual solutions adaptable to different industries while maintaining high standards.</p></div>
                </div>
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-[#3B2F93] mt-1" />
                  <div><h3 className="font-medium" style={{ fontFamily: "'Montserrat', sans-serif" }}>Solution</h3><p className="text-gray-600" style={{ fontFamily: "'Quicksand', sans-serif" }}>Comprehensive design system covering presentations, social media, and web platforms.</p></div>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-2xl border border-[#ff4a6b]/20" style={{ backgroundColor: '#FBF8E8' }}>
              <h3 className="font-semibold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Key Deliverables</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-[#ff4a6b]" /><span style={{ fontFamily: "'Quicksand', sans-serif" }}>Client Presentations & Pitch Decks</span></li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-[#ff4a6b]" /><span style={{ fontFamily: "'Quicksand', sans-serif" }}>Social Media Content (Static + Animated)</span></li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-[#ff4a6b]" /><span style={{ fontFamily: "'Quicksand', sans-serif" }}>Website UI/UX Enhancements</span></li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-[#ff4a6b]" /><span style={{ fontFamily: "'Quicksand', sans-serif" }}>Brand Style Guides</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OBJECTIVES ================= */}
      <section className="py-16 px-6" style={{ backgroundColor: '#FBF8E8' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center" style={{ fontFamily: "'Montserrat', sans-serif" }}>Project Objectives</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {objectives.map((objective, index) => (
              <div key={index} className="p-6 bg-white rounded-xl border border-[#ff4a6b]/20 hover:border-[#ff4a6b] hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-[#ff4a6b]/10 rounded-full flex items-center justify-center mb-4">
                  <objective.icon className="w-7 h-7 text-[#ff4a6b]" />
                </div>
                <p className="text-gray-800 text-sm" style={{ fontFamily: "'Quicksand', sans-serif" }}>{objective.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DESIGN PROCESS ================= */}
      <section id="process" className="py-16 px-6" style={{ backgroundColor: '#FDFFF8' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            <Workflow className="w-6 h-6 text-[#3B2F93]" /> Design Process
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 h-full" style={{ borderTopColor: step.color, borderTopWidth: '4px' }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${step.color}20` }}>
                    <step.icon className="w-6 h-6" style={{ color: step.color }} />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-3 text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>{step.title}</h3>
                  <ul className="space-y-2">
                    {step.points.map((point, idx) => (
                      <li key={idx} className="text-sm flex items-start gap-2 text-gray-600" style={{ fontFamily: "'Quicksand', sans-serif" }}><span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: step.color }} />{point}</li>
                    ))}
                  </ul>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent">
                    <ChevronRight className="w-4 h-4 text-gray-400 -mt-1.5 -ml-1" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SOLUTIONS DELIVERED ================= */}
      <section className="py-16 px-6" style={{ backgroundColor: '#FBF8E8' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Solutions Delivered
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto" style={{ fontFamily: "'Quicksand', sans-serif" }}>
            Comprehensive design ecosystem crafted to elevate brand presence across every touchpoint
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              let gradientFrom = "#ff4a6b";
              let gradientTo = "#3B2F93";
              if (index === 1) { gradientFrom = "#ff4a6b"; gradientTo = "#b24a5d"; }
              if (index === 2) { gradientFrom = "#3B2F93"; gradientTo = "#D6D1F1"; }
              if (index === 3) { gradientFrom = "#b24a5d"; gradientTo = "#ff4a6b"; }
              if (index === 4) { gradientFrom = "#3B2F93"; gradientTo = "#ff4a6b"; }
              if (index === 5) { gradientFrom = "#ff4a6b"; gradientTo = "#b24a5d"; }
              
              return (
                <div key={index} className="group">
                  <div className="p-8 bg-white rounded-xl border border-gray-100 hover:border-[#ff4a6b]/50 hover:shadow-xl transition-all duration-300 h-full text-center hover:-translate-y-1">
                    <div className="w-20 h-20 bg-gradient-to-br rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" 
                         style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}>
                      <solution.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-3 text-xl" style={{ fontFamily: "'Montserrat', sans-serif" }}>{solution.title}</h3>
                    <p className="text-gray-600" style={{ fontFamily: "'Quicksand', sans-serif" }}>{solution.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-[#ff4a6b]/20">
              <p className="text-sm text-gray-600" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                ✨ Every touchpoint designed to leave a lasting impression ✨
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STYLE GUIDE ================= */}
      <section className="py-16 px-6" style={{ backgroundColor: '#FDFFF8' }}>
        <div className="max-w-6xl mx-auto bg-white rounded-2xl border shadow-lg overflow-hidden">
          <div className="p-8 border-b border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-semibold flex items-center gap-3" style={{ fontFamily: "'Gilroy', 'Montserrat', sans-serif" }}>
                  <div className="w-10 h-10 bg-gradient-to-br from-[#ff4a6b] to-[#3B2F93] rounded-xl flex items-center justify-center">
                    <Palette className="w-6 h-6 text-white" />
                  </div>
                  Neon Aura Style Guide
                </h2>
                <p className="text-gray-600 mt-2" style={{ fontFamily: "'Helvetica', 'Quicksand', sans-serif" }}>Bold and extravagant design system for marketing materials</p>
              </div>
            </div>
          </div>

          <nav className="flex border-b border-gray-100">
            {["colors", "typography", "components"].map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab as any)}
                className={`px-8 py-4 border-b-2 capitalize text-sm font-medium transition-colors ${
                  activeTab === tab ? "border-[#ff4a6b] text-[#ff4a6b]" : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                style={{ fontFamily: "'Gilroy', 'Montserrat', sans-serif" }}>
                {tab}
              </button>
            ))}
          </nav>

          <div className="p-8">
            {activeTab === "colors" && (
              <div className="space-y-12">
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-6" style={{ fontFamily: "'Gilroy', 'Montserrat', sans-serif" }}>Primary Palette • The Bold Trinity</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {colorPalette.slice(0, 4).map((color) => (
                      <div key={color.name} className="space-y-3">
                        <div className="h-32 rounded-xl border shadow hover:shadow-md transition-shadow cursor-pointer" style={{ background: color.hex }} onClick={() => copyToClipboard(color.hex)} />
                        <div>
                          <h4 className="font-medium" style={{ fontFamily: "'Gilroy', 'Montserrat', sans-serif" }}>{color.name}</h4>
                          <div className="flex items-center justify-between">
                            <code className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-600" style={{ fontFamily: "'Helvetica', monospace" }}>{color.hex}</code>
                            <button onClick={() => copyToClipboard(color.hex)} className="text-gray-500 hover:text-[#ff4a6b] transition-colors">
                              {copiedColor === color.hex ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-6" style={{ fontFamily: "'Gilroy', 'Montserrat', sans-serif" }}>Secondary & Neutrals • The Ethereal Collection</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {colorPalette.slice(4).map((color) => (
                      <div key={color.name} className="space-y-3">
                        <div className="h-24 rounded-lg border shadow hover:shadow-md transition-shadow cursor-pointer" style={{ background: color.hex }} onClick={() => copyToClipboard(color.hex)} />
                        <div>
                          <h4 className="font-medium" style={{ fontFamily: "'Gilroy', 'Montserrat', sans-serif" }}>{color.name}</h4>
                          <div className="flex items-center justify-between">
                            <code className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-600" style={{ fontFamily: "'Helvetica', monospace" }}>{color.hex}</code>
                            <button onClick={() => copyToClipboard(color.hex)} className="text-gray-500 hover:text-[#ff4a6b] transition-colors">
                              {copiedColor === color.hex ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "typography" && (
              <div className="space-y-12">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#ff4a6b]/10 rounded-lg flex items-center justify-center">
                      <span className="text-xl font-bold text-[#ff4a6b]" style={{ fontFamily: "'Gilroy', sans-serif" }}>G</span>
                    </div>
                    <h3 className="text-xl font-semibold" style={{ fontFamily: "'Gilroy', 'Montserrat', sans-serif" }}>Gilroy</h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full" style={{ fontFamily: "'Helvetica', sans-serif" }}>Primary Font • Display & Headlines</span>
                  </div>
                  <div className="space-y-10">
                    {typography[0].styles.map((style) => (
                      <div key={style.name} className="pb-8 border-b border-gray-100 last:border-0">
                        <div className="mb-4">
                          <p className="mb-2" style={{ fontFamily: "'Gilroy', sans-serif", fontSize: style.size, fontWeight: style.weight, lineHeight: style.lineHeight, color: '#1F2937' }}>{style.example}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600" style={{ fontFamily: "'Helvetica', sans-serif" }}>
                            <span className="bg-gray-100 px-3 py-1 rounded">{style.size} • {style.weight} weight</span>
                            <span className="bg-gray-100 px-3 py-1 rounded">Line-height: {style.lineHeight}</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500" style={{ fontFamily: "'Helvetica', sans-serif" }}><span className="font-medium text-gray-700">{style.name}</span> — {style.usage}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mb-8 pt-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#3B2F93]/10 rounded-lg flex items-center justify-center">
                      <span className="text-xl font-bold text-[#3B2F93]" style={{ fontFamily: "'Helvetica', sans-serif" }}>H</span>
                    </div>
                    <h3 className="text-xl font-semibold" style={{ fontFamily: "'Gilroy', 'Montserrat', sans-serif" }}>Helvetica</h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full" style={{ fontFamily: "'Helvetica', sans-serif" }}>Secondary Font • Body & UI</span>
                  </div>
                  <div className="space-y-10">
                    {typography[1].styles.map((style) => (
                      <div key={style.name} className="pb-8 border-b border-gray-100 last:border-0">
                        <div className="mb-4">
                          <p className="mb-2" style={{ fontFamily: "'Helvetica', sans-serif", fontSize: style.size, fontWeight: style.weight, lineHeight: style.lineHeight, color: '#1F2937' }}>{style.example}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600" style={{ fontFamily: "'Helvetica', sans-serif" }}>
                            <span className="bg-gray-100 px-3 py-1 rounded">{style.size} • {style.weight} weight</span>
                            <span className="bg-gray-100 px-3 py-1 rounded">Line-height: {style.lineHeight}</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500" style={{ fontFamily: "'Helvetica', sans-serif" }}><span className="font-medium text-gray-700">{style.name}</span> — {style.usage}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "components" && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-6" style={{ fontFamily: "'Gilroy', 'Montserrat', sans-serif" }}>Button Styles • Interactive Elements</h3>
                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-6 items-center">
                      <Button className="px-8 py-3 transition-all duration-300 hover:scale-105"
                        style={{ backgroundColor: '#ff4a6b', color: 'white', fontFamily: "'Helvetica', sans-serif", fontWeight: '400', fontSize: '16px', borderRadius: '10px' }}>
                        View Project
                      </Button>
                      <Button variant="outline" className="px-8 py-3 border-2"
                        style={{ borderColor: '#ff4a6b', color: '#ff4a6b', fontFamily: "'Helvetica', sans-serif", fontWeight: '400', fontSize: '16px', borderRadius: '10px' }}>
                        Learn More
                      </Button>
                      <Button variant="ghost" className="px-8 py-3"
                        style={{ color: '#3B2F93', fontFamily: "'Helvetica', sans-serif", fontWeight: '400', fontSize: '16px', borderRadius: '10px' }}>
                        Explore Gallery
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-gray-100">
                  <h3 className="text-xl font-semibold mb-6" style={{ fontFamily: "'Gilroy', 'Montserrat', sans-serif" }}>Gradient Examples</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="h-24 rounded-xl bg-gradient-to-r from-[#ff4a6b] to-[#b24a5d] flex items-center justify-center text-white font-medium" style={{ fontFamily: "'Helvetica', sans-serif" }}>Neon Passion → Faded Rose</div>
                    <div className="h-24 rounded-xl bg-gradient-to-r from-[#3B2F93] to-[#D6D1F1] flex items-center justify-center text-white font-medium" style={{ fontFamily: "'Helvetica', sans-serif" }}>Royal Eclipse → Misted Amethyst</div>
                    <div className="h-24 rounded-xl bg-gradient-to-r from-[#ff4a6b] to-[#3B2F93] flex items-center justify-center text-white font-medium" style={{ fontFamily: "'Helvetica', sans-serif" }}>Neon Passion → Royal Eclipse</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ================= FIGMA PROTOTYPE ================= */}
      <section className="py-16 px-6" style={{ backgroundColor: '#FBF8E8' }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Interactive Prototype
            </h2>
            <p className="text-lg text-gray-600 mb-4" style={{ fontFamily: "'Quicksand', sans-serif" }}>
              Explore the design system and visual assets created for this agency partnership.
            </p>
            <div className="mt-6">
              <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#ff4a6b', color: 'white', fontFamily: "'Quicksand', sans-serif", fontWeight: '400', borderRadius: '10px' }}>
                <ExternalLink className="w-5 h-5" /> View Figma Prototype
              </a>
            </div>
          </div>
          <div className="rounded-2xl border shadow-lg overflow-hidden bg-white mb-16">
            <div className="p-6 border-b">
              <h3 className="font-medium" style={{ fontFamily: "'Montserrat', sans-serif" }}>Design Walkthrough</h3>
              <p className="text-sm text-gray-600" style={{ fontFamily: "'Quicksand', sans-serif" }}>Watch a demonstration of key visual assets</p>
            </div>
            
            {/* Video Player - Nuevo video de Vimeo */}
            <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
              <iframe 
                src="https://player.vimeo.com/video/1202628249?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                title="Intrs-video"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= VISUAL GALLERY ================= */}
      <section id="gallery" className="py-16 px-6" style={{ backgroundColor: '#FDFFF8' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Visual Gallery
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto" style={{ fontFamily: "'Quicksand', sans-serif" }}>
            Explore the visual assets
          </p>

          {/* === BOTÓN VIEW DETAILS === */}
          <div className="text-center mb-12">
            <a
              href="https://drive.google.com/drive/folders/1t4XmohiwJTPT5rnrmxKQYRfBy_reOB1X?usp=drive_link" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
              style={{ 
                background: 'linear-gradient(135deg, #ff4a6b, #3B2F93)',
                color: 'white',
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: '500'
              }}
            >
              <FolderOpen className="w-5 h-5" />
              View Details
              <ChevronRight className="w-4 h-4" />
            </a>
            <p className="text-sm text-gray-500 mt-2" style={{ fontFamily: "'Quicksand', sans-serif" }}>
              📁 Includes: Brand Guidelines, Presentations, and all project assets
            </p>
          </div>

          {/* === WEBSITE DESIGN - 6 imágenes === */}
          <h3 className="text-2xl font-semibold mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Website Design
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {galleryImages.filter(img => img.category === "website").map((image) => (
              <div 
                key={image.id}
                className="relative h-[400px] rounded-2xl border-2 border-gray-200 overflow-hidden group hover:border-[#ff4a6b]/50 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(image.url)}
              >
                <img 
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/800x600/3B2F93/white?text=${image.title.replace(/ /g, '+')}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="font-medium text-xl mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {image.title}
                    </p>
                    <p className="text-sm opacity-90" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                      Click to view full size
                    </p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-[#ff4a6b]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Website
                </div>
              </div>
            ))}
          </div>

          {/* === PRESENTATION & BRAND GUIDELINES - 2 imágenes === */}
          <h3 className="text-2xl font-semibold mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Presentation & Brand Guidelines
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {galleryImages.filter(img => img.category === "presentation" || img.category === "brand").map((image) => (
              <div 
                key={image.id}
                className="relative h-[400px] rounded-2xl border-2 border-gray-200 overflow-hidden group hover:border-[#ff4a6b]/50 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(image.url)}
              >
                <img 
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/800x600/3B2F93/white?text=${image.title.replace(/ /g, '+')}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="font-medium text-xl mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {image.title}
                    </p>
                    <p className="text-sm opacity-90" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                      Click to view full size
                    </p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-[#ff4a6b]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {image.category === "presentation" ? "Presentation" : "Brand Guidelines"}
                </div>
              </div>
            ))}
          </div>

          {/* === SOCIAL MEDIA BANNERS - 4 imágenes (4 GIFs) === */}
          <h3 className="text-2xl font-semibold mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Social Media Banners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {galleryImages.filter(img => img.category === "social").map((image) => (
              <div 
                key={image.id}
                className="relative aspect-square rounded-xl border border-gray-200 overflow-hidden group hover:border-[#ff4a6b]/40 hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(image.url)}
              >
                <img 
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/600x600/ff4a6b/white?text=${image.title.replace(/ /g, '+')}`;
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-xs text-white truncate" style={{ fontFamily: "'Montserrat', sans-serif" }}>{image.title}</p>
                </div>
                <div className="absolute top-2 right-2 text-xs font-medium px-2 py-1 rounded bg-[#ff4a6b]/10 text-[#ff4a6b] backdrop-blur-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {image.type === "gif" ? "GIF" : "Static"}
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-sm text-gray-500 mt-6 text-center" style={{ fontFamily: "'Quicksand', sans-serif" }}>
            *Click on any image to view full size
          </p>
        </div>
      </section>

      {/* ================= RESULTS ================= */}
      <section className="py-16 px-6" style={{ backgroundColor: '#FBF8E8' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center" style={{ fontFamily: "'Montserrat', sans-serif" }}>Results & Impact</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {results.map((result, index) => (
              <div key={index} className="group">
                <div className="p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-[#ff4a6b]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="w-8 h-8 text-[#ff4a6b]" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-[#ff4a6b] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>{result.value}</p>
                      <p className="text-gray-700" style={{ fontFamily: "'Quicksand', sans-serif" }}>{result.label}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONCLUSION ================= */}
      <section className="py-20 px-6" style={{ backgroundColor: '#FDFFF8' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-[#ff4a6b]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Star className="w-10 h-10 text-[#ff4a6b]" />
          </div>
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>Conclusion</h2>
          <blockquote className="text-lg leading-relaxed mb-12 p-8 bg-white rounded-2xl border border-gray-100 shadow text-gray-700" style={{ fontFamily: "'Quicksand', sans-serif" }}>
            "This long-term partnership enabled the development of scalable design systems that consistently elevated client brands and improved campaign performance across multiple digital channels."
          </blockquote>
          <div className="mt-16 pt-8 border-t border-gray-200">
            <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 border rounded-lg hover:bg-gray-50 transition"
              style={{ borderRadius: '10px', borderColor: '#ff4a6b', color: '#ff4a6b', fontFamily: "'Quicksand', sans-serif" }}>
              View All Projects <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-white border-t border-[#E8F5E9]">
        <div className="py-16 bg-gradient-to-b from-white to-[#faf7f5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-4 tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>Why Work With Me</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Quicksand', sans-serif" }}>Ready to bring your vision to life? Let's create something amazing together.</p>
            </div>
            <div className="mb-12">
              <div className="grid md:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-[#E8F5E9] hover:border-[#CAE8C1] hover:shadow-lg transition-all duration-300 group">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[#ff4a6b]/10 rounded-lg text-[#ff4a6b] mb-4 group-hover:bg-[#ff4a6b]/20 transition-colors">
                      {benefit.icon}
                    </div>
                    <h4 className="text-gray-800 text-lg mb-2 font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>{benefit.title}</h4>
                    <p className="text-gray-600" style={{ fontFamily: "'Quicksand', sans-serif" }}>{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <button onClick={handleHireMe}
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full transition-all duration-300 text-lg shadow-lg hover:scale-105 group focus:outline-none"
                style={{ backgroundColor: '#ff4a6b', color: 'white', fontFamily: "'Quicksand', sans-serif", fontWeight: 400 }}>
                Start Your Project <ArrowUp className="w-5 h-5 transform rotate-45 group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        <div className="py-8 bg-[#faf7f5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-gray-600 text-sm flex items-center" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                © {currentYear} Montserrat Mendoza. All rights reserved.
                <Heart className="w-3 h-3 mx-2 text-[#ff4a6b]" style={{ fill: '#ff4a6b' }} />
                Crafted with bold elegance
              </div>
              <div className="flex items-center gap-4">
                <a href="https://www.linkedin.com/in/montserrat-mendozaui/" target="_blank" rel="noopener noreferrer"
                  className="text-gray-700 hover:text-[#ff4a6b] transition-colors duration-300 text-sm flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#E8F5E9]" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                  <Linkedin className="w-4 h-4" />LinkedIn
                </a>
                <a href="mailto:designmindux@gmail.com"
                  className="text-gray-700 hover:text-[#ff4a6b] transition-colors duration-300 text-sm flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#E8F5E9]" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                  <Mail className="w-4 h-4" />designmindux@gmail.com
                </a>
              </div>
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-gray-600 hover:text-[#ff4a6b] transition-colors duration-300 text-sm flex items-center gap-2" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                Back to top <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* ================= IMAGE MODAL ================= */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer" onClick={() => setSelectedImage(null)}>
          <div className="max-h-[90vh] max-w-[90vw] rounded-xl overflow-hidden">
            <img src={selectedImage} alt="Full size view" className="w-full h-full object-contain" />
          </div>
        </div>
      )}
    </div>
  );
};

export default DigitalMarketingAgencyProject;