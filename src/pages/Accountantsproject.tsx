import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Target,
  TrendingUp,
  Mail,
  FileText,
  Search,
  Lightbulb,
  Zap,
  CheckCircle,
  ExternalLink,
  Monitor,
  Palette,
  Image,
  Clock,
  MousePointer,
  Sparkles,
  BarChart3,
  MessageSquare,
  Copy,
  Check,
  Layers,
  Download,
  Briefcase,
  Wrench,
  Globe,
  Workflow,
  Heart,
  ArrowUp,
  Linkedin,
  Menu,
  X,
  MapPin,
  Award,
  ChevronRight,
  Rocket,
  Cpu,
  Share2,
  Image as ImageIcon,
  Calendar,
  Shield,
  Users as Team,
  Goal,
  ShoppingCart,
  Clock as ClockIcon,
  Zap as Lightning,
  MapPin as MapIcon,
  Instagram,
  Play,
  DollarSign,
  Phone,
  Store
} from "lucide-react";
import { Button } from "@/components/ui/button";

const AccountantsProject = () => {
  // Navigation states
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  
  // Style Guide states
  const [activeTab, setActiveTab] = useState<"colors" | "typography" | "components">("colors");
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  
  // Gallery states
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  /* ================= NAVIGATION ================= */
  
  const navItems = [
    {
      name: "Home",
      href: "#home",
      onClick: () => navigate("/")
    },
    {
      name: "Projects",
      href: "#projects",
      onClick: () => navigate("/#projects")
    },
    {
      name: "About",
      href: "#about",
      onClick: () => navigate("/#about")
    },
    {
      name: "Resume",
      icon: <Download className="w-4 h-4 ml-1" />,
      onClick: () => {
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'Montserrat_Mendoza_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    },
  ];

  /* ================= PROJECT DATA ================= */

  const objectives = [
    { icon: Target, text: "High-conversion campaign for tax season" },
    { icon: TrendingUp, text: "Drive qualified inquiries & sign-ups" },
    { icon: Mail, text: "Email sequence optimization for conversions" },
    { icon: MousePointer, text: "Clear CTAs & streamlined user flow" }
  ];

  const processSteps = [
    {
      title: "Brief & Alignment",
      icon: FileText,
      points: ["Received Word doc content", "Team meeting on goals & tone"],
      color: "#EDC95E"
    },
    {
      title: "Low-Fi Prototyping",
      icon: Search,
      points: ["Hand-drawn wireframes", "Structure & hierarchy defined"],
      color: "#F7E8BA"
    },
    {
      title: "AI Exploration",
      icon: Sparkles,
      points: ["AI iterations", "Multiple layout variations"],
      color: "#EDC95E"
    },
    {
      title: "Hi-Fi Design",
      icon: Lightbulb,
      points: ["Polished Figma designs", "Spacing, CTAs, brand consistency"],
      color: "#17191C"
    },
    {
      title: "Handoff",
      icon: Zap,
      points: ["Developer handoff", "Klaviyo email implementation"],
      color: "#EDC95E"
    }
  ];

  const solutions = [
    { icon: Monitor, title: "Landing Page", description: "High-conversion design with AI support" },
    { icon: Mail, title: "Email Sequence", description: "Klaviyo campaign optimized for clarity" },
    { icon: Palette, title: "Visual Guidelines", description: "Consistent branding throughout" }
  ];

  const results = [
    { value: "+32%", label: "Landing page engagement rate" },
    { value: "+18%", label: "Email click-through rate" },
    { value: "40%", label: "Faster design turnaround" },
    { value: "2 Days", label: "Delivery timeline" }
  ];

  const tools = ["Figma", "AI", "Klaviyo", "Photoshop"];

  // Gallery data
  const galleryImages = [
    { id: 1, title: "Landing Page Design", url: "/images/accountants/landing-page.jpg", category: "website", type: "image" },
    { id: 2, title: "Email Sequence Mockup", url: "/images/accountants/email-sequence.jpg", category: "email", type: "image" },
    { id: 3, title: "Email Design - Campaign", url: "/images/accountants/email-campaign.jpg", category: "email", type: "image" },
    { id: 4, title: "Brand Guidelines", url: "/images/accountants/brand-guidelines.jpg", category: "brand", type: "image" },
  ];

  /* ================= STYLE GUIDE DATA ================= */
  const colorPalette = [
    {
      name: "Golden Hour",
      hex: "#EDC95E",
      description: "Primary accent for titles and key elements",
      opacities: [
        { value: "#EDC95E", label: "100%" },
        { value: "rgba(237,201,94,0.8)", label: "80%" },
        { value: "rgba(237,201,94,0.6)", label: "60%" },
        { value: "rgba(237,201,94,0.4)", label: "40%" },
        { value: "rgba(237,201,94,0.2)", label: "20%" },
      ],
    },
    {
      name: "Champagne Mist",
      hex: "#F7E8BA",
      description: "Soft supporting text and backgrounds",
      opacities: [
        { value: "#F7E8BA", label: "100%" },
        { value: "rgba(247,232,186,0.8)", label: "80%" },
        { value: "rgba(247,232,186,0.6)", label: "60%" },
        { value: "rgba(247,232,186,0.4)", label: "40%" },
        { value: "rgba(247,232,186,0.2)", label: "20%" },
      ],
    },
    {
      name: "Midnight Shadow",
      hex: "#17191C",
      description: "Deep background for contrast sections",
      opacities: [
        { value: "#17191C", label: "100%" },
        { value: "rgba(23,25,28,0.8)", label: "80%" },
        { value: "rgba(23,25,28,0.6)", label: "60%" },
        { value: "rgba(23,25,28,0.4)", label: "40%" },
        { value: "rgba(23,25,28,0.2)", label: "20%" },
      ],
    },
    {
      name: "Absolute Zero",
      hex: "#000000",
      description: "Pure black for primary text",
      opacities: [
        { value: "#000000", label: "100%" },
        { value: "rgba(0,0,0,0.8)", label: "80%" },
        { value: "rgba(0,0,0,0.6)", label: "60%" },
        { value: "rgba(0,0,0,0.4)", label: "40%" },
        { value: "rgba(0,0,0,0.2)", label: "20%" },
      ],
    },
    {
      name: "Pure Light",
      hex: "#FFFFFF",
      description: "Clean white for cards and backgrounds",
      opacities: [
        { value: "#FFFFFF", label: "100%" },
        { value: "rgba(255,255,255,0.8)", label: "80%" },
        { value: "rgba(255,255,255,0.6)", label: "60%" },
        { value: "rgba(255,255,255,0.4)", label: "40%" },
        { value: "rgba(255,255,255,0.2)", label: "20%" },
      ],
    },
    {
      name: "Silver Cloud",
      hex: "#D9D9D9",
      description: "Neutral gray for borders and subtle elements",
      opacities: [
        { value: "#D9D9D9", label: "100%" },
        { value: "rgba(217,217,217,0.8)", label: "80%" },
        { value: "rgba(217,217,217,0.6)", label: "60%" },
        { value: "rgba(217,217,217,0.4)", label: "40%" },
        { value: "rgba(217,217,217,0.2)", label: "20%" },
      ],
    },
  ];

  const typography = [
    {
      family: "Montserrat",
      styles: [
        {
          name: "H1 / Display Bold",
          example: "Tax Season Campaign",
          size: "72px",
          weight: "700",
          usage: "Hero titles & brand statements",
          lineHeight: "1.1"
        },
        {
          name: "H2 / Section Titles Medium",
          example: "How It Works",
          size: "36px",
          weight: "500",
          usage: "Section headings & major titles",
          lineHeight: "1.2"
        },
        {
          name: "Body Regular",
          example: "Expert tax preparation services to maximize your returns and minimize stress this tax season.",
          size: "18px",
          weight: "400",
          usage: "Paragraph text & descriptions",
          lineHeight: "1.6"
        },
        {
          name: "Nav Button Medium",
          example: "Get Started",
          size: "16px",
          weight: "500",
          usage: "Navigation & buttons",
          lineHeight: "1"
        },
      ],
    },
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Clear Communication",
      description: "Regular updates and transparent process"
    },
    {
      icon: <Clock className="w-4 h-4" />,
      title: "Timely Delivery",
      description: "Meeting deadlines with quality work"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Remote Expertise",
      description: "Seamless collaboration across time zones"
    }
  ];

  /* ================= FUNCTIONS ================= */

  const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedColor(value);
    setTimeout(() => setCopiedColor(null), 1500);
  };

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    if (sectionId === 'home') {
      navigate("/");
    } else {
      navigate(`/#${sectionId}`);
    }
    setTimeout(() => {
      if (sectionId === 'home') return;
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleHireMe = () => {
    navigate("/#contact");
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const currentYear = new Date().getFullYear();

  /* ================= EFFECTS ================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen" style={{ 
      fontFamily: "'Montserrat', sans-serif",
      backgroundColor: '#FFFFFF'
    }}>
      
      {/* ================= NAVIGATION ================= */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg py-1 md:py-2' 
          : 'bg-transparent py-2 md:py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-10 md:h-12">
            
            {/* Logo */}
            <button 
              onClick={handleHomeClick}
              className="flex items-center space-x-1.5 md:space-x-3 group focus:outline-none"
            >
              <div className="w-6 h-6 md:w-10 md:h-10 bg-[#EDC95E] rounded-md md:rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300 shadow-sm">
                <span className="text-[#17191C] font-bold text-xs md:text-lg">M</span>
              </div>
              <span className="hidden xs:inline text-lg md:text-2xl font-bold text-[#17191C] group-hover:text-[#EDC95E] transition-colors duration-300">
                Montserrat
              </span>
            </button>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-8 flex items-baseline space-x-1">
                {navItems.map((item) => (
                  item.href ? (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.href.replace('#', ''))}
                      className="text-[#17191C] hover:text-[#EDC95E] px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 relative group flex items-center focus:outline-none"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#EDC95E] rounded-full group-hover:w-3/4 transition-all duration-300"></span>
                    </button>
                  ) : (
                    <button
                      key={item.name}
                      onClick={item.onClick}
                      className="text-[#17191C] hover:text-[#EDC95E] px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 relative group flex items-center focus:outline-none"
                    >
                      {item.name}
                      {item.icon}
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#EDC95E] rounded-full group-hover:w-3/4 transition-all duration-300"></span>
                    </button>
                  )
                ))}
                
                {/* Hire Me Button */}
                <button
                  onClick={handleHireMe}
                  className="ml-3 px-4 py-2 bg-[#17191C] text-white rounded-full hover:bg-[#EDC95E] hover:text-[#17191C] transition-all duration-300 text-sm font-medium shadow-sm hover:shadow-md transform hover:-translate-y-0.5 focus:outline-none"
                >
                  Hire Me
                </button>
              </div>
            </div>
            
            {/* Mobile Container */}
            <div className="flex items-center space-x-1 md:hidden">
              {/* Mobile Hire Me Button */}
              <button
                onClick={handleHireMe}
                className="px-3 py-1.5 bg-[#17191C] text-white rounded-full text-xs font-medium shadow-sm hover:bg-[#EDC95E] hover:text-[#17191C] transition-colors duration-200 focus:outline-none"
              >
                Hire Me
              </button>
              
              {/* Hamburger Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#17191C] hover:text-[#EDC95E] p-1.5 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Expanded Mobile Menu */}
        <div className={`md:hidden bg-white/98 backdrop-blur-lg shadow-xl border-t border-gray-100 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-3 pt-2 pb-3">
            <div className="space-y-0.5">
              {navItems.map((item) => (
                item.href ? (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href.replace('#', ''))}
                    className="text-[#17191C] hover:text-[#EDC95E] hover:bg-[#EDC95E]/5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between group w-full text-left focus:outline-none"
                  >
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-[#EDC95E] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {item.name}
                    </div>
                  </button>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => {
                      item.onClick?.();
                      setIsOpen(false);
                    }}
                    className="text-[#17191C] hover:text-[#EDC95E] hover:bg-[#EDC95E]/5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between group w-full text-left focus:outline-none"
                  >
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-[#EDC95E] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {item.name}
                    </div>
                    {item.icon && <span className="text-[#EDC95E]">{item.icon}</span>}
                  </button>
                )
              ))}
              
              {/* Hire Me Button in Mobile Menu */}
              <button
                onClick={handleHireMe}
                className="text-[#17191C] hover:text-[#EDC95E] hover:bg-[#EDC95E]/5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between group w-full text-left focus:outline-none"
              >
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-[#EDC95E] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  Hire Me
                </div>
              </button>
            </div>
            
            {/* Resume Note */}
            <div className="mt-3 px-3 py-2 bg-gray-50 rounded-lg">
              <p className="text-[10px] text-gray-500 text-center">
                Click "Resume" to download my CV as PDF
              </p>
            </div>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="pt-28 pb-20 px-6" style={{ backgroundColor: '#F8F2E0' }}>
        <div className="max-w-6xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#17191C] hover:text-[#EDC95E] mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Portfolio
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-sm font-medium bg-[#EDC95E]/20 text-[#17191C] px-3 py-1 rounded-full">
                  Marketing Campaign
                </span>
                <span className="text-sm font-medium bg-white text-[#17191C] px-3 py-1 rounded-full">
                  Email Design
                </span>
                <span className="text-sm font-medium bg-[#D9D9D9] text-[#17191C] px-3 py-1 rounded-full">
                  Financial Services
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
                Accountants Tax-Season
                <span className="block text-[#EDC95E]">Campaign 2025</span>
              </h1>

              <p className="text-xl text-[#17191C]/70 mb-8">
                Landing page and email marketing campaign designed for a high-pressure tax-season launch with a 2-day turnaround.
              </p>

              <div className="flex flex-wrap gap-6 text-sm text-[#17191C]/60">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  Role: UI/UX & Campaign Designer
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Timeline: 2 Days
                </div>
                <div className="flex items-center gap-2">
                  <Wrench className="w-4 h-4" />
                  Tools: {tools.join(", ")}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#gallery"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                  style={{ 
                    backgroundColor: '#17191C',
                    color: 'white',
                    fontWeight: '500',
                    borderRadius: '10px'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#EDC95E'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#17191C'}
                >
                  <ExternalLink className="w-4 h-4" />
                  View Gallery
                </a>
                <a
                  href="#process"
                  className="inline-flex items-center gap-2 px-6 py-3 border rounded-lg hover:bg-white transition"
                  style={{ 
                    borderRadius: '10px',
                    borderColor: '#17191C',
                    color: '#17191C'
                  }}
                >
                  <Workflow className="w-4 h-4" />
                  Design Process
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl shadow-2xl overflow-hidden aspect-video">
                <img 
                  src="/images/accountants/hero-image.jpg"
                  alt="Accountants Tax Campaign"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/600x400/17191C/EDC95E?text=Tax+Campaign+Preview";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#EDC95E] rounded-2xl rotate-12 flex items-center justify-center shadow-lg">
                <TrendingUp className="w-12 h-12 text-[#17191C]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECT OVERVIEW ================= */}
      <section className="py-16 px-6" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-2">
            <Rocket className="w-6 h-6 text-[#EDC95E]" />
            Project Overview
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg leading-relaxed mb-6 text-[#17191C]">
                Complete digital presence for a tax-season campaign, including a Klaviyo email sequence and a high-conversion landing page. With tax season approaching and only two days to deliver, the project required fast execution, clear communication, and strategic decision-making.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Goal className="w-5 h-5 text-[#EDC95E] mt-1" />
                  <div>
                    <h3 className="font-medium">
                      Challenge
                    </h3>
                    <p className="text-[#17191C]">
                      Build a high-conversion campaign that encouraged customers to hire the firm's accounting services during the peak tax-season window.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Lightning className="w-5 h-5 text-[#EDC95E] mt-1" />
                  <div>
                    <h3 className="font-medium">
                      Solution
                    </h3>
                    <p className="text-[#17191C]">
                      A cohesive, conversion-focused campaign with optimized landing page and email sequence.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-[#EDC95E]/20"
              style={{ backgroundColor: '#F8F2E0' }}
            >
              <h3 className="font-semibold mb-4">
                Key Requirements
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#EDC95E]" />
                  <span>High-conversion landing page</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#EDC95E]" />
                  <span>Klaviyo email sequence</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#EDC95E]" />
                  <span>Implementation of previous brand guidelines designed by me</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OBJECTIVES ================= */}
      <section className="py-16 px-6" style={{ backgroundColor: '#F8F2E0' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-[#17191C]">
            Project Objectives
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {objectives.map((objective, index) => (
              <div key={index} className="p-6 bg-white rounded-xl border border-[#EDC95E]/20 hover:border-[#EDC95E] hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-[#EDC95E]/10 rounded-full flex items-center justify-center mb-4">
                  <objective.icon className="w-7 h-7 text-[#EDC95E]" />
                </div>
                <p className="text-[#17191C] font-medium text-sm">
                  {objective.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DESIGN PROCESS ================= */}
      <section id="process" className="py-16 px-6" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-2">
            <Workflow className="w-6 h-6 text-[#EDC95E]" />
            Design Process
          </h2>

          <div className="grid md:grid-cols-5 gap-4">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div 
                  className="p-6 bg-white rounded-xl border border-[#D9D9D9] hover:shadow-lg transition-all duration-300 h-full"
                  style={{ borderTopColor: step.color, borderTopWidth: '4px' }}
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${step.color}20` }}
                  >
                    <step.icon className="w-6 h-6" style={{ color: step.color }} />
                  </div>
                  <h3 className="font-bold text-[#17191C] mb-3 text-lg">
                    {step.title}
                  </h3>
                  <ul className="space-y-2">
                    {step.points.map((point, idx) => (
                      <li key={idx} className="text-sm flex items-start gap-2 text-[#17191C]">
                        <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" 
                          style={{ backgroundColor: step.color }}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-transparent via-[#D9D9D9] to-transparent">
                    <ChevronRight className="w-4 h-4 text-[#D9D9D9] -mt-1.5 -ml-1" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SOLUTIONS DELIVERED ================= */}
      <section className="py-16 px-6" style={{ backgroundColor: '#F8F2E0' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-[#17191C]">
            Solutions Delivered
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {solutions.map((solution, index) => (
              <div key={index} className="group">
                <div className="p-8 bg-white rounded-xl border border-[#D9D9D9] hover:border-[#EDC95E] hover:shadow-xl transition-all duration-300 h-full text-center hover:-translate-y-1">
                  <div className="w-20 h-20 bg-[#17191C] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#EDC95E] transition-colors duration-300">
                    <solution.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-bold text-[#17191C] mb-3 text-xl">
                    {solution.title}
                  </h3>
                  <p className="text-[#17191C]/70">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STYLE GUIDE ================= */}
      <section className="py-16 px-6" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto bg-white rounded-2xl border shadow-lg overflow-hidden">
          <div className="p-8 border-b border-[#D9D9D9]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-semibold flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#17191C] rounded-xl flex items-center justify-center">
                    <Palette className="w-6 h-6 text-white" />
                  </div>
                  Accountants Campaign Style Guide
                </h2>
                <p className="text-[#17191C]/70 mt-2">
                  Marketing campaign design system and brand guidelines
                </p>
              </div>
            </div>
          </div>

          <nav className="flex border-b border-[#D9D9D9]">
            {["colors", "typography", "components"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-8 py-4 border-b-2 capitalize text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? "border-[#EDC95E] text-[#EDC95E]"
                    : "border-transparent text-[#17191C]/60 hover:text-[#17191C]"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>

          <div className="p-8">
            {activeTab === "colors" && (
              <div className="space-y-12">
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-6 text-[#17191C]">
                    Color Palette
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {colorPalette.map((color) => (
                      <div key={color.name} className="space-y-3">
                        <div
                          className="h-32 rounded-xl border shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                          style={{ background: color.hex }}
                          onClick={() => copyToClipboard(color.hex)}
                        />
                        <div>
                          <h4 className="font-medium text-[#17191C]">
                            {color.name}
                          </h4>
                          <p className="text-xs text-[#17191C]/60 mt-1">
                            {color.description}
                          </p>
                          <div className="flex items-center justify-between mt-2">
                            <code className="text-sm bg-[#F8F2E0] px-2 py-1 rounded text-[#17191C]">
                              {color.hex}
                            </code>
                            <button
                              onClick={() => copyToClipboard(color.hex)}
                              className="text-[#17191C]/50 hover:text-[#EDC95E] transition-colors"
                            >
                              {copiedColor === color.hex ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-[#D9D9D9]">
                  <h3 className="text-lg font-semibold mb-6 text-[#17191C]">
                    Color Opacities & Variations
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {colorPalette.slice(0, 3).map((color) => (
                      <div key={color.name} className="space-y-4">
                        <h4 className="font-medium text-[#17191C]">
                          {color.name} Variations
                        </h4>
                        <div className="grid grid-cols-5 gap-2">
                          {color.opacities.map((op) => (
                            <div
                              key={op.label}
                              onClick={() => copyToClipboard(op.value)}
                              className="cursor-pointer space-y-2"
                            >
                              <div
                                className="h-16 rounded-lg border"
                                style={{ background: op.value }}
                              />
                              <div className="text-center">
                                <span className="text-xs text-[#17191C]/60">
                                  {op.label}
                                </span>
                                <div className="flex justify-center mt-1">
                                  {copiedColor === op.value ? 
                                    <Check className="w-3 h-3 text-green-500" /> : 
                                    <Copy className="w-3 h-3 text-[#D9D9D9]" />
                                  }
                                </div>
                              </div>
                            </div>
                          ))}
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
                    <div className="w-10 h-10 bg-[#EDC95E]/10 rounded-lg flex items-center justify-center">
                      <span className="text-xl font-bold text-[#EDC95E]">M</span>
                    </div>
                    <h3 className="text-xl font-semibold">
                      Montserrat
                    </h3>
                    <span className="text-sm text-[#17191C]/60 bg-[#F8F2E0] px-3 py-1 rounded-full">
                      Primary Font
                    </span>
                  </div>

                  <div className="space-y-10">
                    {typography[0].styles.map((style) => (
                      <div key={style.name} className="pb-8 border-b border-[#D9D9D9] last:border-0">
                        <div className="mb-4">
                          <p
                            className="mb-2"
                            style={{
                              fontFamily: "'Montserrat', sans-serif",
                              fontSize: style.size,
                              fontWeight: style.weight,
                              lineHeight: style.lineHeight,
                              color: '#17191C'
                            }}
                          >
                            {style.example}
                          </p>
                          <div className="flex flex-wrap gap-4 text-sm text-[#17191C]/60">
                            <span className="bg-[#F8F2E0] px-3 py-1 rounded">
                              {style.size} • {style.weight} weight
                            </span>
                            <span className="bg-[#F8F2E0] px-3 py-1 rounded">
                              Line-height: {style.lineHeight}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-[#17191C]/60">
                          <span className="font-medium text-[#17191C]">{style.name}</span> — {style.usage}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "components" && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-[#17191C]">
                    Button Styles
                  </h3>
                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-6 items-center">
                      <Button 
                        className="px-8 py-3 transition-all duration-300 hover:scale-105"
                        style={{ 
                          backgroundColor: '#17191C',
                          color: 'white',
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: '500',
                          fontSize: '16px',
                          borderRadius: '10px'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#EDC95E'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#17191C'}
                      >
                        Get Started
                      </Button>
                      <Button 
                        variant="outline" 
                        className="px-8 py-3 border-2"
                        style={{ 
                          borderColor: '#17191C',
                          color: '#17191C',
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: '400',
                          fontSize: '16px',
                          borderRadius: '10px'
                        }}
                      >
                        Learn More
                      </Button>
                      <Button 
                        variant="ghost" 
                        className="px-8 py-3"
                        style={{ 
                          color: '#EDC95E',
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: '400',
                          fontSize: '16px',
                          borderRadius: '10px'
                        }}
                      >
                        Contact Us
                      </Button>
                    </div>
                    
                    <div className="bg-[#F8F2E0] rounded-lg p-4">
                      <p className="text-sm text-[#17191C]/70 mb-3">
                        Navigation Buttons
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <div 
                          className="px-6 py-3 rounded-lg text-white transition-colors cursor-pointer"
                          style={{ 
                            backgroundColor: '#17191C',
                            fontFamily: "'Montserrat', sans-serif",
                            fontWeight: '500',
                            fontSize: '16px',
                            borderRadius: '10px'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#EDC95E'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#17191C'}
                        >
                          Home
                        </div>
                        <div 
                          className="px-6 py-3 rounded-lg text-white transition-colors cursor-pointer"
                          style={{ 
                            backgroundColor: '#17191C',
                            fontFamily: "'Montserrat', sans-serif",
                            fontWeight: '500',
                            fontSize: '16px',
                            borderRadius: '10px'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#EDC95E'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#17191C'}
                        >
                          Services
                        </div>
                        <div 
                          className="px-6 py-3 rounded-lg text-white transition-colors cursor-pointer"
                          style={{ 
                            backgroundColor: '#17191C',
                            fontFamily: "'Montserrat', sans-serif",
                            fontWeight: '500',
                            fontSize: '16px',
                            borderRadius: '10px'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#EDC95E'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#17191C'}
                        >
                          Contact
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#D9D9D9]">
                  <h3 className="text-xl font-semibold mb-6 text-[#17191C]">
                    Form Elements
                  </h3>
                  <div className="space-y-4 max-w-md">
                    <div>
                      <label className="block text-sm font-medium text-[#17191C] mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-[#D9D9D9] focus:border-[#EDC95E] focus:ring-2 focus:ring-[#EDC95E]/20 outline-none transition"
                        placeholder="John Doe"
                        style={{ 
                          fontFamily: "'Montserrat', sans-serif",
                          borderRadius: '10px'
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#17191C] mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-lg border border-[#D9D9D9] focus:border-[#EDC95E] focus:ring-2 focus:ring-[#EDC95E]/20 outline-none transition"
                        placeholder="hello@example.com"
                        style={{ 
                          fontFamily: "'Montserrat', sans-serif",
                          borderRadius: '10px'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ================= FIGMA PROTOTYPE ================= */}
      <section className="py-16 px-6" style={{ backgroundColor: '#F8F2E0' }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-4 text-[#17191C]">
              Interactive Prototype
            </h2>
            <p className="text-lg text-[#17191C]/70">
              Explore the fully interactive landing page and email sequence designed in Figma.
            </p>
            
            <div className="mt-6">
              <a
                href="https://www.figma.com/proto/iZr9LLnYDpPaJZP3GoLR3N/Adez-era-template-design?node-id=2405-7&p=f&t=MCocsUkHyu3lTqsT-1&scaling=scale-down&content-scaling=fixed&page-id=2405%3A6&starting-point-node-id=2405%3A7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: '#17191C',
                  color: 'white',
                  fontWeight: '500',
                  borderRadius: '10px'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#EDC95E'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#17191C'}
              >
                <ExternalLink className="w-5 h-5" />
                View Figma Prototype
              </a>
            </div>
          </div>

          {/* Video Section - Updated with new Vimeo video */}
          <div className="rounded-2xl border shadow-lg overflow-hidden bg-white mb-16">
            <div className="p-6 border-b border-[#D9D9D9]">
              <h3 className="font-medium text-[#17191C]">
                Prototype Walkthrough Video
              </h3>
              <p className="text-sm text-[#17191C]/60">
                Watch a demonstration of the key user flows and interactions
              </p>
            </div>
            
            {/* Video Player - New Vimeo embed */}
            <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
              <iframe 
                src="https://player.vimeo.com/video/1201876344?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                title="Adez_era"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= VISUAL GALLERY ================= */}
      <section id="gallery" className="py-16 px-6" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-[#17191C]">
            Visual Gallery
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryImages.map((image) => (
              <div 
                key={image.id}
                className="relative h-[400px] rounded-2xl border-2 border-[#D9D9D9] overflow-hidden group hover:border-[#EDC95E] transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(image.url)}
              >
                <img 
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/600x400/17191C/EDC95E?text=${image.title.replace(/ /g, '+')}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="font-medium text-xl mb-2">
                      {image.title}
                    </p>
                    <p className="text-sm opacity-90">
                      Click to view full size
                    </p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-[#17191C]">
                  {image.category === "website" ? "Landing Page" : image.category === "brand" ? "Brand Guidelines" : "Email Design"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= RESULTS ================= */}
      <section className="py-16 px-6" style={{ backgroundColor: '#F8F2E0' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center text-[#17191C]">
            Results & Impact
          </h2>
          <p className="text-[#17191C]/60 text-center mb-12">
            (Fictitious but realistic projections based on industry benchmarks)
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((result, index) => (
              <div key={index} className="group">
                <div className="p-8 bg-white rounded-2xl border border-[#D9D9D9] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                  <div className="w-16 h-16 bg-[#EDC95E]/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#EDC95E]/30 transition-colors duration-300">
                    <BarChart3 className="w-8 h-8 text-[#EDC95E]" />
                  </div>
                  <p className="text-3xl font-bold text-[#17191C] mb-2">
                    {result.value}
                  </p>
                  <p className="text-[#17191C]/70">
                    {result.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONCLUSION ================= */}
      <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-[#EDC95E]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Cpu className="w-10 h-10 text-[#EDC95E]" />
          </div>
          
          <h2 className="text-3xl font-bold mb-6 text-[#17191C]">
            Conclusion
          </h2>
          
          <div className="relative">
            <blockquote className="text-lg leading-relaxed mb-12 p-8 bg-[#F8F2E0] rounded-2xl border border-[#EDC95E] shadow-sm text-[#17191C]">
              "Despite the accelerated timeline, the combination of a clear brief, rapid prototyping, 
              and AI-assisted exploration made it possible to deliver a cohesive, conversion-focused 
              campaign. The final assets provided the client with a strong digital presence for tax 
              season and a repeatable structure for future high-pressure launches."
            </blockquote>
            <div className="text-sm text-[#17191C]/60">
              — Key Learning from Accountants Tax-Season Campaign
            </div>
          </div>

          {/* Next Project */}
          <div className="mt-16 pt-8 border-t border-[#D9D9D9]">
            <h3 className="text-xl font-semibold mb-4 text-[#17191C]">
              Explore Another Project
            </h3>
            <p className="text-[#17191C]/60 mb-6">
              Check out my other case studies
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 border rounded-lg hover:bg-[#F8F2E0] transition"
              style={{ 
                borderRadius: '10px',
                borderColor: '#17191C',
                color: '#17191C'
              }}
            >
              View All Projects
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer id="work-with-me" className="bg-white border-t border-[#D9D9D9]">
        <div className="py-16 bg-gradient-to-b from-white to-[#F8F2E0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl text-[#17191C] mb-4 tracking-tight">
                Why Work With Me
              </h2>
              <p className="text-[#17191C]/70 text-lg max-w-2xl mx-auto">
                Ready to bring your vision to life? Let's create something amazing together.
              </p>
            </div>

            <div className="mb-12">
              <div className="grid md:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl p-6 border border-[#EDC95E]/30 hover:border-[#EDC95E] hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[#EDC95E]/10 rounded-lg text-[#EDC95E] mb-4 group-hover:bg-[#EDC95E]/20 transition-colors">
                      {benefit.icon}
                    </div>
                    <h4 className="text-[#17191C] text-lg mb-2 font-bold">
                      {benefit.title}
                    </h4>
                    <p className="text-[#17191C]/70">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <button 
                onClick={handleHireMe}
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:scale-105 group focus:outline-none"
                style={{ 
                  backgroundColor: '#17191C',
                  color: 'white',
                  fontWeight: 500
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#EDC95E'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#17191C'}
              >
                Start Your Project
                <ArrowUp className="w-5 h-5 transform rotate-45 group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        <div className="py-8 bg-[#F8F2E0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-[#17191C]/70 text-sm flex items-center">
                © {currentYear} Montserrat Mendoza. All rights reserved.
                <Heart className="w-3 h-3 mx-2 text-[#EDC95E]" style={{ fill: '#EDC95E' }} />
                Crafted with care
              </div>

              <div className="flex items-center gap-4">
                <a 
                  href="https://www.linkedin.com/in/montserrat-mendozaui/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#17191C]/70 hover:text-[#EDC95E] transition-colors duration-300 text-sm flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#EDC95E]/30 hover:border-[#EDC95E]"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>

                <a 
                  href="mailto:designmindux@gmail.com"
                  className="text-[#17191C]/70 hover:text-[#EDC95E] transition-colors duration-300 text-sm flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#EDC95E]/30 hover:border-[#EDC95E]"
                >
                  <Mail className="w-4 h-4" />
                  designmindux@gmail.com
                </a>
              </div>

              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-[#17191C]/70 hover:text-[#EDC95E] transition-colors duration-300 text-sm flex items-center gap-2 focus:outline-none"
              >
                Back to top
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* ================= IMAGE MODAL ================= */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-h-[90vh] max-w-[90vw] rounded-xl overflow-hidden">
            <img
              src={selectedImage}
              alt="Full size view"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountantsProject;