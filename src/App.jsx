import React, { useState, useEffect, useRef } from 'react';
import Reveal from './component/Reveal';

const DrMayaReynoldsTherapy = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#E1D1D7] font-sans">
      {/* Navbar */}
      <nav className={`left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'} ${isScrolled ? 'backdrop-blur-lg bg-white/40 border-b border-white/30 shadow-lg' : 'backdrop-blur-md bg-white/20'}`}>

        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="flex items-center justify-between">

            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#4F5980] to-[#856B7D]"></div>
              <span className="text-2xl font-serif font-bold text-[#3E3E43]">
                Dr. Maya Reynolds
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Blog', 'Contact'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[#3E3E43] hover:text-[#4F5980] transition-colors duration-300 font-medium"
                >
                  {item}
                </a>
              ))}

              <button className="bg-[#4F5980] text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-xl">
                Book Consultation
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-[#3E3E43]"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

          </div>

          {/* Mobile Dropdown Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 backdrop-blur-lg bg-white/70 border border-white/40 rounded-xl p-6 shadow-lg">

              <div className="flex flex-col space-y-4">
                {['Home', 'Blog', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-[#3E3E43] hover:text-[#4F5980] font-medium"
                  >
                    {item}
                  </a>
                ))}

                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-[#4F5980] text-white px-6 py-3 rounded-full shadow-lg"
                >
                  Book Consultation
                </button>
              </div>

            </div>
          )}

        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={el => sectionRefs.current[0] = el}
        className="pt-32 pb-20 md:py-28 px-6 md:px-12 bg-[#E1D1D7] opacity-0 transition-all duration-700"
        style={{ transitionDelay: '100ms' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#3E3E43] leading-tight">
                Therapy for Anxiety, Trauma, and Burnout
              </h1>
              <p className="text-lg md:text-xl text-[#3E3E43]/80">
                Support for thoughtful and high-achieving adults who feel overwhelmed or emotionally exhausted.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-[#4F5980] text-white px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-xl">
                  Schedule Consultation
                </button>
                <button className="border border-[#4F5980] text-[#4F5980] px-8 py-4 rounded-full hover:bg-[#4F5980] hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/028/623/144/small/a-young-woman-sits-under-a-transparent-sphere-metaphor-of-psychological-calm-therapy-flat-illustration-vector.jpg"
                  alt="Calm therapy space"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* About Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Image (Left Side) */}
        <div className="aspect-square rounded-xl flex items-center justify-center bg-linear-to-br from-[#F5ECEF] to-[#856B7D] p-6">

          <img
            src="/MayaReynolds.png"
            alt="Dr. Maya Reynolds"
            className="w-4/5 h-4/5 object-cover rounded-xl shadow-lg"
          />

        </div>


        {/* Text (Right Side) */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#3E3E43]">
            Meet Dr. Maya Reynolds, PsyD
          </h2>

          <p className="text-lg text-[#3E3E43]/80">
            Dr. Maya Reynolds is a licensed clinical psychologist in Santa Monica specializing in anxiety, trauma, burnout, and emotional regulation. She works with individuals who feel successful externally but overwhelmed internally. Her therapy style is collaborative, warm, and grounded.
          </p>

          <div className="pt-4">
            <button className="bg-white/40 backdrop-blur-md border border-white/40 px-8 py-2 rounded-full shadow-md hover:bg-[#bfa0c5] transition-all duration-300">
              Learn More About Maya
            </button>
          </div>
        </div>

      </div>


      {/* Specialties Section */}
      <section
        ref={el => sectionRefs.current[2] = el}
        className="py-20 md:py-28 px-6 md:px-12 bg-white opacity-0 transition-all duration-700"
        style={{ transitionDelay: '300ms' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#3E3E43] mb-4">
              Areas of Specialization
            </h2>
            <p className="text-lg text-[#3E3E43]/80 max-w-3xl mx-auto">
              Evidence-based treatment for modern challenges
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Anxiety & Panic",
                description: "Helping clients manage worry, tension, and emotional overwhelm.",
                icon: "🌀"
              },
              {
                title: "Trauma Recovery",
                description: "Supporting safe and paced emotional healing.",
                icon: "💫"
              },
              {
                title: "Burnout & Perfectionism",
                description: "Helping professionals reconnect with sustainable living.",
                icon: "⚖️"
              }
            ].map((specialty, index) => (
              <div
                key={index}
                className="backdrop-blur-lg bg-[#856B7D] border border-white/10 shadow-xl rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl"
              >
                <div className="text-4xl mb-4">{specialty.icon}</div>

                <h3 className="text-xl font-serif font-bold text-white mb-3">
                  {specialty.title}
                </h3>

                <p className="text-white/70">
                  {specialty.description}
                </p>
              </div>

            ))}
          </div>
        </div>
      </section>

      {/* Therapy Approach */}
      <section
        ref={el => sectionRefs.current[3] = el}
        className="py-20 md:py-28 px-6 md:px-12 bg-[#F5ECEF] opacity-0 transition-all duration-700"
        style={{ transitionDelay: '400ms' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center items-center text-center h-full">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#3E3E43] mb-6">
                A Balanced Evidence-Based Approach
              </h2>

              <p className="text-lg text-[#3E3E43]/80 mb-8">
                Integrating multiple therapeutic modalities to provide personalized care that addresses both mind and body.
              </p>
            </div>



            <div className="space-y-4">
              {['Cognitive Behavioral Therapy (CBT)', 'EMDR Therapy', 'Mindfulness Practices', 'Body-Oriented Techniques'].map((method, index) => (
                <div
                  key={index}
                  className="backdrop-blur-md bg-[#a5899d] border border-white/30 rounded-xl p-6 hover:bg-white/60 transition-all duration-300 hover:translate-x-2"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 rounded-full bg-linear-to-br from-[#4F5980] to-[#856B7D] flex items-center justify-center">
                      <span className="text-white text-sm">{index + 1}</span>
                    </div>
                    <span className="text-lg font-medium text-[#3E3E43]">{method}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Background */}
      <section
        ref={el => sectionRefs.current[4] = el}
        className="py-20 md:py-28 px-6 md:px-12 bg-white opacity-0 transition-all duration-700"
        style={{ transitionDelay: '500ms' }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#3E3E43] text-center mb-12">
            Professional Background
          </h2>

          <div className="space-y-4">
            {[
              {
                title: "Education & Credentials",
                content: "Licensed Clinical Psychologist with PsyD training and specialization in trauma and anxiety treatments. Board certified with over 10 years of clinical experience."
              },
              {
                title: "Clinical Experience",
                content: "Experience working with adults navigating burnout, stress, trauma, and perfectionism across various settings including private practice, hospitals, and university counseling centers."
              },
              {
                title: "Therapeutic Philosophy",
                content: "Focus on collaborative and compassionate care emphasizing long-term resilience and emotional awareness. Believing in creating a safe space where clients can explore their experiences without judgment."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="backdrop-blur-lg bg-[#daabcb] border border-white/40 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-white/20 transition-all duration-300"
                >
                  <h3 className="text-xl font-serif font-bold text-[#3E3E43]">{item.title}</h3>
                  <svg
                    className={`w-6 h-6 text-[#4F5980] transform transition-transform duration-300 ${openAccordion === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openAccordion === index ? 'max-h-96' : 'max-h-0'}`}
                >
                  <div className="p-6 pt-0 border-t border-white/30">
                    <p className="text-[#3E3E43]/80">{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Office Section */}
      <section
        ref={el => sectionRefs.current[5] = el}
        className="py-20 md:py-28 px-6 md:px-12 bg-[#856B7D] opacity-0 transition-all duration-700"
        style={{ transitionDelay: '600ms' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
                A Calm Space for Healing
              </h2>
              <p className="text-lg text-white/90">
                Dr. Reynolds offers therapy at her Santa Monica office located at 123th Street 45 W, Santa Monica, CA 90401. The office is private, quiet, and filled with natural light, designed to help clients feel grounded and safe.
              </p>
              <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/30">
                <p className="text-white font-semibold mb-2">Availability</p>
                <p className="text-white/90">In-person and secure telehealth sessions available across California.</p>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="grid grid-cols-2 gap-4 md:gap-6">

                {/* Top Left */}
                <div className="aspect-square w-36 sm:w-44 md:w-48 lg:w-56 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/office1.jpeg"
                    alt="Office Interior"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Top Right */}
                <div className="aspect-square w-36 sm:w-44 md:w-48 lg:w-56 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/office2.jpeg"
                    alt="Therapy Room"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Bottom Center */}
                <div className="col-span-2 flex justify-center">
                  <div className="aspect-square w-36 sm:w-44 md:w-48 lg:w-56 rounded-2xl overflow-hidden shadow-xl mt-1 md:mt-2">
                    <img
                      src="/officearea.png"
                      alt="Waiting Area"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Session Options */}
      <section
        ref={el => sectionRefs.current[6] = el}
        className="py-20 md:py-28 px-6 md:px-12 bg-white opacity-0 transition-all duration-700"
        style={{ transitionDelay: '700ms' }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#3E3E43] text-center mb-12">
            Session Options
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "In-Person Therapy",
                description: "Comfortable and private Santa Monica office sessions with a warm, welcoming environment designed for healing.",
                icon: "🏢",
                color: "from-[#4F5980] to-[#856B7D]"
              },
              {
                title: "Telehealth Therapy",
                description: "Secure online sessions for California residents with flexible scheduling and privacy-protected video calls.",
                icon: "💻",
                color: "from-[#856B7D] to-[#E1D1D7]"
              }
            ].map((option, index) => (
              <div
                key={index}
                className={`backdrop-blur-lg bg-[#b9a1b2] border border-white/40 shadow-xl rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl`}
              >
                <div className="text-5xl mb-4">{option.icon}</div>
                <h3 className="text-2xl font-serif font-bold text-[#3E3E43] mb-4">
                  {option.title}
                </h3>
                <p className="text-[#3E3E43]/80 mb-6">
                  {option.description}
                </p>
                <button className={`bg-linear-to-r ${option.color} text-white px-6 py-3 rounded-full hover:scale-105 transition-all duration-300`}>
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        ref={el => sectionRefs.current[7] = el}
        className="py-20 md:py-28 px-6 md:px-12 bg-[#F5ECEF] opacity-0 transition-all duration-700"
        style={{ transitionDelay: '800ms' }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#3E3E43] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                question: "How do I know if therapy is right for me?",
                answer: "Therapy can help if you feel overwhelmed, anxious, burned out, or want to better understand your emotions and experiences. Many high-achieving individuals benefit from therapy to navigate life's challenges with more resilience and self-awareness."
              },
              {
                question: "Do you offer virtual therapy sessions?",
                answer: "Yes, secure telehealth sessions are available for California residents. We use HIPAA-compliant video conferencing software to ensure your privacy and confidentiality during online sessions."
              },
              {
                question: "What happens during the first session?",
                answer: "The first session focuses on understanding your goals, background, and creating a comfortable therapeutic plan together. We'll discuss what brings you to therapy, your history, and begin to establish our therapeutic relationship."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="backdrop-blur-lg bg-[#b9a1b2] border border-white/40 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-white/20 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-[#3E3E43]">{item.question}</h3>
                  <svg
                    className={`w-6 h-6 text-[#4F5980] transform transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openFAQ === index ? 'max-h-96' : 'max-h-0'}`}
                >
                  <div className="p-6 pt-0 border-t border-white/30">
                    <p className="text-[#3E3E43]/80">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={el => sectionRefs.current[8] = el}
        className="py-20 md:py-28 px-6 md:px-12 bg-[#4F5980] opacity-0 transition-all duration-700"
        style={{ transitionDelay: '900ms' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Start Your Therapy Journey
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Develop insight, resilience, and emotional balance through supportive therapy. Take the first step toward healing today.
            </p>
            <button className="bg-white text-[#4F5980] px-10 py-4 rounded-full shadow-xl hover:scale-105 transition-all duration-300 hover:shadow-2xl font-semibold text-lg">
              Book Consultation
            </button>
            <p className="text-white/70 mt-6">
              Limited availability • Free 15-minute consultation available
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#6a687e] text-white py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-linear-to-br from-[#48527b] to-[#977d8f]"></div>
                <span className="text-xl font-serif font-bold">Dr. Maya Reynolds</span>
              </div>
              <p className="text-white/70">Licensed Clinical Psychologist, PsyD</p>
            </div>

            <div>
              <h3 className="font-serif font-bold text-lg mb-4">Contact</h3>
              <p className="text-white/70 mb-2">123th Street 45 W</p>
              <p className="text-white/70">Santa Monica, CA 90401</p>
              <div className="mt-4 space-y-2">
                {['Blog', 'Contact'].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="block text-white/70 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div className="md:text-right">
              <h3 className="font-serif font-bold text-lg mb-4">Hours</h3>
              <p className="text-white/70">Monday - Friday: 9AM - 6PM</p>
              <p className="text-white/70">Saturday: 10AM - 2PM</p>
              <p className="text-white/70 mt-4">By Appointment Only</p>
            </div>
          </div>

          <div className=" border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/70">© {new Date().getFullYear()} Dr. Maya Reynolds. All rights reserved.</p>
            <p className="text-white/50 text-sm mt-2">Confidential & Secure Therapy Services</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.7s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default DrMayaReynoldsTherapy;