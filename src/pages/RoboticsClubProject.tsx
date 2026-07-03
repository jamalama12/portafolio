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
  Megaphone,
  FileText,
  Search,
  Lightbulb,
  Zap,
  Monitor,
  Palette,
  Share2,
  Image as ImageIcon,
  Award,
  TrendingUp,
  ChevronRight,
  Rocket,
  Brain,
  Cpu,
  Code,
  Smartphone,
  Paintbrush,
  Megaphone as Speaker,
  Calendar,
  BarChart,
  Shield,
  Zap as Lightning,
  Users as Team,
  Target as Goal
} from "lucide-react";
import { Button } from "@/components/ui/button";

const RoboticsClubProject = () => {
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

  const objectives = [
    { icon: Globe, text: "Modern digital presence" },
    { icon: Target, text: "Website for event launch" },
    { icon: Users, text: "Sponsor appeal & credibility" },
    { icon: Megaphone, text: "Social media visibility" },
    { icon: FileText, text: "Marketing materials for attendees" }
  ];

  const processSteps = [
    {
      title: "Research",
      icon: Search,
      points: ["Stakeholder interviews", "Quick competitive scan"],
      color: "#6AAB56"
    },
    {
      title: "Discovery",
      icon: Lightbulb,
      points: ["Users wanted clarity", "Easy registration", "Proof of real STEM activities"],
      color: "#4C8BF5"
    },
    {
      title: "Design Sprint",
      icon: Zap,
      points: ["1-week sprint with PM", "Developers, Marketing, CEO collaboration"],
      color: "#9C27B0"
    },
    {
      title: "Iterations",
      icon: CheckCircle,
      points: ["Wireframes", "UI system", "Prototypes"],
      color: "#FF9800"
    },
    {
      title: "Production",
      icon: Award,
      points: ["Website + social media", "Banners + sponsor emails"],
      color: "#2196F3"
    }
  ];

  const discoveries = [
    "Homepage needed clearer navigation and structure",
    "Users expected visuals of students and robotics activities",
    "Registration flow needed simplification",
    "Mobile-first layout improved task completion by estimated 20%",
    "Sponsors preferred a dedicated section with impact metrics"
  ];

  const solutions = [
    { icon: Monitor, title: "Responsive Website UI", description: "Clean, mobile-first design" },
    { icon: Palette, title: "Event Branding", description: "Cohesive visual identity" },
    { icon: Share2, title: "Social Media Posts", description: "Facebook & LinkedIn content" },
    { icon: ImageIcon, title: "Event Banners", description: "Venue wall graphics" },
    { icon: Mail, title: "Sponsor Email Templates", description: "Campaign-ready designs" }
  ];

  const results = [
    { value: "+12%", label: "Estimated user engagement" },
    { value: "+18%", label: "Projected sponsor visibility" },
    { value: "1 Month", label: "Full delivery on time" },
    { value: "100%", label: "Cohesive event branding" }
  ];

  const techStack = [
    { icon: Paintbrush, name: "Adobe Illustrator", color: "#FF6B6B" },
    { icon: Paintbrush, name: "Adobe XD", color: "#4ECDC4" },
    { icon: Paintbrush, name: "Figma", color: "#FFD93D" },
    { icon: Code, name: "HTML/CSS", color: "#6BCEBB" },
    { icon: Smartphone, name: "Responsive Design", color: "#95E1D3" }
  ];

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

  /* ================= GALLERY DATA ================= */
  const galleryImages = [
    {
      id: 1,
      title: "Website Design",
      url: "/images/robotics/website-1.jpg",
      category: "website"
    },
    {
      id: 2,
      title: "Website Design",
      url: "/images/robotics/website-2.jpg",
      category: "website"
    },
    {
      id: 3,
      title: "Social Media Posts",
      url: "/images/robotics/social-1.jpg",
      category: "social"
    },
    {
      id: 4,
      title: "Social Media Posts",
      url: "/images/robotics/social-2.jpg",
      category: "social"
    },
    {
      id: 5,
      title: "Event Banners",
      url: "/images/robotics/banner-1.jpg",
      category: "banners"
    },
    {
      id: 6,
      title: "Event Banners",
      url: "/images/robotics/banner-2.jpg",
      category: "banners"
    },
    {
      id: 7,
      title: "Email Templates",
      url: "/images/robotics/email-1.jpg",
      category: "email"
    },
    {
      id: 8,
      title: "Brand Assets",
      url: "/images/robotics/brand-1.jpg",
      category: "brand"
    },
  ];

  /* ================= STYLE GUIDE DATA ================= */
  const colorPalette = [
    {
      name: "Tech Blue",
      hex: "#1559ED",
      opacities: [
        { value: "#1559ED", label: "100%" },
        { value: "rgba(21, 89, 237, 0.8)", label: "80%" },
        { value: "rgba(21, 89, 237, 0.6)", label: "60%" },
      ],
    },
    {
      name: "Deep Navy",
      hex: "#031D39",
      opacities: [
        { value: "#031D39", label: "100%" },
        { value: "rgba(3, 29, 57, 0.8)", label: "80%" },
        { value: "rgba(3, 29, 57, 0.6)", label: "60%" },
      ],
    },
    {
      name: "Electric Cyan",
      hex: "#04FFE5",
      opacities: [
        { value: "#04FFE5", label: "100%" },
        { value: "rgba(4, 255, 229, 0.8)", label: "80%" },
        { value: "rgba(4, 255, 229, 0.6)", label: "60%" },
      ],
    },
    {
      name: "Bright Blue",
      hex: "#0851EF",
      opacities: [
        { value: "#0851EF", label: "100%" },
        { value: "rgba(8, 81, 239, 0.8)", label: "80%" },
        { value: "rgba(8, 81, 239, 0.6)", label: "60%" },
      ],
    },
    {
      name: "Light Blue",
      hex: "#C1D2FA",
      opacities: [
        { value: "#C1D2FA", label: "100%" },
        { value: "rgba(193, 210, 250, 0.8)", label: "80%" },
        { value: "rgba(193, 210, 250, 0.6)", label: "60%" },
      ],
    },
    {
      name: "Cool Gray",
      hex: "#939598",
      opacities: [
        { value: "#939598", label: "100%" },
        { value: "rgba(147, 149, 152, 0.8)", label: "80%" },
        { value: "rgba(147, 149, 152, 0.6)", label: "60%" },
      ],
    },
    {
      name: "Light Gray",
      hex: "#D1D3D4",
      opacities: [
        { value: "#D1D3D4", label: "100%" },
        { value: "rgba(209, 211, 212, 0.8)", label: "80%" },
        { value: "rgba(209, 211, 212, 0.6)", label: "60%" },
      ],
    },
    {
      name: "Pure White",
      hex: "#FFFFFF",
      opacities: [
        { value: "#FFFFFF", label: "100%" },
        { value: "rgba(255, 255, 255, 0.8)", label: "80%" },
        { value: "rgba(255, 255, 255, 0.6)", label: "60%" },
      ],
    },
  ];

  const typography = [
    {
      family: "Poppins",
      styles: [
        {
          name: "H1 / Display",
          example: "Robotics Club Digital Launch",
          size: "5.625rem", // 90px
          weight: "700", // Bold
          usage: "Main headlines & hero titles",
          lineHeight: "1.1"
        },
        {
          name: "H2 / Section Titles",
          example: "Design Process & Solutions",
          size: "2.1875rem", // 35px
          weight: "600", // Semi-bold
          usage: "Section headings & major titles",
          lineHeight: "1.2"
        },
        {
          name: "Body Large",
          example: "Complete digital ecosystem for launching a new robotics club location.",
          size: "1.25rem", // 20px
          weight: "400", // Regular
          usage: "Intro paragraphs & highlights",
          lineHeight: "1.6"
        },
        {
          name: "Body Regular",
          example: "The design focuses on creating a cohesive brand identity that appeals to students and sponsors.",
          size: "1rem", // 16px
          weight: "400", // Regular
          usage: "Body text & descriptions",
          lineHeight: "1.6"
        },
        {
          name: "Light Text",
          example: "Secondary information and captions",
          size: "0.875rem", // 14px
          weight: "300", // Light
          usage: "Captions, labels & secondary text",
          lineHeight: "1.5"
        },
        {
          name: "Button Text",
          example: "View Prototype",
          size: "0.95rem",
          weight: "500", // Medium
          usage: "Buttons & CTAs",
          lineHeight: "1"
        },
      ],
    },
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
    <div className="min-h-screen bg-background" style={{ 
      fontFamily: "'Quicksand', sans-serif"
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
              <div className="w-6 h-6 md:w-10 md:h-10 bg-[#4C8BF5] rounded-md md:rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300 shadow-sm">
                <span className="text-white font-bold text-xs md:text-lg font-heading">M</span>
              </div>
              <span className="hidden xs:inline text-lg md:text-2xl font-bold text-gray-800 font-heading group-hover:text-[#4C8BF5] transition-colors duration-300">
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
                      className="font-body text-gray-700 hover:text-[#4C8BF5] px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 relative group flex items-center focus:outline-none"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#4C8BF5] rounded-full group-hover:w-3/4 transition-all duration-300"></span>
                    </button>
                  ) : (
                    <button
                      key={item.name}
                      onClick={item.onClick}
                      className="font-body text-gray-700 hover:text-[#4C8BF5] px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 relative group flex items-center focus:outline-none"
                    >
                      {item.name}
                      {item.icon}
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#4C8BF5] rounded-full group-hover:w-3/4 transition-all duration-300"></span>
                    </button>
                  )
                ))}
                
                {/* Hire Me Button */}
                <button
                  onClick={handleHireMe}
                  className="font-body ml-3 px-4 py-2 bg-[#4C8BF5] text-white rounded-full hover:bg-[#3A7AE8] transition-all duration-300 text-sm font-medium shadow-sm hover:shadow-md transform hover:-translate-y-0.5 focus:outline-none"
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
                className="font-body px-3 py-1.5 bg-[#4C8BF5] text-white rounded-full text-xs font-medium shadow-sm hover:bg-[#3A7AE8] transition-colors duration-200 focus:outline-none"
              >
                Hire Me
              </button>
              
              {/* Hamburger Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-[#4C8BF5] p-1.5 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none"
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
                    className="font-body text-gray-700 hover:text-[#4C8BF5] hover:bg-[#4C8BF5]/5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between group w-full text-left focus:outline-none"
                  >
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-[#4C8BF5] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                    className="font-body text-gray-700 hover:text-[#4C8BF5] hover:bg-[#4C8BF5]/5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between group w-full text-left focus:outline-none"
                  >
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-[#4C8BF5] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {item.name}
                    </div>
                    {item.icon && <span className="text-[#4C8BF5]">{item.icon}</span>}
                  </button>
                )
              ))}
              
              {/* Hire Me Button in Mobile Menu */}
              <button
                onClick={handleHireMe}
                className="font-body text-gray-700 hover:text-[#4C8BF5] hover:bg-[#4C8BF5]/5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between group w-full text-left focus:outline-none"
              >
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-[#4C8BF5] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
      <section className="pt-28 pb-20 px-6 bg-gradient-to-br from-[#4C8BF5]/10 via-white to-[#9C27B0]/5">
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
                <span className="text-sm font-medium bg-[#4C8BF5]/10 text-[#4C8BF5] px-3 py-1 rounded-full"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  UI/UX & Brand Identity
                </span>
                <span className="text-sm font-medium bg-[#FF9800]/10 text-[#FF9800] px-3 py-1 rounded-full"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Event Design
                </span>
                <span className="text-sm font-medium bg-[#9C27B0]/10 text-[#9C27B0] px-3 py-1 rounded-full"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  STEM Education
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Robotics Club
                <span className="block text-[#4C8BF5]">Digital Launch</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                Complete digital ecosystem for launching a new robotics club location with event branding, website, and marketing materials.
              </p>

              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  Role: UI/UX & Visual Designer
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Timeline: 1 Month
                </div>
                <div className="flex items-center gap-2">
                  <Wrench className="w-4 h-4" />
                  Tools: Adobe Illustrator, Adobe XD, Figma
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#gallery"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                  style={{ 
                    backgroundColor: '#4C8BF5',
                    color: 'white',
                    fontFamily: "'Quicksand', sans-serif",
                    fontWeight: '500'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3A7AE8'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4C8BF5'}
                >
                  <ExternalLink className="w-4 h-4" />
                  View Gallery
                </a>
                <a
                  href="#process"
                  className="inline-flex items-center gap-2 px-6 py-3 border rounded-lg hover:bg-gray-50 transition"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  <Workflow className="w-4 h-4" />
                  Design Process
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl shadow-2xl overflow-hidden aspect-video">
                <img
                  src="/images/robotics/hero-image.jpg"
                  alt="Robotics Club Digital Launch"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#FF9800] rounded-2xl rotate-12 flex items-center justify-center shadow-lg">
                <Cpu className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECT OVERVIEW ================= */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-2"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <Rocket className="w-6 h-6 text-[#4C8BF5]" />
            Project Overview
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                Complete digital presence for a robotics club launching a new location in Wheeling, Illinois. 
                The project focused on creating a cohesive brand identity that appeals to students, parents, 
                and potential sponsors.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Goal className="w-5 h-5 text-[#4C8BF5] mt-1" />
                  <div>
                    <h3 className="font-medium"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Challenge
                    </h3>
                    <p className="text-muted-foreground"
                      style={{ fontFamily: "'Quicksand', sans-serif" }}
                    >
                      Launch a new robotics club location with limited time and budget while establishing credibility.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Lightning className="w-5 h-5 text-[#FF9800] mt-1" />
                  <div>
                    <h3 className="font-medium"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Solution
                    </h3>
                    <p className="text-muted-foreground"
                      style={{ fontFamily: "'Quicksand', sans-serif" }}
                    >
                      A complete digital ecosystem including responsive website, event branding, and marketing materials.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F8FAFF] rounded-2xl p-6 border border-[#E8F0FF]">
              <h3 className="font-semibold mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Tech Stack & Tools
              </h3>
              <div className="space-y-3">
                {techStack.map((tech, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div 
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: tech.color }}
                    >
                      <tech.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OBJECTIVES ================= */}
      <section className="py-16 px-6 bg-[#F8FAFF]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Project Objectives
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {objectives.map((objective, index) => (
              <div key={index} className="p-6 bg-white rounded-xl border border-gray-100 hover:border-[#4C8BF5]/30 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-[#4C8BF5]/10 rounded-full flex items-center justify-center mb-4">
                  <objective.icon className="w-7 h-7 text-[#4C8BF5]" />
                </div>
                <p className="text-foreground font-medium"
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
      <section id="process" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-2"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <Workflow className="w-6 h-6 text-[#4C8BF5]" />
            Design Process
          </h2>

          <div className="grid md:grid-cols-5 gap-4">
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
                  <h3 className="font-bold text-foreground mb-3 text-lg"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <ul className="space-y-2">
                    {step.points.map((point, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2"
                        style={{ fontFamily: "'Quicksand', sans-serif" }}
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
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Solutions Delivered
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {solutions.map((solution, index) => (
              <div key={index} className="group">
                <div className="p-6 bg-white rounded-xl border border-gray-100 hover:border-[#4C8BF5]/50 hover:shadow-xl transition-all duration-300 h-full text-center hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#4C8BF5] to-[#3A7AE8] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2 text-lg"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {solution.title}
                  </h3>
                  <p className="text-sm text-muted-foreground"
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

      {/* ================= FIGMA PROTOTYPE ================= */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Interactive Prototype
            </h2>
            <p className="text-muted-foreground text-lg"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              Explore the fully interactive robotics club website and event platform designed in Figma.
              Click through to see user flows, registration process, and responsive behavior.
            </p>
            
            {/* Quick access button for prototype */}
            <div className="mt-6">
              <a
                href="https://www.figma.com/proto/your-figma-link-here" // REPLACE WITH YOUR ACTUAL FIGMA LINK
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: '#4C8BF5',
                  color: 'white',
                  fontFamily: "'Quicksand', sans-serif",
                  fontWeight: '500'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3A7AE8'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4C8BF5'}
              >
                <ExternalLink className="w-5 h-5" />
                Download the Adobe XD prototype (Opens in New Tab)
              </a>
              <p className="text-sm text-muted-foreground mt-2"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                Click this button for downloading the Adobe XD File
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
              <p className="text-sm text-muted-foreground"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                Watch a demonstration of the key user flows and interactions for the robotics club platform
              </p>
            </div>
            
            {/* Video Player */}
            <div className="relative" style={{ padding: '56.25% 0 0 0' }}>
              <iframe 
                src="https://player.vimeo.com/video/1171144564?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                title="gakuto"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= VISUAL GALLERY ================= */}
      <section id="gallery" className="py-16 px-6 bg-[#F8FAFF]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Visual Gallery
          </h2>
          
          {/* Large frames - Website Screens */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {galleryImages
              .filter(img => img.category === "website")
              .map((image) => (
                <div 
                  key={image.id}
                  className="relative h-[400px] rounded-2xl border-2 border-gray-200 overflow-hidden group hover:border-[#4C8BF5]/50 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedImage(image.url)}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="font-medium text-xl mb-2"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {image.title}
                      </p>
                      <p className="text-sm opacity-90"
                        style={{ fontFamily: "'Quicksand', sans-serif" }}
                      >
                        Click to view full size
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-[#4C8BF5]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {image.category === "website" ? "Website" : "Design"}
                  </div>
                </div>
              ))}
          </div>

          {/* Smaller frames - Other work */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {galleryImages
              .filter(img => img.category !== "website")
              .map((image) => (
                <div 
                  key={image.id}
                  className="relative h-[250px] rounded-xl border border-gray-200 overflow-hidden group hover:border-[#4C8BF5]/40 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedImage(image.url)}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-medium text-sm"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {image.title}
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 text-xs font-medium px-2 py-1 rounded bg-[#4C8BF5]/10 text-[#4C8BF5] backdrop-blur-sm">
                    {image.category === "social" ? "Social" : 
                     image.category === "banners" ? "Banner" :
                     image.category === "email" ? "Email" : "Brand"}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ================= STYLE GUIDE ================= */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#1559ED]/5 via-white to-[#04FFE5]/5">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl border shadow-lg overflow-hidden">
          <div className="p-8 border-b border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-semibold flex items-center gap-3"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-[#1559ED] to-[#04FFE5] rounded-xl flex items-center justify-center">
                    <Palette className="w-6 h-6 text-white" />
                  </div>
                  Robotics Club Style Guide
                </h2>
                <p className="text-gray-600 mt-2"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  Complete brand identity system and design guidelines
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {/* Live Site Button */}
                <a
                  href="https://gakutoclub.org/" // Replace with your actual URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                  style={{ 
                    backgroundColor: '#04FFE5',
                    color: '#031D39',
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: '500'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#00D9C0'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#04FFE5'}
                >
                  <Globe className="w-4 h-4" />
                  Live Site
                </a>
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
                    ? "border-[#1559ED] text-[#1559ED]"
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
                              style={{ fontFamily: "'Poppins', sans-serif" }}
                            >
                              {color.hex}
                            </code>
                            <button
                              onClick={() => copyToClipboard(color.hex)}
                              className="text-gray-500 hover:text-[#1559ED] transition-colors"
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
                    Secondary & Neutral Colors
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
                              style={{ fontFamily: "'Poppins', sans-serif" }}
                            >
                              {color.hex}
                            </code>
                            <button
                              onClick={() => copyToClipboard(color.hex)}
                              className="text-gray-500 hover:text-[#1559ED] transition-colors"
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
                                  style={{ fontFamily: "'Poppins', sans-serif" }}
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
                    <div className="w-10 h-10 bg-[#1559ED]/10 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-[#1559ED]" />
                    </div>
                    <h3 className="text-xl font-semibold"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Poppins
                    </h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      Primary Font Family
                    </span>
                  </div>

                  <div className="space-y-10">
                    {typography[0].styles.map((style) => (
                      <div key={style.name} className="pb-8 border-b border-gray-100 last:border-0">
                        <div className="mb-4">
                          <p
                            className="mb-2"
                            style={{
                              fontFamily: "'Poppins', sans-serif",
                              fontSize: style.size,
                              fontWeight: style.weight,
                              lineHeight: style.lineHeight,
                              color: '#031D39'
                            }}
                          >
                            {style.example}
                          </p>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600"
                            style={{ fontFamily: "'Poppins', sans-serif" }}
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
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          <span className="font-medium text-gray-700">{style.name}</span> — {style.usage}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#1559ED]/5 to-[#04FFE5]/5 rounded-xl p-6 border border-gray-100">
                  <h4 className="font-semibold mb-4 text-gray-800"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Typography Scale
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-white rounded-lg border">
                      <div className="text-6xl font-bold text-[#1559ED]"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        90
                      </div>
                      <p className="text-sm text-gray-600 mt-2"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        H1 Size (px)
                      </p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg border">
                      <div className="text-3xl font-semibold text-[#1559ED]"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        35
                      </div>
                      <p className="text-sm text-gray-600 mt-2"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        H2 Size (px)
                      </p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg border">
                      <div className="text-xl font-medium text-[#1559ED]"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        20
                      </div>
                      <p className="text-sm text-gray-600 mt-2"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        Body Large (px)
                      </p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg border">
                      <div className="text-lg font-light text-[#1559ED]"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        14
                      </div>
                      <p className="text-sm text-gray-600 mt-2"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        Light Text (px)
                      </p>
                    </div>
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
                        className="px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                        style={{ 
                          backgroundColor: '#1559ED',
                          color: 'white',
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: '500'
                        }}
                      >
                        Primary Button
                      </Button>
                      <Button 
                        variant="outline" 
                        className="px-8 py-3 rounded-lg border-2"
                        style={{ 
                          borderColor: '#1559ED',
                          color: '#1559ED',
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: '500'
                        }}
                      >
                        Secondary Button
                      </Button>
                      <Button 
                        variant="ghost" 
                        className="px-8 py-3 rounded-lg"
                        style={{ 
                          color: '#1559ED',
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: '500'
                        }}
                      >
                        Ghost Button
                      </Button>
                      <Button 
                        disabled 
                        className="px-8 py-3 rounded-lg"
                        style={{ 
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: '500'
                        }}
                      >
                        Disabled
                      </Button>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-3"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        Button States
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <div className="text-center">
                          <div className="w-20 h-20 rounded-lg mb-2 flex items-center justify-center"
                            style={{ backgroundColor: '#1559ED' }}
                          >
                            <span className="text-white text-sm font-medium">Default</span>
                          </div>
                          <span className="text-xs text-gray-600">Default</span>
                        </div>
                        <div className="text-center">
                          <div className="w-20 h-20 rounded-lg mb-2 flex items-center justify-center"
                            style={{ backgroundColor: '#031D39' }}
                          >
                            <span className="text-white text-sm font-medium">Hover</span>
                          </div>
                          <span className="text-xs text-gray-600">Hover</span>
                        </div>
                        <div className="text-center">
                          <div className="w-20 h-20 rounded-lg mb-2 flex items-center justify-center border-2 border-dashed border-gray-400"
                            style={{ backgroundColor: '#F0F4FF' }}
                          >
                            <span className="text-gray-400 text-sm font-medium">Disabled</span>
                          </div>
                          <span className="text-xs text-gray-600">Disabled</span>
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
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        Text Input
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1559ED] focus:ring-2 focus:ring-[#1559ED]/20 outline-none transition"
                        placeholder="Enter text here..."
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        Dropdown
                      </label>
                      <select
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1559ED] focus:ring-2 focus:ring-[#1559ED]/20 outline-none transition"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        <option>Select an option</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ================= RESULTS ================= */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Results & Impact
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((result, index) => (
              <div key={index} className="group">
                <div className="p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 text-center hover:-translate-y-2">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#4C8BF5]/10 to-[#9C27B0]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-10 h-10 text-[#4C8BF5]" />
                  </div>
                  <p className="text-4xl font-bold text-[#4C8BF5] mb-3"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {result.value}
                  </p>
                  <p className="text-muted-foreground"
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                  >
                    {result.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONCLUSION ================= */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#4C8BF5]/5 via-white to-[#9C27B0]/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-[#4C8BF5]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Brain className="w-10 h-10 text-[#4C8BF5]" />
          </div>
          
          <h2 className="text-3xl font-bold mb-6"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Conclusion
          </h2>
          
          <div className="relative">
            <blockquote className="text-lg text-muted-foreground leading-relaxed mb-12 p-8 bg-white rounded-2xl border border-gray-100 shadow-sm"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              "This project taught me how to deliver fast, collaborative, mission-focused design 
              under tight deadlines—while supporting STEM education through clear, accessible 
              digital experiences."
            </blockquote>
            <div className="text-sm text-muted-foreground"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              — Key Learning from Robotics Club Project
            </div>
          </div>

          {/* Next Project */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Explore Another Project
            </h3>
            <p className="text-muted-foreground mb-6"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              Check out my other case studies
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 border rounded-lg hover:bg-muted transition"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
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
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[#4C8BF5]/10 rounded-lg text-[#4C8BF5] mb-4 group-hover:bg-[#4C8BF5]/20 transition-colors">
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
                  backgroundColor: '#4C8BF5',
                  color: 'white',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 500
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3A7AE8'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4C8BF5'}
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
                <Heart className="w-3 h-3 mx-2 text-[#4C8BF5]" style={{ fill: '#4C8BF5' }} />
                Crafted with care
              </div>

              {/* Social media and contact */}
              <div className="flex items-center gap-4">
                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/montserrat-mendozaui/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-[#4C8BF5] transition-colors duration-300 text-sm flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#E8F5E9] hover:border-[#CAE8C1]"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>

                {/* Email */}
                <a 
                  href="mailto:designmindux@gmail.com"
                  className="text-gray-700 hover:text-[#4C8BF5] transition-colors duration-300 text-sm flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#E8F5E9] hover:border-[#CAE8C1]"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  <Mail className="w-4 h-4" />
                  designmindux@gmail.com
                </a>
              </div>

              {/* Back to top */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-gray-600 hover:text-[#4C8BF5] transition-colors duration-300 text-sm flex items-center gap-2 focus:outline-none"
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
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain"
            alt="Expanded view"
          />
        </div>
      )}
    </div>
  );
};

export default RoboticsClubProject;