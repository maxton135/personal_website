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
      highlights: ["Firmware Development", "Vue/React Apps", "Large-Scale Testing", "Zynq-7000 SoC"]
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
      highlights: ["NextJS/React", "Square API", "SQLite Database", "Order Management"]
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
      highlights: ["AI/ML Development", "Salesforce Integration", "Contract Analysis", "Data Engineering"]
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
      highlights: ["E-commerce Operations", "Website Features", "Order Fulfillment", "Customer Experience"]
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
      highlights: ["Data Structures & Algorithms", "Software Engineering", "Systems Programming", "Academic Projects"]
    }
  }
];

function TimelineSection({ children, className = "" }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.querySelector(`[data-section="${children.props['data-section']}"]`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [children.props]);

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
      {timelineData.map((item, index) => (
        <section key={item.id} id={item.id} className="snap-start h-screen flex items-center justify-center relative z-10">
          <TimelineSection className="w-full">
            <div data-section={item.id} className="max-w-4xl mx-auto px-6">
              <div className="bg-black/80 backdrop-blur-sm rounded-lg p-8 border border-gray-800 relative">
                {/* Year badge */}
                <div className="absolute -top-4 -left-4 bg-blue-600 text-white px-4 py-2 rounded-full font-mono text-sm font-bold">
                  {item.year}
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
      ))}

    </div>
  );
}
