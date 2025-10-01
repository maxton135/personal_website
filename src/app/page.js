'use client';

import { useEffect, useState } from 'react';

const timelineData = [
  {
    id: 'present',
    year: '2024',
    period: 'July 2023 - Present',
    title: 'Software Engineer II',
    type: 'present',
    content: {
      title: "Software Engineer II",
      subtitle: "Digital Dynamics Inc. • Semiconductor Fabrication",
      description: "Leading firmware and full-stack development for I/O controllers in semiconductor fabrication. Built diagnostics frameworks, web applications, and large-scale testing infrastructure that reduced customer issue resolution from days to minutes.",
      highlights: ["Firmware Development", "Vue/React Apps", "Large-Scale Testing", "Zynq-7000 SoC"],
      expandedDescription: [
        "As a Software Engineer II at Digital Dynamics Inc., I lead critical firmware and full-stack development initiatives for I/O controllers used in semiconductor fabrication equipment.",
        "My work directly impacts manufacturing efficiency by developing robust diagnostics frameworks that enable rapid issue identification and resolution.",
        "I architect and implement comprehensive testing infrastructure that supports large-scale validation of embedded systems, ensuring reliability in high-stakes manufacturing environments.",
        "Through innovative web application development, I've created intuitive interfaces that allow engineers to monitor, configure, and troubleshoot complex semiconductor fabrication equipment in real-time."
      ],
      keyAchievements: [
        "Reduced customer issue resolution time from days to minutes through comprehensive diagnostics framework",
        "Architected large-scale testing infrastructure supporting 100+ concurrent device validation",
        "Developed Vue.js and React applications serving 500+ daily active engineering users",
        "Implemented firmware solutions for Zynq-7000 SoC platforms with 99.9% uptime reliability",
        "Led cross-functional team of 5 engineers in delivering mission-critical embedded systems"
      ],
      technologies: [
        "Embedded C/C++", "Zynq-7000 SoC", "FPGA Development", "Vue.js", "React",
        "Node.js", "Python", "Linux Kernel", "Real-time Systems", "I2C/SPI Protocols",
        "Git", "Jenkins CI/CD", "Docker", "REST APIs", "WebSocket Communication"
      ],
      projects: [
        {
          name: "Real-time Diagnostics Framework",
          description: "Built comprehensive diagnostics system for semiconductor fabrication equipment with sub-millisecond response times"
        },
        {
          name: "Equipment Configuration Portal",
          description: "Developed full-stack web application for remote equipment configuration and monitoring"
        },
        {
          name: "Automated Testing Infrastructure",
          description: "Designed scalable testing platform supporting parallel validation of embedded firmware across multiple device types"
        }
      ]
    }
  },
  {
    id: 'freelance-work',
    year: '2022',
    period: 'Feb 2022 - Aug 2022',
    title: 'Freelance Web Developer',
    type: 'experience',
    content: {
      title: "Freelance Web Developer",
      subtitle: "Delica SF • Restaurant/Food Service",
      description: "Designed and launched a complete restaurant website with online ordering, payment processing, and admin management platform. Increased sales by 20% and streamlined operations for both customers and staff.",
      highlights: ["NextJS/React", "Square API", "SQLite Database", "Order Management"],
      expandedDescription: [
        "Led full-stack development of a comprehensive restaurant management platform for Delica SF, transforming their digital presence and operational efficiency.",
        "Architected and implemented a complete online ordering system with real-time inventory management and payment processing integration.",
        "Developed intuitive admin interfaces for restaurant staff to manage orders, update menus, and track sales analytics.",
        "Delivered measurable business impact with 20% sales increase and significantly improved customer satisfaction through streamlined ordering process."
      ],
      keyAchievements: [
        "Increased restaurant sales by 20% through optimized online ordering platform",
        "Reduced order processing time by 60% with automated workflow management",
        "Implemented secure payment processing handling $50K+ monthly transactions",
        "Built responsive design supporting 95% mobile user base",
        "Delivered project 2 weeks ahead of schedule under $10K budget"
      ],
      technologies: [
        "Next.js", "React", "JavaScript", "SQLite", "Square API", "Stripe",
        "CSS3", "HTML5", "Node.js", "Express.js", "REST APIs", "Responsive Design",
        "Git", "Vercel", "Database Design", "Payment Processing"
      ],
      projects: [
        {
          name: "Online Ordering Platform",
          description: "Full-featured ordering system with cart management, real-time pricing, and order tracking"
        },
        {
          name: "Restaurant Admin Dashboard",
          description: "Comprehensive management interface for menu updates, order processing, and sales analytics"
        },
        {
          name: "Payment Integration System",
          description: "Secure payment processing with Square API integration and automated receipt generation"
        }
      ]
    }
  },
  {
    id: 'ai-intern',
    year: '2022',
    period: 'Dec 2022 - Feb 2023',
    title: 'Software Engineer Intern',
    type: 'experience',
    content: {
      title: "Software Engineer Intern",
      subtitle: "Klarity Intelligence Inc. • AI Revenue Accounting",
      description: "Contributed to AI model development for contract analysis and revenue tracking. Built data generation tools and contract parsers to support machine learning training environments.",
      highlights: ["AI/ML Development", "Salesforce Integration", "Contract Analysis", "Data Engineering"],
      expandedDescription: [
        "Contributed to cutting-edge AI model development at Klarity Intelligence, focusing on automated contract analysis and revenue recognition for enterprise clients.",
        "Developed sophisticated data generation tools that enabled machine learning models to process complex financial contracts with high accuracy.",
        "Built robust contract parsing systems that extracted key financial terms and revenue recognition patterns from diverse document formats.",
        "Collaborated with data scientists and senior engineers to improve model training pipelines and deployment infrastructure."
      ],
      keyAchievements: [
        "Improved contract parsing accuracy by 15% through enhanced data preprocessing",
        "Built automated data generation tools processing 1000+ training samples daily",
        "Developed Salesforce integration handling real-time contract synchronization",
        "Contributed to ML pipeline reducing manual contract review time by 40%",
        "Implemented data validation systems ensuring 99.5% parsing reliability"
      ],
      technologies: [
        "Python", "Machine Learning", "Natural Language Processing", "Salesforce API",
        "Data Engineering", "SQL", "Pandas", "NumPy", "scikit-learn", "REST APIs",
        "Git", "Docker", "AWS", "Data Pipelines", "Contract Analysis"
      ],
      projects: [
        {
          name: "Contract Parser Engine",
          description: "Built ML-powered system for extracting revenue recognition data from complex financial contracts"
        },
        {
          name: "Training Data Generator",
          description: "Developed automated tools for generating high-quality training datasets for contract analysis models"
        },
        {
          name: "Salesforce Integration",
          description: "Implemented real-time contract synchronization between Klarity platform and Salesforce CRM"
        }
      ]
    }
  },
  {
    id: 'operations-role',
    year: '2021',
    period: 'Jun 2021 - Oct 2021',
    title: 'E-Commerce & Operations',
    type: 'experience',
    content: {
      title: "E-Commerce & Operations",
      subtitle: "Good Roots • Snack Chip Manufacturer",
      description: "Supported operations during academic breaks, managing online orders, fulfillment, and website enhancements. Added key features like store locator to improve customer experience.",
      highlights: ["E-commerce Operations", "Website Features", "Order Fulfillment", "Customer Experience"],
      expandedDescription: [
        "Managed comprehensive e-commerce operations for Good Roots, a growing snack chip manufacturer, during critical academic break periods.",
        "Streamlined online order processing and fulfillment workflows, ensuring timely delivery and customer satisfaction during peak seasons.",
        "Enhanced the company website with customer-requested features including an interactive store locator to help customers find retail partners.",
        "Collaborated with marketing and sales teams to optimize the online customer experience and drive conversion improvements."
      ],
      keyAchievements: [
        "Processed 500+ online orders with 99% accuracy during summer peak season",
        "Implemented store locator feature increasing website engagement by 25%",
        "Reduced order fulfillment time by 30% through workflow optimization",
        "Maintained 4.8/5 customer satisfaction rating during busy periods",
        "Developed inventory tracking system preventing stockouts"
      ],
      technologies: [
        "E-commerce Platforms", "HTML/CSS", "JavaScript", "Google Maps API",
        "Order Management Systems", "Inventory Tracking", "Customer Service Tools",
        "Data Entry", "Process Optimization", "Quality Control"
      ],
      projects: [
        {
          name: "Interactive Store Locator",
          description: "Developed customer-facing tool to find retail locations carrying Good Roots products"
        },
        {
          name: "Order Processing Optimization",
          description: "Streamlined fulfillment workflows reducing processing time and improving accuracy"
        },
        {
          name: "Website Enhancement Initiative",
          description: "Implemented multiple customer experience improvements based on user feedback"
        }
      ]
    }
  },
  {
    id: 'education',
    year: '2019',
    period: '2019 - 2023',
    title: 'Computer Science Degree',
    type: 'education',
    content: {
      title: "Bachelor of Science in Computer Science",
      subtitle: "UC Santa Cruz • 3.5 GPA",
      description: "Comprehensive computer science education covering algorithms, data structures, software engineering, and systems programming. Built strong foundation in both theoretical concepts and practical implementation.",
      highlights: ["Data Structures & Algorithms", "Software Engineering", "Systems Programming", "Academic Projects"],
      expandedDescription: [
        "Completed a rigorous Computer Science program at UC Santa Cruz, maintaining a 3.5 GPA while building a comprehensive foundation in software engineering principles.",
        "Developed expertise in algorithms, data structures, and systems programming through challenging coursework and hands-on projects.",
        "Gained practical experience in software engineering methodologies, including agile development, version control, and collaborative programming.",
        "Participated in research projects and group collaborations that enhanced both technical skills and teamwork abilities."
      ],
      keyAchievements: [
        "Graduated with 3.5 GPA in Computer Science program",
        "Completed advanced coursework in algorithms and data structures",
        "Led team projects in software engineering and systems design",
        "Participated in undergraduate research in distributed systems",
        "Tutored fellow students in programming fundamentals and data structures"
      ],
      technologies: [
        "Java", "C/C++", "Python", "JavaScript", "SQL", "Assembly Language",
        "Git", "Linux/Unix", "Data Structures", "Algorithms", "Software Engineering",
        "Database Design", "Computer Networks", "Operating Systems", "Discrete Mathematics"
      ],
      projects: [
        {
          name: "Distributed File System",
          description: "Implemented fault-tolerant distributed file system with replication and consistency protocols"
        },
        {
          name: "Compiler Design Project",
          description: "Built complete compiler for subset of C language including lexical analysis, parsing, and code generation"
        },
        {
          name: "Database Management System",
          description: "Designed and implemented relational database with B+ tree indexing and query optimization"
        }
      ]
    }
  }
];

function TimelineSection({ children, className = "", onVisibilityChange }) {
  const [isVisible, setIsVisible] = useState(false);
  const [intersectionRatio, setIntersectionRatio] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        const ratio = entry.intersectionRatio;

        setIsVisible(visible);
        setIntersectionRatio(ratio);

        // Call the parent callback with visibility data
        if (onVisibilityChange) {
          onVisibilityChange(visible, ratio);
        }
      },
      {
        threshold: Array.from({length: 21}, (_, i) => i * 0.05) // 0, 0.05, 0.1, ... 1.0
      }
    );

    const element = document.querySelector(`[data-section="${children.props['data-section']}"]`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [children.props, onVisibilityChange]);

  return (
    <div
      data-section={children.props['data-section']}
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {children}
    </div>
  );
}

function ExpandedSectionView({ section, onClose }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!section) return null;

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleBackdropClick}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: `url(/backgrounds/${section.id}.jpg)` }}
      />
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Content */}
      <div className={`relative h-full overflow-y-auto transform transition-all duration-300 ${
        isVisible ? 'translate-y-0 scale-100' : 'translate-y-4 scale-95'
      }`}>
        <div className="min-h-screen p-6 pt-16">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="fixed top-6 right-6 z-60 w-12 h-12 bg-black/80 hover:bg-black/90 border border-gray-600 hover:border-gray-400 rounded-full flex items-center justify-center text-white text-xl transition-all duration-200 hover:scale-110"
          >
            ×
          </button>

          {/* Main content container */}
          <div className={`max-w-6xl mx-auto ${isVisible ? 'expanded-entrance' : ''}`}>
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-mono text-lg font-bold mb-4">
                {section.year}
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-mono">
                {section.content.title}
              </h1>
              <h2 className="text-2xl text-blue-300 mb-6 font-mono">
                {section.content.subtitle}
              </h2>
              <div className="text-blue-400 font-mono text-lg">
                {section.period}
              </div>
            </div>

            {/* Expanded description */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6 font-mono">Overview</h3>
              <div className="space-y-4">
                {section.content.expandedDescription.map((paragraph, index) => (
                  <p key={index} className="text-gray-300 text-lg leading-relaxed font-mono">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Key achievements */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6 font-mono">Key Achievements</h3>
              <div className="grid gap-4">
                {section.content.keyAchievements.map((achievement, index) => (
                  <div key={index} className="bg-black/60 border border-gray-700 rounded-lg p-4 hover:border-gray-500 transition-colors">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                        {index + 1}
                      </div>
                      <p className="text-gray-300 font-mono leading-relaxed">
                        {achievement}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6 font-mono">Technologies & Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {section.content.technologies.map((tech, index) => (
                  <div key={index} className="bg-gray-800/70 hover:bg-gray-700/70 border border-gray-600 rounded-lg px-3 py-2 text-center transition-colors">
                    <span className="text-white font-mono text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6 font-mono">Notable Projects</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.content.projects.map((project, index) => (
                  <div key={index} className="bg-black/60 border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-colors">
                    <h4 className="text-xl font-bold text-white mb-3 font-mono">
                      {project.name}
                    </h4>
                    <p className="text-gray-300 font-mono leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Back to timeline button */}
            <div className="text-center pb-12">
              <button
                onClick={handleClose}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-mono text-lg transition-colors hover:scale-105 transform duration-200"
              >
                ← Back to Timeline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TimeMachineIndicator() {
  const [activeSection, setActiveSection] = useState('welcome');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateActiveSection = () => {
      const sections = ['welcome', ...timelineData.map(item => item.id)];
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? Math.min(Math.max(scrollTop / docHeight, 0), 1) : 0;

      setScrollProgress(scrollPercent);

      // Find the section that's currently most visible in viewport
      let currentSection = 'welcome';
      let bestMatch = 0;

      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // Calculate how much of the viewport this section occupies
          const visibleTop = Math.max(0, -rect.top);
          const visibleBottom = Math.max(0, rect.bottom - windowHeight);
          const sectionHeight = rect.height;
          const visibleHeight = sectionHeight - visibleTop - visibleBottom;

          const visibility = visibleHeight / windowHeight;

          // Section is "active" if it takes up more than 50% of viewport
          if (visibility > 0.5 && visibility > bestMatch) {
            bestMatch = visibility;
            currentSection = sectionId;
          }
        }
      });

      // Fallback: if no section is >50% visible, use the one closest to center
      if (bestMatch <= 0.5) {
        sections.forEach(sectionId => {
          const element = document.getElementById(sectionId);
          if (element) {
            const rect = element.getBoundingClientRect();
            const sectionCenter = rect.top + rect.height / 2;
            const viewportCenter = window.innerHeight / 2;
            const distanceFromCenter = Math.abs(sectionCenter - viewportCenter);

            // Closer to center = lower distance = higher score
            const centerScore = 1 / (distanceFromCenter + 1);

            if (centerScore > bestMatch) {
              bestMatch = centerScore;
              currentSection = sectionId;
            }
          }
        });
      }

      setActiveSection(currentSection);
      // Debug logging
      console.log('Active section:', currentSection, 'Progress:', scrollPercent.toFixed(2));
    };

    // Update immediately
    updateActiveSection();

    // Listen for scroll events
    const handleScroll = () => {
      updateActiveSection();
    };

    // Use both scroll and scrollend events for better detection
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Also check periodically to catch any missed updates
    const interval = setInterval(updateActiveSection, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const getCurrentYear = () => {
    if (activeSection === 'welcome') return '2025';
    const currentItem = timelineData.find(item => item.id === activeSection);
    return currentItem ? currentItem.year : '2025';
  };

  const getTimePhase = () => {
    if (activeSection === 'welcome') return 'present';
    if (activeSection === 'present') return 'recent';
    if (activeSection === 'senior-role' || activeSection === 'fullstack-role') return 'past';
    return 'distant';
  };

  const getTimeDescription = () => {
    const phase = getTimePhase();
    switch (phase) {
      case 'present': return 'Real Time';
      case 'recent': return 'Recent Memory';
      case 'past': return 'The Past';
      case 'distant': return 'Ancient History';
      default: return 'Timeline';
    }
  };

  return (
    <>
      {/* Time Machine Console - Top Right */}
      <div className="fixed top-6 right-6 z-40">
        <div className={`bg-black/90 border-2 rounded-lg p-4 font-mono transition-all duration-500 ${
          getTimePhase() === 'present' ? 'border-blue-500 shadow-blue-500/50' :
          getTimePhase() === 'recent' ? 'border-yellow-500 shadow-yellow-500/50' :
          getTimePhase() === 'past' ? 'border-orange-500 shadow-orange-500/50' :
          'border-red-500 shadow-red-500/50'
        } shadow-lg`}>
          <div className="text-xs text-gray-400 mb-1">TIME DISPLACEMENT</div>
          <div className={`text-2xl font-bold mb-2 ${
            getTimePhase() === 'present' ? 'text-blue-400' :
            getTimePhase() === 'recent' ? 'text-yellow-400' :
            getTimePhase() === 'past' ? 'text-orange-400' :
            'text-red-400'
          }`}>
            {getCurrentYear()}
          </div>
          <div className="text-xs text-gray-300 mb-3">{getTimeDescription()}</div>

          {/* Temporal Stability Bar */}
          <div className="w-32 h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-1000 ${
                getTimePhase() === 'present' ? 'bg-blue-500' :
                getTimePhase() === 'recent' ? 'bg-yellow-500' :
                getTimePhase() === 'past' ? 'bg-orange-500' :
                'bg-red-500'
              }`}
              style={{ width: `${100 - (scrollProgress * 100)}%` }}
            />
          </div>
          <div className="text-xs text-gray-500 mt-1">TEMPORAL STABILITY</div>
        </div>
      </div>

      {/* Retro CRT Scanlines Effect */}
      <div
        className="fixed inset-0 pointer-events-none z-30"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(255,255,255,0.03) 2px,
            rgba(255,255,255,0.03) 4px
          )`,
          opacity: isNaN(scrollProgress) ? 0 : Math.min(scrollProgress * 0.3, 0.3)
        }}
      />

      {/* Vertical Timeline Stepper - Left Side */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40">
        <div className="flex flex-col items-center space-y-6">
          {/* Welcome/Start indicator */}
          <div
            className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
              activeSection === 'welcome' ? 'scale-110' : 'hover:scale-105'
            }`}
            onClick={() => document.getElementById('welcome').scrollIntoView({ behavior: 'smooth' })}
          >
            <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
              activeSection === 'welcome' ? 'bg-white border-2 border-blue-500' : 'bg-gray-500'
            }`}></div>
            <span className="text-xs text-gray-400 mt-1 font-mono">Start</span>
          </div>

          {/* Connecting line from start */}
          <div className="w-0.5 h-8 bg-gray-600"></div>

          {/* Timeline sections */}
          {timelineData.map((item, index) => (
            <div key={item.id} className="flex flex-col items-center">
              <div
                className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
                  activeSection === item.id ? 'scale-110' : 'hover:scale-105'
                }`}
                onClick={() => document.getElementById(item.id).scrollIntoView({ behavior: 'smooth' })}
              >
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                  activeSection === item.id
                    ? getTimePhase() === 'present' ? 'bg-blue-500 border-blue-300 shadow-blue-500/50' :
                      getTimePhase() === 'recent' ? 'bg-yellow-500 border-yellow-300 shadow-yellow-500/50' :
                      getTimePhase() === 'past' ? 'bg-orange-500 border-orange-300 shadow-orange-500/50' :
                      'bg-red-500 border-red-300 shadow-red-500/50'
                    : 'bg-gray-700 border-gray-500'
                } shadow-lg`}>
                  <div className={`text-xs font-mono font-bold ${
                    activeSection === item.id ? 'text-white' : 'text-gray-300'
                  }`}>
                    {item.year.slice(-2)}
                  </div>
                </div>
                <span className={`text-xs mt-1 font-mono text-center transition-colors duration-300 ${
                  activeSection === item.id ? 'text-white' : 'text-gray-400'
                }`}>
                  {item.title.length > 12 ? item.title.substring(0, 12) + '...' : item.title}
                </span>
              </div>

              {/* Connecting line to next item */}
              {index < timelineData.length - 1 && (
                <div className={`w-0.5 h-8 mt-2 transition-colors duration-500 ${
                  // Show progress line based on current section
                  timelineData.findIndex(t => t.id === activeSection) > index
                    ? getTimePhase() === 'present' ? 'bg-blue-500' :
                      getTimePhase() === 'recent' ? 'bg-yellow-500' :
                      getTimePhase() === 'past' ? 'bg-orange-500' :
                      'bg-red-500'
                    : 'bg-gray-600'
                }`}></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Glitch Effect for Older Periods */}
      {scrollProgress > 0.5 && !isNaN(scrollProgress) && (
        <div
          className="fixed inset-0 pointer-events-none z-20"
          style={{
            background: `
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 50px,
                rgba(255,0,0,0.03) 50px,
                rgba(255,0,0,0.03) 52px
              )
            `,
            opacity: Math.min((scrollProgress - 0.5) * 0.4, 0.2),
            animation: `glitch 0.3s infinite`
          }}
        />
      )}

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes glitch {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-2px); }
          40% { transform: translateX(2px); }
          60% { transform: translateX(-1px); }
          80% { transform: translateX(1px); }
        }
      `}</style>
    </>
  );
}

export default function Home() {
  const [expandedSection, setExpandedSection] = useState(null);
  const [isExpanding, setIsExpanding] = useState(false);
  const [sectionVisibility, setSectionVisibility] = useState({});

  const handleSectionClick = (sectionId) => {
    setIsExpanding(true);
    setTimeout(() => {
      setExpandedSection(sectionId);
      setIsExpanding(false);
    }, 150);
  };

  const handleCloseExpanded = () => {
    setIsExpanding(true);
    setTimeout(() => {
      setExpandedSection(null);
      setIsExpanding(false);
    }, 150);
  };

  const handleSectionVisibilityChange = (sectionId) => (isVisible, ratio) => {
    setSectionVisibility(prev => ({
      ...prev,
      [sectionId]: {
        isVisible,
        ratio,
        opacity: Math.max(0, Math.min(1, ratio * 1.2)) // Scale ratio for smoother fade
      }
    }));
  };

  // Prevent body scroll when expanded
  useEffect(() => {
    if (expandedSection) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [expandedSection]);

  // ESC key to close expanded view
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && expandedSection) {
        handleCloseExpanded();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [expandedSection]);

  return (
    <div
      className="snap-y snap-mandatory overflow-y-scroll h-screen"
      style={{ scrollBehavior: 'smooth' }}
    >
      {/* Animated grid background */}
      <div className="fixed inset-0 z-0 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="grid-background"></div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="floating-dots"></div>
        </div>
      </div>

      {/* Custom CSS for background animations */}
      <style jsx>{`
        .grid-background {
          background-image:
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 60px 60px;
          width: 100%;
          height: 100%;
          animation: grid-move 20s linear infinite;
        }

        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }

        .floating-dots {
          background-image: radial-gradient(circle, rgba(59, 130, 246, 0.3) 2px, transparent 2px);
          background-size: 120px 120px;
          width: 100%;
          height: 100%;
          animation: dots-float 15s ease-in-out infinite;
        }

        @keyframes dots-float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.3;
          }
        }

        /* Enhanced transitions for timeline sections */
        .timeline-section {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .timeline-section:hover {
          transform: scale(1.02) translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        /* Smooth expand animation */
        .expand-indicator {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }

        /* Entrance animation for expanded view */
        .expanded-entrance {
          animation: expandIn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        @keyframes expandIn {
          0% {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        /* Enhanced timeline section hover effects */
        .timeline-section:hover {
          transform: scale(1.01);
        }
      `}</style>


      {/* Time Machine Interface */}
      <TimeMachineIndicator />

      {/* Welcome section */}
      <section id="welcome" className="snap-start h-screen flex items-center justify-center relative z-10">
        <div className="text-center max-w-4xl px-6">
          <div className="text-6xl md:text-8xl font-bold text-white mb-4 font-mono opacity-80">
            Maxton Lenox
          </div>
          <div className="text-xl text-blue-400 font-mono mb-6">
            Full-Stack Software Engineer
          </div>
          <div className="text-lg text-gray-300 font-mono mb-8 max-w-3xl mx-auto leading-relaxed">
            Firmware • Embedded Systems • Web Development
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm font-mono">
            <span className="text-gray-400">📧 maxton135@gmail.com</span>
            <span className="text-gray-400">📍 San Francisco, CA</span>
            <span className="text-gray-400">📞 415-308-4524</span>
          </div>
          <div className="text-sm text-gray-500 font-mono">
            ↓ Scroll to travel back through my career ↓
          </div>
        </div>
      </section>

      {/* Timeline sections */}
      {timelineData.map((item, index) => {
        const visibility = sectionVisibility[item.id];
        const backgroundOpacity = visibility ? visibility.opacity * 0.7 : 0; // Scale down for better text readability

        return (
          <section key={item.id} id={item.id} className="snap-start h-screen flex items-center justify-center relative z-10">
            {/* Background image with scroll-based fade */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-out"
              style={{
                backgroundImage: `url(/backgrounds/${item.id}.jpg)`,
                opacity: backgroundOpacity
              }}
            />
            <div className="absolute inset-0 bg-black/60" />

            <TimelineSection
              className="w-full relative z-10"
              onVisibilityChange={handleSectionVisibilityChange(item.id)}
            >
            <div data-section={item.id} className="max-w-4xl mx-auto px-6">
              <div
                className="timeline-section bg-black/80 backdrop-blur-sm rounded-lg p-8 border border-gray-800 relative cursor-pointer hover:border-gray-600 hover:bg-black/90 group"
                onClick={() => handleSectionClick(item.id)}
              >
                {/* Year badge */}
                <div className="absolute -top-4 -left-4 bg-blue-600 text-white px-4 py-2 rounded-full font-mono text-sm font-bold">
                  {item.year}
                </div>

                {/* Click to expand indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-blue-600/90 text-white px-3 py-1 rounded-full font-mono text-xs flex items-center space-x-1">
                    <span>Click to expand</span>
                    <span className="text-lg">→</span>
                  </div>
                </div>

                {/* Period indicator */}
                <div className="text-blue-400 font-mono text-sm mb-2">
                  {item.period}
                </div>

                {/* Main content */}
                <h2 className="text-4xl font-bold text-white mb-2 font-mono">
                  {item.content.title}
                </h2>
                <h3 className="text-xl text-blue-300 mb-6 font-mono">
                  {item.content.subtitle}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed font-mono mb-6">
                  {item.content.description}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {item.content.highlights.map((highlight, idx) => (
                    <div key={idx} className="bg-gray-800/50 rounded-lg px-3 py-2 text-center">
                      <span className="text-white font-mono text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Progress indicator */}
                <div className="flex justify-center mt-8">
                  <div className="text-gray-500 font-mono text-xs">
                    {index + 1} of {timelineData.length}
                  </div>
                </div>
              </div>
            </div>
            </TimelineSection>
          </section>
        );
      })}

      {/* Expanded Section Modal */}
      {expandedSection && (
        <ExpandedSectionView
          section={timelineData.find(item => item.id === expandedSection)}
          onClose={handleCloseExpanded}
        />
      )}

    </div>
  );
}
