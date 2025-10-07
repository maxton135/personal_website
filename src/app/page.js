'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Dither to avoid SSR issues with Three.js
const Dither = dynamic(() => import('../components/Dither'), { ssr: false });

const aboutMePhotos = [
  {
    image: "graduation.jpeg",
    caption: "Graduated in 2023 from UCSC!"
  },
  {
    image: "rowing.jpeg",
    caption: "Placed 2nd in National Rowing Championships"
  },
  {
    image: "ddi-team.jpeg",
    caption: "The best software team"
  },
  {
    image: "snowboarding.jpeg",
    caption: "Shred."
  },
  {
    image: "football-tackle.jpeg",
    caption: "Cool tackle pic from highschool football"
  },
];

const timelineData = [
  {
    id: 'present',
    year: 'Current Role',
    period: 'July 2023 - Present',
    title: 'Software Engineer II',
    type: 'present',
    expandText: "Check out my DDI projects",
    content: {
      title: "Software Engineer II",
      subtitle: "Digital Dynamics Inc. • Semiconductor Manufacturing",
      description: "Started as a college student working on a senior project sponsored by DDI. Now I'm a full-time engineer here. The past two years here have been of constant learning and development, and now I can confidently say I am a true software engineer.",
      highlights: ["Full Stack Engineer", "Embedded Firmware Development (C)", "Web Development (JavaScript)", "Test Development (Python)"],
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
          name: "Firmware Developer",
          description: "Contributed as a firmware engineer across all phases of the product lifecycle, from testing and feature development to resolving customer issues, working with both bare-metal and Linux applications on the Zynq-7000 SoC in Fusion products.",
          tag: "ROLE"
        },
        {
          name: "Full-stack Web Developer",
          description: "Contributed as a web applications engineer, creating 5+ full-stack web applications enhancing internal processes and providing intuitive tools for customers and internal teams company wide.",
          tag: "ROLE"
        },
        {
          name: "Product Diagnostics Framework",
          description: "Designed and developed the firmware diagnostics framework for all Fusion products, enabling customers to independently resolve issues without contacting engineering, reducing resolution times from days to minutes.",
          image: "system-log.jpg",
          imageCaption: "Some of the logs produced through the diagnostics framework I created",
          tag: "PROJECT"
        },
        {
          name: "On-Board Diagnostics Webpage",
          description: "Designed and implemented a firmware-hosted webpage with live system information, serving as the primary resource for understanding and debugging system behavior for customers and internal teams company wide.",
          image: "fobd.jpg",
          imageCaption: "Webpage I built that would pop up when user plugs into our system",
          tag: "PROJECT"
        },
        {
          name: "Large-scale Testing Design",
          description: "Proposed and built a network of 100+ Raspberry Pis and 100+ Fusions for large-scale testing, enabling early capture of firmware and hardware bugs and establishing a critical step in all software and hardware release cycles.",
          image: "mtbf-rack.png",
          imageCaption: "Some of the systems I built as part of large-scale testing",
          tag: "PROJECT"
        },
        {
          name: "Large-scale Testing Interface",
          description: "Implemented a full-stack web application for batch-controlling and monitoring the large-scale testing network, reducing test setup and data collection time by 90%; built with a Vue frontend and RESTful backend.",
          image: "mtbf-test-hub.png",
          imageCaption: "Webapp I created to control the large-scale testing systems",
          tag: "PROJECT"
        },
        {
          name: "Manufacturing Fixture Software",
          description: "Developed the software for three manufacturing fixtures, using a Python pipeline to interface with hardware to electrically validate components, and using a Vue frontend to display results and instructions to operators.",
          tag: "PROJECT"
        },
        {
          name: "and much more..."
        }
      ]
    }
  },
  {
    id: 'freelance-work',
    year: 'Recent',
    period: 'Feb 2025 – Aug 2025',
    title: 'Freelance Web Developer',
    type: 'experience',
    expandText: "Checkout the website features",
    content: {
      title: "Freelance Web Developer",
      subtitle: "Delica SF • Restaurant/Food Service",
      description: "Designed and launched a complete restaurant website with online ordering, payment processing, and admin management platform. Increased sales by 20% and streamlined operations for both customers and staff.",
      highlights: ["NextJS/React", "Square API", "SQLite Database", "Order Management"],
      technologies: [
        "Next.js", "React", "JavaScript", "SQLite", "Square API", "Stripe",
        "CSS3", "HTML5", "Node.js", "Express.js", "REST APIs", "Responsive Design",
        "Git", "Vercel", "Database Design", "Payment Processing"
      ],
      projects: [
        {
          name: "Restaurant Website",
          description: "Created the website for DELICA SF restaurant.",
          image: "delica-home.png",
          tag: "Project"
        },
        {
          name: "Online Ordering",
          description: "Designed, developed, and launched a restaurant website with online ordering and payment processing, increasing sales by 20%, expanding store outreach, and saving time for both customers and staff.",
          image: "delica-payment.png",
          tag: "Feature"
        },
        {
          name: "Restaurant Admin Dashboard",
          description: "Implemented an admin management platform with store controls, menu management, and announcement features, giving managers full dynamic control over the online storefront.",
          image: "delica-admin.png",
          tag: "Feature"
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
    expandText: "Check out my internship projects",
    content: {
      title: "Software Engineer Intern",
      subtitle: "Klarity Intelligence Inc. • AI Revenue Accounting",
      description: "Contributed to AI model development for contract analysis and revenue tracking. Built data generation tools and contract parsers to support machine learning training environments.",
      highlights: ["AI/ML Development", "Salesforce Integration", "Contract Analysis", "Data Engineering"],
      projects: [
        {
          name: "Business Contract AI Model",
          description: "Contributed to the development of an AI model comparing Salesforce data with business contract terms, enabling customers to quickly identify discrepancies and improve revenue tracking.",
          tag: "Project"
        },
        {
          name: "Training Data Generator",
          description: "Designed and developed an application to generate and insert mock company data into a Salesforce developer environment, allowing engineers to easily create training environments for AI models.",
          tag: "Project"
        },
        {
          name: "Business Contract Parser",
          description: "Developed a parser to extract key terms from business contracts, collecting structured data to support AI model training and improve automated contract analysis.",
          tag: "Project"
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
    expandText: "View job details",
    content: {
      title: "E-Commerce & Operations",
      subtitle: "Good Roots • Snack Chip Manufacturer",
      description: "Supported operations during academic breaks, managing online orders, fulfillment, and website enhancements. Added key features like store locator to improve customer experience.",
      highlights: ["E-commerce Operations", "Website Features", "Order Fulfillment", "Customer Experience"],
      projects: [
        {
          name: "E-Commerce Manager",
          description: "Managed and fulfilled online orders: packaged products, created shipping labels, and coordinated outgoing deliveries.",
          tag: "Role"
        },
        {
          name: "Kitchen Staff",
          description: "Supported daily kitchen operations during production shifts.",
          tag: "Role"
        },
        {
          name: "Interactive Store Locator",
          description: "Developed customer-facing tool to find retail locations carrying Good Roots products",
          tag: "Project"
        }
      ]
    }
  }
];

function TimelineSection({ children, className = "" }) {
  return (
    <div
      data-section={children.props['data-section']}
      className={`transition-all duration-1000 opacity-100 translate-y-0 ${className}`}
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
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

      {/* Content */}
      <div className={`relative h-full overflow-y-auto transform transition-all duration-300 ${
        isVisible ? 'translate-y-0 scale-100' : 'translate-y-4 scale-95'
      }`} style={{ scrollBehavior: 'smooth' }}>
        <div className="min-h-screen">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="fixed top-6 right-6 z-60 w-12 h-12 bg-black/80 hover:bg-black/90 border border-gray-600 hover:border-gray-400 rounded-full flex items-center justify-center text-white text-xl transition-all duration-200 hover:scale-110"
          >
            ×
          </button>

          {/* Header and Projects - Continuous Flow */}
          <div className="py-20 px-6">
            <div className={`max-w-4xl mx-auto text-center ${isVisible ? 'expanded-entrance' : ''}`}>
              {/* Header */}
              <div className="mb-16">
                <div className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-mono text-lg font-bold mb-4">
                  {section.year}
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-mono">
                  {section.content.title}
                </h1>
                <h2 className="text-2xl text-blue-300 mb-6 font-mono">
                  {section.content.subtitle}
                </h2>
                <div className="text-blue-400 font-mono text-lg mb-8">
                  {section.period}
                </div>

                {/* Expanded Description */}
                {section.content.expandedDescription && (
                  <div className="mb-12">
                    <div className="space-y-4 max-w-4xl mx-auto">
                      {section.content.expandedDescription.map((paragraph, index) => (
                        <p key={index} className="text-gray-100 text-lg leading-relaxed font-mono">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Projects - Using timelineData */}
              <div className="space-y-12">
                {section.content.projects.map((project, index) => {
                  // If project has a tag, display it in a card format
                  if (project.tag) {
                    return (
                      <div key={index} className="max-w-4xl mx-auto">
                        <div className="bg-black/60 border border-gray-700 rounded-lg p-8 hover:border-gray-500 transition-colors text-left">
                          {/* Tag */}
                          <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-mono font-bold mb-4 w-fit">
                            {project.tag}
                          </div>

                          {/* Project Content */}
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-mono text-left">
                            {project.name}
                          </h3>
                          <p className="text-gray-100 text-lg leading-relaxed font-mono mb-6 text-left">
                            {project.description}
                          </p>

                          {/* Project Image */}
                          {project.image && (
                            <div className="relative group">
                              <img
                                src={`/projects/${project.image}`}
                                alt={project.name}
                                className="w-full object-contain rounded-lg border border-gray-600"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                }}
                              />
                              {project.imageCaption && (
                                <div className="absolute inset-0 bg-black/70 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                  <p className="text-white text-center px-4 py-2 font-mono text-sm leading-relaxed">
                                    {project.imageCaption}
                                  </p>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  }

                  // Regular format for projects without tags
                  return (
                    <div key={index} className="text-left max-w-3xl mx-auto">
                      {/* Project Content */}
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-mono">
                        {project.name}
                      </h3>
                      <p className="text-gray-100 text-lg leading-relaxed font-mono mb-6">
                        {project.description}
                      </p>

                      {/* Project Image */}
                      {project.image && (
                        <div className="relative group">
                          <img
                            src={`/projects/${project.image}`}
                            alt={project.name}
                            className="w-full object-contain rounded-lg border border-gray-700"
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                          {project.imageCaption && (
                            <div className="absolute inset-0 bg-black/70 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <p className="text-white text-center px-4 py-2 font-mono text-sm leading-relaxed">
                                {project.imageCaption}
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Back Section */}
          <div className="py-20 text-center">
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
  );
}


export default function Home() {
  const [expandedSection, setExpandedSection] = useState(null);

  const handleSectionClick = (sectionId) => {
    setExpandedSection(sectionId);
  };

  const handleCloseExpanded = () => {
    setExpandedSection(null);
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
      {/* Dither Background */}
      <div className="fixed inset-0 z-0">
        <Dither
          waveColor={[0.0, 0.3, 0.5]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.8}
          colorNum={4}
          waveAmplitude={0.4}
          waveFrequency={2.5}
          waveSpeed={0.08}
          pixelSize={3}
        />
        {/* Overlay layer for cool effect */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Fallback background for devices that don't support WebGL */}
        <div className="absolute inset-0 bg-black -z-10" />
      </div>

      {/* Custom CSS for timeline animations */}
      <style jsx>{`

        /* Enhanced transitions for timeline sections */
        .timeline-section {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .timeline-section:hover {
          transform: scale(1.03) translateY(-8px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
        }

        .timeline-section:active {
          transform: scale(1.01) translateY(-2px);
        }

        .timeline-section:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 4px;
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



      {/* Welcome section */}
      <section id="welcome" className="snap-start h-screen flex items-center justify-center relative z-10">

        <div className="text-center max-w-5xl px-6 relative z-10">
          <div className="text-6xl md:text-8xl font-bold text-white mb-4 font-mono">
            Maxton Lenox
          </div>
          <div className="text-2xl md:text-3xl text-blue-400 font-mono mb-8">
            Full-Stack Software Engineer
          </div>
          <div className="text-xl md:text-2xl text-gray-100 font-mono mb-10 max-w-4xl mx-auto leading-relaxed">
            Firmware • Embedded Systems • Web Development
          </div>
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-base md:text-lg font-mono">
            <a href="https://linkedin.com/in/maxtonlenox" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-blue-400 transition-colors duration-200">
              💼 LinkedIn
            </a>
            <span className="text-gray-200">📍 San Francisco, CA</span>
            <a href="https://github.com/maxton135" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-blue-400 transition-colors duration-200">
              🐙 GitHub
            </a>
          </div>
          <div className="text-base md:text-lg text-gray-200 font-mono">
            ↓ Scroll to travel back through my career ↓
          </div>
        </div>
      </section>

      {/* Timeline sections */}
      {timelineData.map((item, index) => {
        return (
          <section key={item.id} id={item.id} className={`snap-start h-screen flex items-center justify-center relative z-10 transition-opacity duration-300 ${
            expandedSection === item.id ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}>

            <TimelineSection
              className="w-full relative z-10"
            >
            <div data-section={item.id} className="max-w-4xl mx-auto px-6">
              <div
                className="timeline-section bg-black/80 backdrop-blur-sm rounded-lg p-8 border border-gray-800 relative cursor-pointer hover:border-gray-600 hover:bg-black/90 group"
                onClick={() => handleSectionClick(item.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleSectionClick(item.id);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View details for ${item.title} position. ${item.expandText || "Click to expand"}`}
                aria-describedby={`desc-${item.id}`}
              >
                {/* Year badge */}
                <div className="absolute -top-4 -left-4 bg-blue-600 text-white px-4 py-2 rounded-full font-mono text-sm font-bold">
                  {item.year}
                </div>

                {/* Click to expand indicator */}
                <div className="absolute top-4 right-4 opacity-70 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-blue-600/90 text-white px-3 py-2 rounded-full font-mono text-sm flex items-center gap-2 expand-indicator">
                    <span>{item.expandText || "Click to expand"}</span>
                    <span className="text-blue-200 transition-transform group-hover:translate-x-1">→</span>
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
                <p id={`desc-${item.id}`} className="text-gray-100 text-lg leading-relaxed font-mono mb-6">
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
                  <div className="text-gray-200 font-mono text-xs">
                    {index + 1} of {timelineData.length}
                  </div>
                </div>
              </div>
            </div>
            </TimelineSection>
          </section>
        );
      })}

      {/* More About Me Section */}
      <section className="snap-start min-h-screen flex items-center justify-center relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center font-mono">
            More About Me
          </h2>

          <div className="space-y-8">
            {aboutMePhotos.map((photo, index) => (
              <div key={index} className="text-center">
                <div className="relative group">
                  <img
                    src={`/about/${photo.image}`}
                    alt={photo.caption}
                    className="w-full object-contain rounded-lg border border-gray-700"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/70 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-center px-4 py-2 font-mono text-sm leading-relaxed">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
