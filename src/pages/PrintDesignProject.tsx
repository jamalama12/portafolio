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
  Palette,
  FileText,
  PenTool,
  Truck,
  Building,
  BookOpen,
  Package,
  Printer,
  Edit,
  Image,
  Layout,
  Star,
  FolderOpen,
  Code,
  LayoutDashboard,
  Plug,
  Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductionWebProject = () => {
  // Navigation states
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  
  // Gallery states
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

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

  /* ================= GALLERY DATA ================= */
  const galleryImages = [
    // Todas las imágenes en formato cuadrado (mismo tamaño)
    { id: 1, title: "Window Graphics", url: "/images/production-web/window-graphics.jpg", category: "production" },
    { id: 2, title: "Editorial Catalog Design", url: "/images/production-web/editorial-catalog.jpg", category: "production" },
    { id: 3, title: "Product Label Design", url: "/images/production-web/product-label.jpg", category: "production" },
    { id: 4, title: "Vehicle Wrap Design", url: "/images/production-web/vehicle-wrap.jpg", category: "production" },
    { id: 5, title: "Campus Golf Cart Graphics", url: "/images/production-web/golf-cart-graphics.jpg", category: "production" },
    { id: 6, title: "Corporate Business Cards", url: "/images/production-web/business-cards.jpg", category: "production" },
  ];

  /* ================= WORDPRESS DATA ================= */
  const wordpressImages = [
    { id: 1, title: "WordPress Dashboard", url: "/images/production-web/wordpress-dashboard.jpg", hoverUrl: "/images/production-web/wordpress-editor.jpg" },
    { id: 2, title: "Elementor Page Builder", url: "/images/production-web/wordpress-elementor.jpg", hoverUrl: "/images/production-web/wordpress-plugins.jpg" },
  ];

  const wordpressFeatures = [
    { icon: <LayoutDashboard className="w-5 h-5" />, text: "WordPress Dashboard Management" },
    { icon: <Code className="w-5 h-5" />, text: "Elementor Page Builder" },
    { icon: <Plug className="w-5 h-5" />, text: "Plugin Installation & Configuration" },
    { icon: <Settings className="w-5 h-5" />, text: "Site Settings & Optimization" },
    { icon: <Edit className="w-5 h-5" />, text: "Content Publishing & Updates" },
    { icon: <Layout className="w-5 h-5" />, text: "Landing Page Management" },
  ];

  /* ================= PROJECT DATA ================= */

  const objectives = [
    { icon: Printer, text: "High-quality print production across multiple formats" },
    { icon: Layout, text: "Clean editorial design for catalogs and publications" },
    { icon: Truck, text: "Vehicle branding and large-format graphics" },
    { icon: Package, text: "Packaging design with production specifications" },
    { icon: Globe, text: "WordPress website management and maintenance" }
  ];

  const processSteps = [
    {
      title: "Understand Requirements",
      icon: Target,
      points: ["Review project goals", "Analyze production constraints", "Review technical specifications"],
      color: "#3D348B"
    },
    {
      title: "Design & Explore",
      icon: Palette,
      points: ["Develop layouts and visual concepts", "AI-assisted workflows", "Accelerate ideation"],
      color: "#5B4B9E"
    },
    {
      title: "Refine",
      icon: PenTool,
      points: ["Adjust typography and hierarchy", "Refine composition", "Ensure production accuracy"],
      color: "#8B7CC7"
    },
    {
      title: "Deliver",
      icon: Rocket,
      points: ["Prepare final assets for print or digital", "Verify technical specifications", "Release production-ready files"],
      color: "#3D348B"
    }
  ];

  const solutions = [
    { icon: Printer, title: "Print Production", description: "High-quality print-ready assets for multiple formats" },
    { icon: Layout, title: "Editorial Design", description: "Clean, organized layouts for catalogs and publications" },
    { icon: Globe, title: "Website Management", description: "WordPress content updates and maintenance" }
  ];

  const results = [
    { value: "100%", label: "Client satisfaction rate" },
    { value: "50+", label: "Projects delivered" },
    { value: "7", label: "Industries served" },
    { value: "10+", label: "Years of experience" }
  ];

  const tools = ["Adobe InDesign", "Illustrator", "Photoshop", "WordPress", "ChatGPT", "Sora"];
  const benefits = [
    { icon: <CheckCircle className="w-5 h-5" />, title: "Clear Communication", description: "Regular updates and transparent process" },
    { icon: <Clock className="w-4 h-4" />, title: "Timely Delivery", description: "Meeting deadlines with quality work" },
    { icon: <Globe className="w-5 h-5" />, title: "Remote Expertise", description: "Seamless collaboration across time zones" }
  ];

  /* ================= FUNCTIONS ================= */

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

  const handleDownloadEditables = () => {
    // Reemplaza con tu enlace real de Google Drive o carpeta de editables
    const downloadUrl = 'https://drive.google.com/drive/folders/1Nt2wFZ93imXiqp6Djv299KWMjpBzTtxU?usp=drive_link';
    window.open(downloadUrl, '_blank');
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
              <div className="w-6 h-6 md:w-10 md:h-10 bg-[#3D348B] rounded-md md:rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300 shadow-sm">
                <span className="text-white font-bold text-xs md:text-lg font-heading">M</span>
              </div>
              <span className="hidden xs:inline text-lg md:text-2xl font-bold text-gray-800 font-heading group-hover:text-[#3D348B] transition-colors duration-300">
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
                      className="font-body text-gray-700 hover:text-[#3D348B] px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 relative group flex items-center focus:outline-none"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#3D348B] rounded-full group-hover:w-3/4 transition-all duration-300"></span>
                    </button>
                  ) : (
                    <button
                      key={item.name}
                      onClick={item.onClick}
                      className="font-body text-gray-700 hover:text-[#3D348B] px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 relative group flex items-center focus:outline-none"
                    >
                      {item.name}
                      {item.icon}
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#3D348B] rounded-full group-hover:w-3/4 transition-all duration-300"></span>
                    </button>
                  )
                ))}
                
                {/* Hire Me Button */}
                <button
                  onClick={handleHireMe}
                  className="font-body ml-3 px-4 py-2 bg-[#3D348B] text-white rounded-full hover:bg-[#5B4B9E] transition-all duration-300 text-sm font-medium shadow-sm hover:shadow-md transform hover:-translate-y-0.5 focus:outline-none"
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
                className="font-body px-3 py-1.5 bg-[#3D348B] text-white rounded-full text-xs font-medium shadow-sm hover:bg-[#5B4B9E] transition-colors duration-200 focus:outline-none"
              >
                Hire Me
              </button>
              
              {/* Hamburger Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-[#3D348B] p-1.5 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none"
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
                    className="font-body text-gray-700 hover:text-[#3D348B] hover:bg-[#3D348B]/5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between group w-full text-left focus:outline-none"
                  >
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-[#3D348B] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                    className="font-body text-gray-700 hover:text-[#3D348B] hover:bg-[#3D348B]/5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between group w-full text-left focus:outline-none"
                  >
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-[#3D348B] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {item.name}
                    </div>
                    {item.icon && <span className="text-[#3D348B]">{item.icon}</span>}
                  </button>
                )
              ))}
              
              {/* Hire Me Button in Mobile Menu */}
              <button
                onClick={handleHireMe}
                className="font-body text-gray-700 hover:text-[#3D348B] hover:bg-[#3D348B]/5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between group w-full text-left focus:outline-none"
              >
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-[#3D348B] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
      <section className="pt-28 pb-20 px-6 bg-gradient-to-br from-[#FBF8E8] via-white to-[#3D348B]/5">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-[#3D348B] mb-8 group"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Portfolio
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-sm font-medium bg-[#3D348B]/10 text-[#3D348B] px-3 py-1 rounded-full"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Production & Web
                </span>
                <span className="text-sm font-medium bg-[#5B4B9E]/10 text-[#5B4B9E] px-3 py-1 rounded-full"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Print Production
                </span>
                <span className="text-sm font-medium bg-[#8B7CC7]/20 text-[#3D348B] px-3 py-1 rounded-full"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Website Management
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Production & Web
                <span className="block text-[#3D348B]">Design & Management</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                Print-ready production, large-format graphics, editorial layouts, packaging, vehicle branding, and website management for real-world marketing and business applications.
              </p>

              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  Role: Visual Designer
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Projects: Selected Client Work
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
                    backgroundColor: '#3D348B',
                    color: 'white',
                    fontFamily: "'Quicksand', sans-serif",
                    fontWeight: '500',
                    borderRadius: '10px'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5B4B9E'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3D348B'}
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
                    borderColor: '#3D348B',
                    color: '#3D348B'
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
                  src="/images/production-web/hero-image.jpg"
                  alt="Production & Web"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#3D348B] rounded-2xl rotate-12 flex items-center justify-center shadow-lg">
                <Printer className="w-12 h-12 text-white" />
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
            <Rocket className="w-6 h-6 text-[#3D348B]" />
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
                This collection highlights selected production design and website management projects created across multiple industries, including construction, retail, legal services, education, and consumer products.
              </p>
              <p className="text-lg leading-relaxed"
                style={{ 
                  fontFamily: "'Quicksand', sans-serif",
                  color: '#1F2937'
                }}
              >
                The work spans print production, editorial design, environmental graphics, vehicle wraps, packaging, corporate identity materials, and WordPress website management. Each project required balancing creative design with technical production standards to ensure accurate execution across both physical and digital platforms.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[#3D348B]/20"
              style={{ backgroundColor: '#FBF8E8' }}
            >
              <h3 className="font-semibold mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Key Deliverables
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#3D348B]" />
                  <span style={{ fontFamily: "'Quicksand', sans-serif" }}>Print Production & Editorial Layout</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#3D348B]" />
                  <span style={{ fontFamily: "'Quicksand', sans-serif" }}>Packaging & Vehicle Graphics</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#3D348B]" />
                  <span style={{ fontFamily: "'Quicksand', sans-serif" }}>WordPress Website Management</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#3D348B]" />
                  <span style={{ fontFamily: "'Quicksand', sans-serif" }}>Corporate Identity Materials</span>
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
              <div key={index} className="p-6 bg-white rounded-xl border border-[#3D348B]/20 hover:border-[#3D348B] hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-[#3D348B]/10 rounded-full flex items-center justify-center mb-4">
                  <objective.icon className="w-7 h-7 text-[#3D348B]" />
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
            <Workflow className="w-6 h-6 text-[#3D348B]" />
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
                <div className="p-8 bg-white rounded-xl border border-gray-100 hover:border-[#3D348B]/50 hover:shadow-xl transition-all duration-300 h-full text-center hover:-translate-y-1">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#3D348B] to-[#5B4B9E] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
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

      {/* ================= WORDPRESS MANAGEMENT ================= */}
      <section className="py-16 px-6" style={{ backgroundColor: '#FDFFF8' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <Globe className="w-6 h-6 text-[#3D348B]" />
            WordPress Website Management
          </h2>
          <p className="text-lg text-[#1F2937] mb-8"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            Comprehensive WordPress management including Elementor page building, plugin configuration, content publishing, and site maintenance.
          </p>

          {/* Imagen grande con hover */}
          <div className="mb-10">
            <div 
              className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-gray-200 hover:border-[#3D348B] transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => setSelectedImage(isHovered ? wordpressImages[0].hoverUrl : wordpressImages[0].url)}
            >
              <img 
                src={isHovered ? wordpressImages[0].hoverUrl : wordpressImages[0].url}
                alt="WordPress Management"
                className="w-full h-auto object-cover transition-all duration-500"
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/1200x600/3D348B/white?text=WordPress+Management';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-xl font-bold"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {isHovered ? "Elementor Page Builder" : "WordPress Dashboard"}
                  </p>
                  <p className="text-sm opacity-90"
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                  >
                    {isHovered ? "Drag & drop design with Elementor" : "Full site management and control"}
                  </p>
                  <p className="text-xs opacity-70 mt-1">Hover to see Elementor editor • Click to view full size</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-[#3D348B]/90 text-white px-3 py-1 rounded-full text-xs font-medium"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {isHovered ? "Elementor" : "Dashboard"}
              </div>
            </div>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {wordpressFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-[#FBF8E8] rounded-lg border border-[#3D348B]/10 hover:border-[#3D348B]/30 transition-all duration-300">
                <div className="text-[#3D348B]">
                  {feature.icon}
                </div>
                <span className="text-sm text-[#1F2937]"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VISUAL GALLERY ================= */}
      <section id="gallery" className="py-16 px-6" style={{ backgroundColor: '#FBF8E8' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Visual Gallery
          </h2>
          
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            Explore the production design portfolio
          </p>

          {/* === BOTÓN DOWNLOAD EDITABLES EN EL CENTRO (CON PROTAGONISMO) === */}
          <div className="flex justify-center mb-12">
            <button
              onClick={handleDownloadEditables}
              className="inline-flex items-center gap-3 px-10 py-5 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              style={{ 
                backgroundColor: '#3D348B',
                color: 'white',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: '600',
                fontSize: '1.1rem',
                borderRadius: '12px',
                border: '2px solid #3D348B'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#5B4B9E';
                e.currentTarget.style.borderColor = '#5B4B9E';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#3D348B';
                e.currentTarget.style.borderColor = '#3D348B';
              }}
            >
              <Download className="w-6 h-6" />
              View Production Files
              <span className="text-sm opacity-80 font-normal ml-1">
                (Pdf)
              </span>
            </button>
          </div>

          {/* === GALERÍA DE IMÁGENES - TODAS DEL MISMO TAMAÑO === */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div 
                key={image.id}
                className="relative aspect-square rounded-xl border-2 border-gray-200 overflow-hidden group hover:border-[#3D348B] hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(image.url)}
              >
                <img 
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/600x600/3D348B/white?text=${image.title.replace(/ /g, '+')}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="font-medium text-sm"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {image.title}
                    </p>
                    <p className="text-xs opacity-80"
                      style={{ fontFamily: "'Quicksand', sans-serif" }}
                    >
                      Click to view full size
                    </p>
                  </div>
                </div>
                <div className="absolute top-3 right-3 text-xs font-medium px-3 py-1 rounded-full bg-[#3D348B]/90 text-white backdrop-blur-sm"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Production
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-sm text-gray-500 mt-6 text-center"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            *Click on any image to view full size
          </p>
        </div>
      </section>

      {/* ================= RESULTS ================= */}
      <section className="py-16 px-6" style={{ backgroundColor: '#FDFFF8' }}>
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
                    <div className="w-16 h-16 bg-[#3D348B]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <BarChart className="w-8 h-8 text-[#3D348B]" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-[#3D348B] mb-2"
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
      <section className="py-20 px-6" style={{ backgroundColor: '#FBF8E8' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-[#3D348B]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Star className="w-10 h-10 text-[#3D348B]" />
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
              "This collection demonstrates the ability to balance creative design with technical production standards across multiple industries and formats. From large-format graphics to editorial layouts and website management, each project required meticulous attention to detail and a deep understanding of production requirements."
            </blockquote>
            <div className="text-sm text-gray-600"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              — Key Learning from Production & Web Projects
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
                borderColor: '#3D348B',
                color: '#3D348B'
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
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[#3D348B]/10 rounded-lg text-[#3D348B] mb-4 group-hover:bg-[#3D348B]/20 transition-colors">
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
                  backgroundColor: '#3D348B',
                  color: 'white',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 500
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5B4B9E'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3D348B'}
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
                <Heart className="w-3 h-3 mx-2 text-[#3D348B]" style={{ fill: '#3D348B' }} />
                Crafted with care
              </div>

              {/* Social media and contact */}
              <div className="flex items-center gap-4">
                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/montserrat-mendozaui/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-[#3D348B] transition-colors duration-300 text-sm flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#E8F5E9] hover:border-[#CAE8C1]"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>

                {/* Email */}
                <a 
                  href="mailto:designmindux@gmail.com"
                  className="text-gray-700 hover:text-[#3D348B] transition-colors duration-300 text-sm flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#E8F5E9] hover:border-[#CAE8C1]"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  <Mail className="w-4 h-4" />
                  designmindux@gmail.com
                </a>
              </div>

              {/* Back to top */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-gray-600 hover:text-[#3D348B] transition-colors duration-300 text-sm flex items-center gap-2 focus:outline-none"
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

export default ProductionWebProject;