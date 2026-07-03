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
} from "lucide-react";
import { Button } from "@/components/ui/button";

const SilkRoseProject = () => {
  const [activeTab, setActiveTab] = useState<"colors" | "typography" | "components">("colors");
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Navigation states
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

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

  /* ================= DATA ================= */
  const galleryImages = [
    "/images/silk-rose/gallery-1.jpg",
    "/images/silk-rose/gallery-2.jpg",
    "/images/silk-rose/gallery-3.jpg",
    "/images/silk-rose/gallery-4.jpg",
  ];

  const colorPalette = [
    {
      name: "Black Silk",
      hex: "#000000",
      opacities: [
        { value: "#000000", label: "100%" },
        { value: "rgba(0,0,0,0.8)", label: "80%" },
        { value: "rgba(0,0,0,0.6)", label: "60%" },
      ],
    },
    {
      name: "Cream Rose",
      hex: "#F6F3EE",
      opacities: [
        { value: "#F6F3EE", label: "100%" },
        { value: "rgba(246,243,238,0.8)", label: "80%" },
        { value: "rgba(246,243,238,0.6)", label: "60%" },
      ],
    },
  ];

  const typography = [
    {
      family: "Aiguilette",
      styles: [
        {
          name: "Display / H1",
          example: "Silk & Rose",
          size: "3.5rem",
          weight: "400",
          usage: "Hero titles & brand statements",
        },
        {
          name: "H2",
          example: "Modern Self-Care Experience",
          size: "2.5rem",
          weight: "400",
          usage: "Section titles",
        },
      ],
    },
    {
      family: "Poppins",
      styles: [
        {
          name: "Body Large",
          example: "Creating a modern and elegant brand identity.",
          size: "1.25rem",
          weight: "400",
          usage: "Introductions & highlights",
        },
        {
          name: "Body Regular",
          example:
            "The design avoids literal floral references while keeping a premium tone.",
          size: "1rem",
          weight: "400",
          usage: "Paragraph text",
        },
        {
          name: "Button Text",
          example: "View Prototype",
          size: "0.95rem",
          weight: "500",
          usage: "Buttons & CTAs",
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

  // Vimeo Player API script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
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
      <section className="py-20 px-6 bg-gradient-to-br from-[#F6F3EE] to-white">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-medium bg-black/10 px-3 py-1 rounded-full"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                E-commerce & Brand Identity
              </span>

              <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Silk & Rose
              </h1>

              <p className="text-xl text-muted-foreground mb-6"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                A modern, elegant self-care brand and e-commerce experience.
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
                  Timeline: 1 Month
                </div>
                <div className="flex items-center gap-2">
                  <Wrench className="w-4 h-4" />
                  Tools: Adobe Illustrator, Figma
                </div>
              </div>
            </div>

            <img
              src="/images/silk-rose/hero-image.jpg"
              alt="Silk & Rose Hero"
              className="rounded-2xl shadow-2xl aspect-video object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= OBJECTIVES ================= */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Project Objectives
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Target,
                title: "Distinct brand identity",
                text: "Elegant, contemporary, and non-literal visual language.",
              },
              {
                icon: Users,
                title: "Inclusive appeal",
                text: "Non-gendered aesthetic for a broad audience.",
              },
              {
                icon: ShoppingBag,
                title: "E-commerce focus",
                text: "Clear shopping flows that build trust.",
              },
              {
                icon: Sparkles,
                title: "Scalable system",
                text: "Adaptable across platforms and future growth.",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-muted/30 rounded-xl flex gap-4">
                <item.icon className="w-6 h-6" style={{ color: '#6AAB56' }} />
                <div>
                  <h3 className="font-semibold mb-1"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground"
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DESIGN PROCESS (SHORTENED) ================= */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-2"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <Workflow className="w-6 h-6" style={{ color: '#6AAB56' }} />
            Design Process
          </h2>

          <div className="space-y-3">
            {[
              "User research and visual exploration",
              "Brand system definition (logo, colors, typography)",
              "UX/UI wireframes and high-fidelity design",
              "Final prototype for Shopify implementation",
            ].map((text, i) => (
              <div key={i} className="p-5 bg-white rounded-xl border flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-[#6AAB56] text-white flex items-center justify-center text-sm">
                  {i + 1}
                </div>
                <p className="text-muted-foreground"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STYLE GUIDE ================= */}
      <section className="py-16 px-6 bg-[#F6F3EE]/30">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl border shadow-lg overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-2xl font-semibold flex items-center gap-2"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <Layers className="w-6 h-6" style={{ color: '#6AAB56' }} />
              Silk & Rose Style Guide
            </h2>

            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href="https://www.figma.com/proto/dHZ6nIAE7BptUJQvaVW2tO/Silk-and-rose-e-commerce-website?node-id=2163-547&t=ax6obW5dHcBcYmhN-1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg"
                style={{ 
                  backgroundColor: '#6AAB56',
                  color: 'white',
                  fontFamily: "'Quicksand', sans-serif"
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5A9545'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6AAB56'}
              >
                <ExternalLink className="w-4 h-4" />
                View Prototype
              </a>

              <a
                href="https://drive.google.com/file/d/1hmxHEdFV823p94H89b-6OTUpDwfvuWpq/view?usp=sharing"
                className="inline-flex items-center gap-2 px-5 py-3 border rounded-lg"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                <Download className="w-4 h-4" />
                Brand Guideline (PDF)
              </a>

              <a
                href="https://silkandrose.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border rounded-lg"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                <Globe className="w-4 h-4" />
                Live Site
              </a>
            </div>
          </div>

          <nav className="flex border-b">
            {["colors", "typography", "components"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-6 py-4 border-b-2 capitalize ${
                  activeTab === tab
                    ? "border-black text-black"
                    : "border-transparent text-muted-foreground"
                }`}
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {tab}
              </button>
            ))}
          </nav>

          <div className="p-6">
            {activeTab === "colors" && (
              <div className="space-y-8">
                {colorPalette.map((color) => (
                  <div key={color.name}>
                    <h3 className="font-medium"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {color.name}
                    </h3>
                    <code className="text-sm bg-muted px-2 py-1 rounded"
                      style={{ fontFamily: "'Quicksand', sans-serif" }}
                    >
                      {color.hex}
                    </code>

                    <div className="grid grid-cols-3 gap-4 mt-4">
                      {color.opacities.map((op) => (
                        <div
                          key={op.label}
                          onClick={() => copyToClipboard(op.value)}
                          className="cursor-pointer"
                        >
                          <div
                            className="h-20 rounded-lg border"
                            style={{ background: op.value }}
                          />
                          <div className="flex justify-center mt-2">
                            {copiedColor === op.value ? <Check /> : <Copy />}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "typography" && (
              <div className="space-y-10">
                {typography.map((family) => (
                  <div key={family.family}>
                    <h3 className="text-xl font-semibold mb-6"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {family.family}
                    </h3>

                    {family.styles.map((style) => (
                      <div key={style.name} className="mb-6">
                        <p
                          style={{
                            fontFamily: `'${family.family}', sans-serif`,
                            fontSize: style.size,
                            fontWeight: style.weight,
                          }}
                        >
                          {style.example}
                        </p>
                        <p className="text-sm text-muted-foreground"
                          style={{ fontFamily: "'Quicksand', sans-serif" }}
                        >
                          {style.name} — {style.usage}
                        </p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {activeTab === "components" && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Buttons
                </h3>
                <div className="flex gap-4 flex-wrap">
                  <Button style={{ 
                    backgroundColor: '#000000',
                    color: 'white',
                    fontFamily: "'Poppins', sans-serif"
                  }}>
                    Primary
                  </Button>
                  <Button variant="outline" style={{ 
                    fontFamily: "'Poppins', sans-serif"
                  }}>
                    Secondary
                  </Button>
                  <Button variant="ghost" style={{ 
                    fontFamily: "'Poppins', sans-serif"
                  }}>
                    Tertiary
                  </Button>
                  <Button disabled style={{ 
                    fontFamily: "'Poppins', sans-serif"
                  }}>
                    Disabled
                  </Button>
                </div>
              </div>
            )}
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
              Explore the fully interactive e-commerce experience designed in Figma.
              Click through to see user flows, animations, and responsive behavior.
            </p>
            
            {/* Quick access button for prototype */}
            <div className="mt-6">
              <a
                href="https://www.figma.com/proto/dHZ6nIAE7BptUJQvaVW2tO/Silk-and-rose-e-commerce-website?node-id=2163-547&t=ax6obW5dHcBcYmhN-1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: '#6AAB56',
                  color: 'white',
                  fontFamily: "'Quicksand', sans-serif",
                  fontWeight: '500'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5A9545'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6AAB56'}
              >
                <ExternalLink className="w-5 h-5" />
                View Figma Prototype (Opens in New Tab)
              </a>
              <p className="text-sm text-muted-foreground mt-2"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                Click this button for faster loading of the interactive prototype
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
                Watch a demonstration of the key user flows and interactions
              </p>
            </div>
            
            {/* Video Player */}
            <div className="aspect-video bg-gray-900">
              <iframe 
                src="https://player.vimeo.com/video/1152061460?badge=0&autopause=0&player_id=0&app_id=58479"
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                allowFullScreen
                title="Silk & Rose Prototype Demonstration"
              />
            </div>
          </div>

          {/* Image gallery (no title) */}
          <div className="grid md:grid-cols-2 gap-6">
            {galleryImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(img)}
                className="aspect-video overflow-hidden rounded-xl focus:outline-none"
              >
                <img
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VIDEO & PROMPT SECTION ================= */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Content Creation Process
            </h2>
            <p className="text-muted-foreground text-lg"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              See how AI-powered content generation brings the brand's aesthetic to life through
              visual storytelling and precise prompt engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Column: Video - taller */}
            <div className="space-y-4 h-full">
              <div className="rounded-2xl border shadow-lg overflow-hidden bg-white h-full flex flex-col">
                {/* Video header */}
                <div className="p-6 border-b">
                  <h3 className="font-medium mb-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Brand Visual Content
                  </h3>
                  <p className="text-sm text-muted-foreground"
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                  >
                    Luxury macro shot of Silk & Rose bath bomb dissolving in warm water.
                    Created with AI-enhanced visuals and cinematic quality.
                  </p>
                </div>
                
                {/* Taller video container */}
                <div className="flex-1 p-6 flex flex-col">
                  <div className="flex-1 relative rounded-lg overflow-hidden bg-black">
                    <iframe 
                      src="https://player.vimeo.com/video/1149792233?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                      className="absolute top-0 left-0 w-full h-full border-none"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                      title="Silk & Rose - Luxury Bath Bomb Visual"
                    />
                  </div>
                  
                  <div className="mt-6">
                    <div className="flex gap-3">
                      <span className="text-xs px-3 py-1 bg-[#F6F3EE] rounded-full"
                        style={{ fontFamily: "'Quicksand', sans-serif" }}
                      >
                        16:9 Aspect Ratio
                      </span>
                      <span className="text-xs px-3 py-1 bg-[#F6F3EE] rounded-full"
                        style={{ fontFamily: "'Quicksand', sans-serif" }}
                      >
                        4K Quality
                      </span>
                      <span className="text-xs px-3 py-1 bg-[#F6F3EE] rounded-full"
                        style={{ fontFamily: "'Quicksand', sans-serif" }}
                      >
                        Cinematic
                      </span>
                    </div>
                    
                    {/* Vimeo Link */}
                    <div className="mt-4 pt-4 border-t">
                      <a 
                        href="https://vimeo.com/1149792233"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Watch on Vimeo in higher quality
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Prompt */}
            <div className="space-y-4 h-full">
              <div className="rounded-2xl border shadow-lg overflow-hidden bg-white h-full flex flex-col">
                <div className="p-6 border-b">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5" style={{ color: '#6AAB56' }} />
                    <h3 className="font-medium"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      AI Prompt Used
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground"
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                  >
                    Generated using AI for visual content creation
                  </p>
                </div>
                
                <div className="flex-1 p-6 bg-[#FAF9F7] flex flex-col">
                  <div className="bg-white rounded-lg border p-5 flex-1 overflow-y-auto">
                    <pre className="text-sm text-gray-800 whitespace-pre-wrap font-mono leading-relaxed">
{`Luxury macro shot of a bath bomb dissolving in warm water,
creamy silk-like textures spreading through the water,
soft natural lighting, cinematic, shallow depth of field,
ultra-realistic, spa atmosphere, slow motion feel,
premium skincare advertising style, minimal composition,
calm and indulgent mood, monochrome accents,
minimalistic black packaging aesthetic, elegant and modern,
no text, no typography, no subtitles, no captions,
no words, no letters, no logos visible, no watermarks,
no UI elements, absolutely no text of any kind
anywhere in the image.`}</pre>
                    
                    <div className="mt-6 pt-6 border-t">
                      <h4 className="text-sm font-medium mb-3 flex items-center gap-2"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        <Copy className="w-4 h-4" />
                        Prompt Details
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <p className="text-xs text-muted-foreground"
                            style={{ fontFamily: "'Quicksand', sans-serif" }}
                          >
                            Style
                          </p>
                          <p className="text-sm"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            Premium / Cinematic
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground"
                            style={{ fontFamily: "'Quicksand', sans-serif" }}
                          >
                            Mood
                          </p>
                          <p className="text-sm"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            Calm & Indulgent
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground"
                            style={{ fontFamily: "'Quicksand', sans-serif" }}
                          >
                            Restrictions
                          </p>
                          <p className="text-sm"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            No text elements
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground"
                            style={{ fontFamily: "'Quicksand', sans-serif" }}
                          >
                            Purpose
                          </p>
                          <p className="text-sm"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            Brand Advertising
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#F6F3EE]/50 rounded-xl p-4 border">
                <p className="text-sm text-muted-foreground"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  <strong className="text-foreground">Note:</strong> This prompt demonstrates 
                  how precise language and specific constraints guide AI tools to produce 
                  on-brand visual content that aligns with Silk & Rose's premium aesthetic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONCLUSION ================= */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Conclusion & Learnings
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            Silk & Rose demonstrates how restraint and intentionality can elevate
            a brand. By prioritizing clarity, hierarchy, and emotional tone, the
            final system balances aesthetic refinement with commercial goals.
            <br /><br />
            The outcome is a cohesive, scalable identity designed to build trust
            and support long-term e-commerce growth.
          </p>

          {/* Watch Next Project */}
          <div className="mt-16 pt-8 border-t">
            <h3 className="text-xl font-semibold mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Watch Next Project
            </h3>
            <p className="text-muted-foreground mb-6"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              Explore another case study from my portfolio
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
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="max-h-[85vh] rounded-xl object-contain"
            alt="Expanded view"
          />
        </div>
      )}
    </div>
  );
};

export default SilkRoseProject;