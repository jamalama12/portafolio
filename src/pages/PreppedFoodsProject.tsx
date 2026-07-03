import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Target,
  Users,
  ShoppingBag,
  Sparkles,
  Copy,
  Check,
  Layers,
  ExternalLink,
  Download,
  Clock,
  Briefcase,
  Wrench,
  Globe,
  Workflow,
  Heart,
  Mail,
  CheckCircle,
  ArrowUp,
  Linkedin,
  Menu,
  X,
  Lightbulb,
  Zap,
  MapPin,
  Search,
  Award,
  TrendingUp,
  ChevronRight,
  Rocket,
  Cpu,
  Monitor,
  Share2,
  Image as ImageIcon,
  Calendar,
  BarChart,
  Shield,
  Users as Team,
  Target as Goal,
  ShoppingCart,
  Clock as ClockIcon,
  Zap as Lightning,
  MapPin as MapIcon,
  Instagram,
  Play,
  Palette
} from "lucide-react";
import { Button } from "@/components/ui/button";

const PreppedFoodsProject = () => {
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
        // Download resume functionality
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
    { icon: ShoppingCart, text: "Streamlined ordering flow for quick meal selection" },
    { icon: ClockIcon, text: "Clear communication of delivery days and service hours" },
    { icon: Lightning, text: "Easy-to-understand 'How It Works' section" },
    { icon: MapIcon, text: "Visual hierarchy for pickup locations & delivery coverage" },
    { icon: Users, text: "Strengthen brand trust through About Us and menu highlights" }
  ];

  const processSteps = [
    {
      title: "Team Alignment",
      icon: Team,
      points: ["Define user needs and key actions", "Collaborative sessions with client"],
      color: "#075D40"
    },
    {
      title: "Wireframes",
      icon: Search,
      points: ["Low-fidelity wireframes based on insights", "Internal and client review"],
      color: "#16A249"
    },
    {
      title: "Refinement",
      icon: Lightbulb,
      points: ["Iterate based on feedback", "Expand into high-fidelity prototype"],
      color: "#FBBF24"
    },
    {
      title: "Interactive Prototype",
      icon: Rocket,
      points: ["Showcase user flows", "Meal selection to delivery information"],
      color: "#075D40"
    }
  ];

  const solutions = [
    { icon: Monitor, title: "E-commerce Website", description: "Responsive website design for meal ordering" },
    { icon: Instagram, title: "Instagram Content", description: "Square social media posts and stories" }
  ];

  const results = [
    { value: "Clear", label: "Users described experience as 'clear' and 'efficient'" },
    { value: "Intuitive", label: "Ordering flow perceived as smooth and intuitive" },
    { value: "Quick", label: "Delivery schedules helped users understand service" },
    { value: "Trust", label: "Design reinforced trust in the brand" }
  ];

  const tools = ["Figma", "Photoshop", "Illustrator"];

  // Gallery data - 2 website screenshots, 3 GIFs, 1 static image
  const galleryImages = [
    // Website screens (2)
    { id: 1, title: "Homepage Design", url: "/images/prepped-foods/homepage.jpg", category: "website", type: "image" },
    { id: 2, title: "Menu & Ordering Flow", url: "/images/prepped-foods/menu.jpg", category: "website", type: "image" },
    
    // Social media - 3 GIFs, 1 static image
    { id: 3, title: "Weekly Menu Animation", url: "/images/prepped-foods/social-1.gif", category: "social", type: "gif", format: "square" },
    { id: 4, title: "How It Works Loop", url: "/images/prepped-foods/social-2.gif", category: "social", type: "gif", format: "square" },
    { id: 5, title: "Delivery Day Reminder", url: "/images/prepped-foods/social-3.gif", category: "social", type: "gif", format: "square" },
    { id: 6, title: "Meal Highlight", url: "/images/prepped-foods/social-4.jpg", category: "social", type: "image", format: "square" },
  ];

  /* ================= STYLE GUIDE DATA ================= */
  const colorPalette = [
    {
      name: "Forest Green",
      hex: "#075D40",
      opacities: [
        { value: "#075D40", label: "100%" },
        { value: "rgba(7,93,64,0.8)", label: "80%" },
        { value: "rgba(7,93,64,0.6)", label: "60%" },
      ],
    },
    {
      name: "Leaf Green",
      hex: "#16A249",
      opacities: [
        { value: "#16A249", label: "100%" },
        { value: "rgba(22,162,73,0.8)", label: "80%" },
        { value: "rgba(22,162,73,0.6)", label: "60%" },
      ],
    },
    {
      name: "Cream Background",
      hex: "#FBF8E8",
      opacities: [
        { value: "#FBF8E8", label: "100%" },
        { value: "rgba(251,248,232,0.8)", label: "80%" },
        { value: "rgba(251,248,232,0.6)", label: "60%" },
      ],
    },
    {
      name: "Dark Gray",
      hex: "#1F2937",
      opacities: [
        { value: "#1F2937", label: "100%" },
        { value: "rgba(31,41,55,0.8)", label: "80%" },
        { value: "rgba(31,41,55,0.6)", label: "60%" },
      ],
    },
    {
      name: "Pure White",
      hex: "#FDFFF8",
      opacities: [
        { value: "#FDFFF8", label: "100%" },
        { value: "rgba(253,255,248,0.8)", label: "80%" },
        { value: "rgba(253,255,248,0.6)", label: "60%" },
      ],
    },
  ];

  const typography = [
    {
      family: "Open Sans",
      styles: [
        {
          name: "H1 / Display",
          example: "Prepped Foods",
          size: "96px",
          weight: "700",
          usage: "Hero titles & brand statements",
          lineHeight: "1.1"
        },
        {
          name: "H2 / Section Titles",
          example: "How It Works",
          size: "30px",
          weight: "700",
          usage: "Section headings & major titles",
          lineHeight: "1.2"
        },
        {
          name: "Body Regular",
          example: "Fresh vegan meals delivered to your door. Choose from our weekly menu and order by Sunday for Wednesday delivery.",
          size: "18px",
          weight: "400",
          usage: "Paragraph text & descriptions",
          lineHeight: "1.6"
        },
        {
          name: "Nav Button",
          example: "Order Now",
          size: "17px",
          weight: "700",
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

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
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
            
            {/* Logo */}
            <button 
              onClick={handleHomeClick}
              className="flex items-center space-x-1.5 md:space-x-3 group focus:outline-none"
            >
              <div className="w-6 h-6 md:w-10 md:h-10 bg-[#6AAB56] rounded-md md:rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300 shadow-sm">
                <span className="text-white font-bold text-xs md:text-lg font-heading">M</span>
              </div>
              <span className="hidden xs:inline text-lg md:text-2xl font-bold text-gray-800 font-heading group-hover:text-[#6AAB56] transition-colors duration-300">
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
                      className="font-body text-gray-700 hover:text-[#6AAB56] px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 relative group flex items-center focus:outline-none"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#6AAB56] rounded-full group-hover:w-3/4 transition-all duration-300"></span>
                    </button>
                  ) : (
                    <button
                      key={item.name}
                      onClick={item.onClick}
                      className="font-body text-gray-700 hover:text-[#6AAB56] px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 relative group flex items-center focus:outline-none"
                    >
                      {item.name}
                      {item.icon}
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#6AAB56] rounded-full group-hover:w-3/4 transition-all duration-300"></span>
                    </button>
                  )
                ))}
                
                {/* Hire Me Button */}
                <button
                  onClick={handleHireMe}
                  className="font-body ml-3 px-4 py-2 bg-[#6AAB56] text-white rounded-full hover:bg-[#5A9545] transition-all duration-300 text-sm font-medium shadow-sm hover:shadow-md transform hover:-translate-y-0.5 focus:outline-none"
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
                className="font-body px-3 py-1.5 bg-[#6AAB56] text-white rounded-full text-xs font-medium shadow-sm hover:bg-[#5A9545] transition-colors duration-200 focus:outline-none"
              >
                Hire Me
              </button>
              
              {/* Hamburger Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-[#6AAB56] p-1.5 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none"
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
                    className="font-body text-gray-700 hover:text-[#6AAB56] hover:bg-[#6AAB56]/5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between group w-full text-left focus:outline-none"
                  >
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-[#6AAB56] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                    className="font-body text-gray-700 hover:text-[#6AAB56] hover:bg-[#6AAB56]/5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between group w-full text-left focus:outline-none"
                  >
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-[#6AAB56] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {item.name}
                    </div>
                    {item.icon && <span className="text-[#6AAB56]">{item.icon}</span>}
                  </button>
                )
              ))}
              
              {/* Hire Me Button in Mobile Menu */}
              <button
                onClick={handleHireMe}
                className="font-body text-gray-700 hover:text-[#6AAB56] hover:bg-[#6AAB56]/5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between group w-full text-left focus:outline-none"
              >
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-[#6AAB56] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  Hire Me
                </div>
              </button>
            </div>
            
            {/* Resume Note */}
            <div className="mt-3 px-3 py-2 bg-gray-50 rounded-lg">
              <p className="font-body text-[10px] text-gray-500 text-center">
                Click "Resume" to download my CV as PDF
              </p>
            </div>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="pt-28 pb-20 px-6 bg-gradient-to-br from-[#FBF8E8] via-white to-[#16A249]/5">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 group"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Portfolio
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-sm font-medium bg-[#16A249]/10 text-[#16A249] px-3 py-1 rounded-full"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  E-commerce
                </span>
                <span className="text-sm font-medium bg-[#075D40]/10 text-[#075D40] px-3 py-1 rounded-full"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  UX Design
                </span>
                <span className="text-sm font-medium bg-[#FBBF24]/20 text-[#1F2937] px-3 py-1 rounded-full"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Food & Beverage
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Prepped Foods
                <span className="block text-[#16A249]">E-commerce Experience</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                Vegan meal prep e-commerce platform designed for busy professionals seeking healthy, convenient meal options in Chicago.
              </p>

              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  Role: Visual & UI/UX Designer
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Timeline: Full project cycle
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
                    backgroundColor: '#16A249',
                    color: 'white',
                    fontFamily: "'Quicksand', sans-serif",
                    fontWeight: '500',
                    borderRadius: '10px'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#075D40'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#16A249'}
                >
                  <ExternalLink className="w-4 h-4" />
                  View Gallery
                </a>
                <a
                  href="#process"
                  className="inline-flex items-center gap-2 px-6 py-3 border rounded-lg hover:bg-gray-50 transition"
                  style={{ 
                    fontFamily: "'Quicksand', sans-serif",
                    borderRadius: '10px',
                    borderColor: '#16A249',
                    color: '#16A249'
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
                  src="/images/prepped-foods/hero-image.jpg"
                  alt="Prepped Foods"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#16A249] rounded-2xl rotate-12 flex items-center justify-center shadow-lg">
                <ShoppingBag className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECT OVERVIEW ================= */}
      <section className="py-16 px-6" style={{ backgroundColor: '#FDFFF8' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-2"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <Rocket className="w-6 h-6 text-[#16A249]" />
            Project Overview
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg leading-relaxed mb-6"
                style={{ 
                  fontFamily: "'Quicksand', sans-serif",
                  color: '#1F2937'
                }}
              >
                Prepped Foods is a Chicago-based vegan meal prep company offering home delivery across multiple areas of the city. The goal of this project was to design an e-commerce experience that allowed customers to order meals directly from the website.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Goal className="w-5 h-5 text-[#16A249] mt-1" />
                  <div>
                    <h3 className="font-medium"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Challenge
                    </h3>
                    <p className="text-[#1F2937]"
                      style={{ fontFamily: "'Quicksand', sans-serif" }}
                    >
                      Create a fast, intuitive e-commerce experience for busy professionals with limited time to cook.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Lightning className="w-5 h-5 text-[#16A249] mt-1" />
                  <div>
                    <h3 className="font-medium"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Solution
                    </h3>
                    <p className="text-[#1F2937]"
                      style={{ fontFamily: "'Quicksand', sans-serif" }}
                    >
                      A streamlined e-commerce platform with responsive website and engaging Instagram content.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-[#16A249]/20"
              style={{ backgroundColor: '#FBF8E8' }}
            >
              <h3 className="font-semibold mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Key Requirements
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#16A249]" />
                  <span style={{ fontFamily: "'Quicksand', sans-serif" }}>Direct meal ordering from website</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#16A249]" />
                  <span style={{ fontFamily: "'Quicksand', sans-serif" }}>Complement phone & Instagram channels</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#16A249]" />
                  <span style={{ fontFamily: "'Quicksand', sans-serif" }}>Support future digital marketing</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#16A249]" />
                  <span style={{ fontFamily: "'Quicksand', sans-serif" }}>Clear delivery communication</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OBJECTIVES ================= */}
      <section className="py-16 px-6" style={{ backgroundColor: '#FBF8E8' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Project Objectives
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {objectives.map((objective, index) => (
              <div key={index} className="p-6 bg-white rounded-xl border border-[#16A249]/20 hover:border-[#16A249] hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-[#16A249]/10 rounded-full flex items-center justify-center mb-4">
                  <objective.icon className="w-7 h-7 text-[#16A249]" />
                </div>
                <p className="text-[#1F2937] font-medium text-sm"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {objective.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DESIGN PROCESS ================= */}
      <section id="process" className="py-16 px-6" style={{ backgroundColor: '#FDFFF8' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-2"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <Workflow className="w-6 h-6 text-[#16A249]" />
            Design Process
          </h2>

          <div className="grid md:grid-cols-4 gap-4">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div 
                  className="p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 h-full"
                  style={{ borderTopColor: step.color, borderTopWidth: '4px' }}
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${step.color}20` }}
                  >
                    <step.icon className="w-6 h-6" style={{ color: step.color }} />
                  </div>
                  <h3 className="font-bold text-[#1F2937] mb-3 text-lg"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <ul className="space-y-2">
                    {step.points.map((point, idx) => (
                      <li key={idx} className="text-sm flex items-start gap-2"
                        style={{ fontFamily: "'Quicksand', sans-serif", color: '#1F2937' }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" 
                          style={{ backgroundColor: step.color }}
                        />
                        {point}
                      </li>
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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Solutions Delivered
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {solutions.map((solution, index) => (
              <div key={index} className="group">
                <div className="p-8 bg-white rounded-xl border border-gray-100 hover:border-[#16A249]/50 hover:shadow-xl transition-all duration-300 h-full text-center hover:-translate-y-1">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#075D40] to-[#16A249] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <solution.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-bold text-[#1F2937] mb-3 text-xl"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {solution.title}
                  </h3>
                  <p className="text-[#1F2937]"
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                  >
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STYLE GUIDE ================= */}
      <section className="py-16 px-6" style={{ backgroundColor: '#FDFFF8' }}>
        <div className="max-w-6xl mx-auto bg-white rounded-2xl border shadow-lg overflow-hidden">
          <div className="p-8 border-b border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-semibold flex items-center gap-3"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-[#075D40] to-[#16A249] rounded-xl flex items-center justify-center">
                    <Palette className="w-6 h-6 text-white" />
                  </div>
                  Prepped Foods Style Guide
                </h2>
                <p className="text-gray-600 mt-2"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  E-commerce design system and brand guidelines
                </p>
              </div>
            </div>
          </div>

          <nav className="flex border-b border-gray-100">
            {["colors", "typography", "components"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-8 py-4 border-b-2 capitalize text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? "border-[#16A249] text-[#16A249]"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {tab}
              </button>
            ))}
          </nav>

          <div className="p-8">
            {activeTab === "colors" && (
              <div className="space-y-12">
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-6 text-gray-800"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Primary Palette
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {colorPalette.slice(0, 4).map((color) => (
                      <div key={color.name} className="space-y-3">
                        <div
                          className="h-32 rounded-xl border shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                          style={{ background: color.hex }}
                          onClick={() => copyToClipboard(color.hex)}
                        />
                        <div>
                          <h4 className="font-medium text-gray-800"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            {color.name}
                          </h4>
                          <div className="flex items-center justify-between">
                            <code className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-600"
                              style={{ fontFamily: "'Open Sans', sans-serif" }}
                            >
                              {color.hex}
                            </code>
                            <button
                              onClick={() => copyToClipboard(color.hex)}
                              className="text-gray-500 hover:text-[#16A249] transition-colors"
                            >
                              {copiedColor === color.hex ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-6 text-gray-800"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Neutral Colors
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {colorPalette.slice(4).map((color) => (
                      <div key={color.name} className="space-y-3">
                        <div
                          className="h-24 rounded-lg border shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                          style={{ background: color.hex }}
                          onClick={() => copyToClipboard(color.hex)}
                        />
                        <div>
                          <h4 className="font-medium text-gray-800"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            {color.name}
                          </h4>
                          <div className="flex items-center justify-between">
                            <code className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-600"
                              style={{ fontFamily: "'Open Sans', sans-serif" }}
                            >
                              {color.hex}
                            </code>
                            <button
                              onClick={() => copyToClipboard(color.hex)}
                              className="text-gray-500 hover:text-[#16A249] transition-colors"
                            >
                              {copiedColor === color.hex ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-gray-100">
                  <h3 className="text-lg font-semibold mb-6 text-gray-800"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Color Opacities
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {colorPalette.slice(0, 2).map((color) => (
                      <div key={color.name} className="space-y-4">
                        <h4 className="font-medium text-gray-700"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {color.name} Variations
                        </h4>
                        <div className="grid grid-cols-3 gap-3">
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
                                <span className="text-xs text-gray-600"
                                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                                >
                                  {op.label}
                                </span>
                                <div className="flex justify-center mt-1">
                                  {copiedColor === op.value ? 
                                    <Check className="w-3 h-3 text-green-500" /> : 
                                    <Copy className="w-3 h-3 text-gray-400" />
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
                    <div className="w-10 h-10 bg-[#16A249]/10 rounded-lg flex items-center justify-center">
                      <span className="text-xl font-bold text-[#16A249]">O</span>
                    </div>
                    <h3 className="text-xl font-semibold"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Open Sans
                    </h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full"
                      style={{ fontFamily: "'Open Sans', sans-serif" }}
                    >
                      Primary Font
                    </span>
                  </div>

                  <div className="space-y-10">
                    {typography[0].styles.map((style) => (
                      <div key={style.name} className="pb-8 border-b border-gray-100 last:border-0">
                        <div className="mb-4">
                          <p
                            className="mb-2"
                            style={{
                              fontFamily: "'Open Sans', sans-serif",
                              fontSize: style.size,
                              fontWeight: style.weight,
                              lineHeight: style.lineHeight,
                              color: '#1F2937'
                            }}
                          >
                            {style.example}
                          </p>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600"
                            style={{ fontFamily: "'Open Sans', sans-serif" }}
                          >
                            <span className="bg-gray-100 px-3 py-1 rounded">
                              {style.size} • {style.weight} weight
                            </span>
                            <span className="bg-gray-100 px-3 py-1 rounded">
                              Line-height: {style.lineHeight}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500"
                          style={{ fontFamily: "'Open Sans', sans-serif" }}
                        >
                          <span className="font-medium text-gray-700">{style.name}</span> — {style.usage}
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
                  <h3 className="text-xl font-semibold mb-6 text-gray-800"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Button Styles
                  </h3>
                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-6 items-center">
                      <Button 
                        className="px-8 py-3 transition-all duration-300 hover:scale-105"
                        style={{ 
                          backgroundColor: '#16A249',
                          color: 'white',
                          fontFamily: "'Open Sans', sans-serif",
                          fontWeight: '700',
                          fontSize: '17px',
                          borderRadius: '10px'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#075D40'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#16A249'}
                      >
                        Order Now
                      </Button>
                      <Button 
                        variant="outline" 
                        className="px-8 py-3 border-2"
                        style={{ 
                          borderColor: '#16A249',
                          color: '#16A249',
                          fontFamily: "'Open Sans', sans-serif",
                          fontWeight: '400',
                          fontSize: '17px',
                          borderRadius: '10px'
                        }}
                      >
                        Learn More
                      </Button>
                      <Button 
                        variant="ghost" 
                        className="px-8 py-3"
                        style={{ 
                          color: '#16A249',
                          fontFamily: "'Open Sans', sans-serif",
                          fontWeight: '400',
                          fontSize: '17px',
                          borderRadius: '10px'
                        }}
                      >
                        View Menu
                      </Button>
                      <Button 
                        disabled 
                        className="px-8 py-3"
                        style={{ 
                          fontFamily: "'Open Sans', sans-serif",
                          fontWeight: '400',
                          fontSize: '17px',
                          borderRadius: '10px'
                        }}
                      >
                        Sold Out
                      </Button>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-3"
                        style={{ fontFamily: "'Open Sans', sans-serif" }}
                      >
                        Navigation Buttons
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <div 
                          className="px-6 py-3 rounded-lg text-white transition-colors cursor-pointer"
                          style={{ 
                            backgroundColor: '#075D40',
                            fontFamily: "'Open Sans', sans-serif",
                            fontWeight: '700',
                            fontSize: '17px',
                            borderRadius: '10px'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#16A249'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#075D40'}
                        >
                          Home
                        </div>
                        <div 
                          className="px-6 py-3 rounded-lg text-white transition-colors cursor-pointer"
                          style={{ 
                            backgroundColor: '#075D40',
                            fontFamily: "'Open Sans', sans-serif",
                            fontWeight: '700',
                            fontSize: '17px',
                            borderRadius: '10px'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#16A249'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#075D40'}
                        >
                          Menu
                        </div>
                        <div 
                          className="px-6 py-3 rounded-lg text-white transition-colors cursor-pointer"
                          style={{ 
                            backgroundColor: '#075D40',
                            fontFamily: "'Open Sans', sans-serif",
                            fontWeight: '700',
                            fontSize: '17px',
                            borderRadius: '10px'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#16A249'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#075D40'}
                        >
                          How It Works
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <h3 className="text-xl font-semibold mb-6 text-gray-800"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Form Elements
                  </h3>
                  <div className="space-y-4 max-w-md">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2"
                        style={{ fontFamily: "'Open Sans', sans-serif" }}
                      >
                        Quantity
                      </label>
                      <input
                        type="number"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#16A249] focus:ring-2 focus:ring-[#16A249]/20 outline-none transition"
                        placeholder="1"
                        style={{ 
                          fontFamily: "'Open Sans', sans-serif",
                          borderRadius: '10px'
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2"
                        style={{ fontFamily: "'Open Sans', sans-serif" }}
                      >
                        Delivery Day
                      </label>
                      <select
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#16A249] focus:ring-2 focus:ring-[#16A249]/20 outline-none transition"
                        style={{ 
                          fontFamily: "'Open Sans', sans-serif",
                          borderRadius: '10px'
                        }}
                      >
                        <option>Wednesday</option>
                        <option>Sunday</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <h3 className="text-xl font-semibold mb-6 text-gray-800"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Instagram Post Examples
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="aspect-square bg-gradient-to-br from-[#075D40] to-[#16A249] rounded-xl flex items-center justify-center text-white p-4 text-center">
                      <div>
                        <Instagram className="w-8 h-8 mx-auto mb-2" />
                        <p className="text-xs font-medium">Weekly Menu</p>
                      </div>
                    </div>
                    <div className="aspect-square bg-gradient-to-br from-[#FBBF24] to-[#F59E0B] rounded-xl flex items-center justify-center text-white p-4 text-center">
                      <div>
                        <Clock className="w-8 h-8 mx-auto mb-2" />
                        <p className="text-xs font-medium">Delivery Reminder</p>
                      </div>
                    </div>
                    <div className="aspect-square bg-gradient-to-br from-[#1F2937] to-[#374151] rounded-xl flex items-center justify-center text-white p-4 text-center">
                      <div>
                        <Lightbulb className="w-8 h-8 mx-auto mb-2" />
                        <p className="text-xs font-medium">Meal Prep Tips</p>
                      </div>
                    </div>
                    <div className="aspect-square bg-gradient-to-br from-[#16A249] to-[#075D40] rounded-xl flex items-center justify-center text-white p-4 text-center">
                      <div>
                        <ShoppingBag className="w-8 h-8 mx-auto mb-2" />
                        <p className="text-xs font-medium">New Menu Alert</p>
                      </div>
                    </div>
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
            <h2 className="text-3xl font-bold mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Interactive Prototype
            </h2>
            <p className="text-lg"
              style={{ fontFamily: "'Quicksand', sans-serif", color: '#1F2937' }}
            >
              Explore the fully interactive e-commerce experience designed in Figma.
              Click through to see user flows, meal selection, and checkout process.
            </p>
            
            {/* Quick access button for prototype */}
            <div className="mt-6">
              <a
                href="https://www.figma.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: '#16A249',
                  color: 'white',
                  fontFamily: "'Quicksand', sans-serif",
                  fontWeight: '500',
                  borderRadius: '10px'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#075D40'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#16A249'}
              >
                <ExternalLink className="w-5 h-5" />
                View Figma Prototype (Opens in New Tab)
              </a>
              <p className="text-sm text-gray-600 mt-2"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                Click this button to explore the interactive prototype
              </p>
            </div>
          </div>

          {/* Video Section */}
          <div className="rounded-2xl border shadow-lg overflow-hidden bg-white mb-16">
            <div className="p-6 border-b">
              <h3 className="font-medium"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Prototype Walkthrough Video
              </h3>
              <p className="text-sm text-gray-600"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                Watch a demonstration of the key user flows and interactions
              </p>
            </div>
            
            {/* Video Player */}
            <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
              <iframe 
                src="https://player.vimeo.com/video/1176284965?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                title="Secuencia 01_2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= VISUAL GALLERY ================= */}
      <section id="gallery" className="py-16 px-6" style={{ backgroundColor: '#FDFFF8' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Visual Gallery
          </h2>
          
          {/* Website Screens - 2 large frames */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Homepage Design */}
            <div 
              className="relative h-[400px] rounded-2xl border-2 border-gray-200 overflow-hidden group hover:border-[#16A249]/50 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage('/images/prepped-foods/homepage.jpg')}
            >
              <img 
                src="/images/prepped-foods/homepage.jpg"
                alt="Homepage Design"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="font-medium text-xl mb-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Homepage Design
                  </p>
                  <p className="text-sm opacity-90"
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                  >
                    Click to view full size
                  </p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-[#16A249]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Website
              </div>
            </div>

            {/* Menu & Ordering Flow */}
            <div 
              className="relative h-[400px] rounded-2xl border-2 border-gray-200 overflow-hidden group hover:border-[#16A249]/50 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage('/images/prepped-foods/menu.jpg')}
            >
              <img 
                src="/images/prepped-foods/menu.jpg"
                alt="Menu & Ordering Flow"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="font-medium text-xl mb-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Menu & Ordering Flow
                  </p>
                  <p className="text-sm opacity-90"
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                  >
                    Click to view full size
                  </p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-[#16A249]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Website
              </div>
            </div>
          </div>

          {/* Instagram Content - 3 GIFs + 1 static image */}
          <h3 className="text-2xl font-semibold mb-6"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Instagram Content
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Weekly Menu Animation - GIF */}
            <div 
              className="relative aspect-square rounded-xl border border-gray-200 overflow-hidden group hover:border-[#16A249]/40 hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage('/images/prepped-foods/social-1.gif')}
            >
              <img 
                src="/images/prepped-foods/social-1.gif"
                alt="Weekly Menu Animation"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-xs text-white truncate">Weekly Menu Animation</p>
              </div>
              <div className="absolute top-2 right-2 text-xs font-medium px-2 py-1 rounded bg-[#16A249]/10 text-[#16A249] backdrop-blur-sm">
                GIF
              </div>
            </div>

            {/* How It Works Loop - GIF */}
            <div 
              className="relative aspect-square rounded-xl border border-gray-200 overflow-hidden group hover:border-[#16A249]/40 hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage('/images/prepped-foods/social-2.gif')}
            >
              <img 
                src="/images/prepped-foods/social-2.gif"
                alt="How It Works Loop"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-xs text-white truncate">How It Works Loop</p>
              </div>
              <div className="absolute top-2 right-2 text-xs font-medium px-2 py-1 rounded bg-[#16A249]/10 text-[#16A249] backdrop-blur-sm">
                GIF
              </div>
            </div>

            {/* Delivery Day Reminder - GIF */}
            <div 
              className="relative aspect-square rounded-xl border border-gray-200 overflow-hidden group hover:border-[#16A249]/40 hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage('/images/prepped-foods/social-3.gif')}
            >
              <img 
                src="/images/prepped-foods/social-3.gif"
                alt="Delivery Day Reminder"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-xs text-white truncate">Delivery Day Reminder</p>
              </div>
              <div className="absolute top-2 right-2 text-xs font-medium px-2 py-1 rounded bg-[#16A249]/10 text-[#16A249] backdrop-blur-sm">
                GIF
              </div>
            </div>

            {/* Meal Highlight - Static Image */}
            <div 
              className="relative aspect-square rounded-xl border border-gray-200 overflow-hidden group hover:border-[#16A249]/40 hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage('/images/prepped-foods/social-4.jpg')}
            >
              <img 
                src="/images/prepped-foods/social-4.jpg"
                alt="Meal Highlight"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-xs text-white truncate">Meal Highlight</p>
              </div>
              <div className="absolute top-2 right-2 text-xs font-medium px-2 py-1 rounded bg-[#16A249]/10 text-[#16A249] backdrop-blur-sm">
                Static
              </div>
            </div>
          </div>
          
          <p className="text-sm text-gray-500 mt-6 text-center"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            *Instagram content shown as lightweight GIFs for preview
          </p>
        </div>
      </section>

      {/* ================= RESULTS ================= */}
      <section className="py-16 px-6" style={{ backgroundColor: '#FBF8E8' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Results & Impact
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {results.map((result, index) => (
              <div key={index} className="group">
                <div className="p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-[#16A249]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="w-8 h-8 text-[#16A249]" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-[#16A249] mb-2"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {result.value}
                      </p>
                      <p className="text-[#1F2937]"
                        style={{ fontFamily: "'Quicksand', sans-serif" }}
                      >
                        {result.label}
                      </p>
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
          <div className="w-20 h-20 bg-[#16A249]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Cpu className="w-10 h-10 text-[#16A249]" />
          </div>
          
          <h2 className="text-3xl font-bold mb-6"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Conclusion
          </h2>
          
          <div className="relative">
            <blockquote className="text-lg leading-relaxed mb-12 p-8 bg-white rounded-2xl border border-gray-100 shadow-sm"
              style={{ fontFamily: "'Quicksand', sans-serif", color: '#1F2937' }}
            >
              "The Prepped Foods project demonstrates how a user-centered approach can transform a local meal prep business into a modern e-commerce experience. By focusing on clarity, efficiency, and engaging Instagram content, the design successfully addresses the needs of busy professionals seeking healthy meal options."
            </blockquote>
            <div className="text-sm text-gray-600"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              — Key Learning from Prepped Foods Project
            </div>
          </div>

          {/* Next Project */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Explore Another Project
            </h3>
            <p className="text-gray-600 mb-6"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              Check out my other case studies
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 border rounded-lg hover:bg-gray-50 transition"
              style={{ 
                fontFamily: "'Quicksand', sans-serif",
                borderRadius: '10px',
                borderColor: '#16A249',
                color: '#16A249'
              }}
            >
              View All Projects
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer id="work-with-me" className="bg-white border-t border-[#E8F5E9]">
        {/* Persuasive section */}
        <div className="py-16 bg-gradient-to-b from-white to-[#faf7f5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Title */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-4 tracking-tight"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
              >
                Why Work With Me
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                Ready to bring your vision to life? Let's create something amazing together.
              </p>
            </div>

            {/* Benefits */}
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
                    <h4 className="text-gray-800 text-lg mb-2"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 'bold' }}
                    >
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600"
                      style={{ fontFamily: "'Quicksand', sans-serif" }}
                    >
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <button 
                onClick={handleHireMe}
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:scale-105 group focus:outline-none"
                style={{ 
                  backgroundColor: '#6AAB56',
                  color: 'white',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 500
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5A9545'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6AAB56'}
              >
                Start Your Project
                <ArrowUp className="w-5 h-5 transform rotate-45 group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="py-8 bg-[#faf7f5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Copyright */}
              <div className="text-gray-600 text-sm flex items-center"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                © {currentYear} Montserrat Mendoza. All rights reserved.
                <Heart className="w-3 h-3 mx-2 text-[#6AAB56]" style={{ fill: '#6AAB56' }} />
                Crafted with care
              </div>

              {/* Social media and contact */}
              <div className="flex items-center gap-4">
                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/montserrat-mendozaui/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-[#6AAB56] transition-colors duration-300 text-sm flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#E8F5E9] hover:border-[#CAE8C1]"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>

                {/* Email */}
                <a 
                  href="mailto:designmindux@gmail.com"
                  className="text-gray-700 hover:text-[#6AAB56] transition-colors duration-300 text-sm flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#E8F5E9] hover:border-[#CAE8C1]"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  <Mail className="w-4 h-4" />
                  designmindux@gmail.com
                </a>
              </div>

              {/* Back to top */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-gray-600 hover:text-[#6AAB56] transition-colors duration-300 text-sm flex items-center gap-2 focus:outline-none"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
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

export default PreppedFoodsProject;