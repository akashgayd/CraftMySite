import React, { useState, useEffect } from 'react';
import { 
  Code, 
  MessageCircle, 
  Users, 
  Briefcase, 
  FileText, 
  Palette,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Menu,
  X,
  Star,
  CheckCircle,
  Zap,
  Globe,
  Smartphone
} from 'lucide-react';

const CraftMySitePortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hi, I am ${formData.name}. I am interested in ${formData.service} from CraftMySite. ${formData.message}`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Website Development",
      description: "Full-stack web applications using MERN stack and modern technologies",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Chatbot Development",
      description: "Intelligent chatbots to enhance customer engagement and support",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Chat Applications",
      description: "Real-time messaging platforms with modern UI/UX design",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Portfolio Websites",
      description: "Professional portfolios that showcase your skills and projects",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Blog Websites",
      description: "Content management systems with SEO optimization",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Custom Branding",
      description: "Unique designs tailored to your brand identity and vision",
      color: "from-pink-500 to-pink-600"
    }
  ];

  const portfolioItems = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack MERN application with payment integration",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Real-Time Chat App",
      description: "WebSocket-based messaging platform with file sharing",
      tech: ["React", "Socket.io", "Express", "Redis"],
      color: "from-green-400 to-green-600"
    },
    {
      title: "AI Chatbot Dashboard",
      description: "Intelligent customer service bot with analytics",
      tech: ["React", "Python", "TensorFlow", "FastAPI"],
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio with animations and SEO optimization",
      tech: ["React", "Next.js", "Tailwind", "Framer Motion"],
      color: "from-orange-400 to-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CraftMySite
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['home', 'about', 'services', 'portfolio', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      activeSection === item
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-blue-100 hover:text-blue-600'
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {['home', 'about', 'services', 'portfolio', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 w-full text-left"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                We Craft Digital Experiences That Grow Businesses
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Crafting Web Solutions
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                that Speak for You
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your ideas into powerful digital experiences with our expert development team. 
              From modern websites to intelligent chatbots, we build solutions that drive results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              
              <a
                href="https://wa.me/919022652375?text=Hi, I want to discuss a project with CraftMySite"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all duration-300 flex items-center"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About CraftMySite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're passionate developers specializing in MERN stack and full-stack technologies, 
              dedicated to crafting exceptional digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose CraftMySite?</h3>
              <div className="space-y-4">
                {[
                  { icon: <CheckCircle className="w-6 h-6" />, text: "Expert Full-Stack Development with MERN technologies" },
                  { icon: <CheckCircle className="w-6 h-6" />, text: "Modern, responsive designs that work on all devices" },
                  { icon: <CheckCircle className="w-6 h-6" />, text: "Custom solutions tailored to your business needs" },
                  { icon: <CheckCircle className="w-6 h-6" />, text: "Ongoing support and maintenance services" },
                  { icon: <CheckCircle className="w-6 h-6" />, text: "SEO optimization and performance-focused development" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">{item.icon}</div>
                    <p className="text-gray-700">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Code className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h4>
                <p className="text-gray-600 mb-6">
                  To empower businesses with cutting-edge web solutions that drive growth, 
                  enhance user experience, and deliver measurable results.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">50+</div>
                    <div className="text-sm text-gray-600">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">100%</div>
                    <div className="text-sm text-gray-600">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive web development services to bring your digital vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300 flex items-center"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore some of our recent projects and see how we've helped businesses succeed online
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`h-48 bg-gradient-to-r ${item.color} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                  <div className="text-white text-center">
                    <Globe className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your next project? Let's discuss how we can help bring your ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <a href="tel:+919022652375" className="text-blue-600 hover:text-blue-800 transition-colors">
                        +91 9022652375
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mr-4">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                      <a
                        href="https://wa.me/919022652375?text=Hi, I want to discuss a project with CraftMySite"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-800 transition-colors"
                      >
                        Chat with us
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <a href="mailto:web.freelancer1234@gmail.com" className="text-purple-600 hover:text-purple-800 transition-colors">
                       web.freelancer1234@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">CraftMySite</h3>
            <p className="text-gray-400 mb-6">We Craft Digital Experiences That Grow Businesses</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="tel:+919022652375"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Phone className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/919022652375?text=Hi, I want to discuss a project with CraftMySite"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
              <a
                href="web.freelancer1234@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 CraftMySite. All rights reserved. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CraftMySitePortfolio;