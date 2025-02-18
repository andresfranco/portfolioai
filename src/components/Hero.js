import React, { useState, useContext } from 'react';
import { portfolioData } from '../data/portfolio';
import heroImage from '../assets/images/hero.jpg';
import ChatModal from './ChatModal';
import resumePDF from '../assets/files/resume.pdf';
import { LanguageContext } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Hero = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { person, experiences } = portfolioData;
  const { language } = useContext(LanguageContext);

  const getIconComponent = (iconName) => {
    switch (iconName) {
      case 'code':
        return require('react-icons/fa6').FaCode;
      case 'database':
        return require('react-icons/fa6').FaDatabase;
      case 'cloud':
        return require('react-icons/fa6').FaCloud;
      default:
        return require('react-icons/fa6').FaCode;
    }
  };

  return (
    <>
      <section id="home" className="relative min-h-screen w-full">
        <div className="relative z-10 flex flex-col-reverse md:flex-row min-h-screen">
          <div className="flex-1 flex items-center justify-center px-4 py-12 md:py-0 bg-black/80 md:bg-black/50">
            <div className="text-left max-w-xl">
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg">
                {person.name}
              </h1>
              {/* Use translated hero tagline */}
              <p className="text-xl md:text-3xl text-white/90 mb-8 max-w-2xl">
                {translations[language].hero_tagline}
              </p>

              {/* Experience Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {experiences.map((exp) => {
                  const Icon = getIconComponent(exp.icon);
                  return (
                    <div key={exp.id} className="flex items-center gap-4 bg-black/30 p-4 rounded-lg backdrop-blur-sm border border-white/10 transform hover:-translate-y-1 transition-all duration-300 hover:border-[#14C800]/30 group">
                      <div className="text-[#14C800] text-3xl group-hover:scale-110 transition-transform duration-300">
                        <Icon />
                      </div>
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-white">{exp.years}+</span>
                          {/* Use translated years label */}
                          <span className="text-white/80 text-sm">{translations[language].years_label}</span>
                        </div>
                        <p className="text-white font-medium">{exp.area[language]}</p>
                        <p className="text-white/60 text-sm">{exp.description[language]}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex gap-4 flex-wrap">
                <button
                  onClick={() => setIsChatOpen(true)}
                  className="bg-[#14C800] text-white text-xl px-8 py-4 rounded-lg transition-all duration-300 hover:bg-[#14C800]/90 hover:shadow-[0_4px_20px_rgba(20,200,0,0.4)] transform hover:-translate-y-1"
                >
                  {translations[language].chat_with_ai}
                </button>
                <a
                  href={resumePDF}
                  download="Andres_Franco_Resume.pdf"
                  className="bg-[#14C800] text-white text-xl px-8 py-4 rounded-lg transition-all duration-300 hover:bg-[#14C800]/90 hover:shadow-[0_4px_20px_rgba(20,200,0,0.4)] transform hover:-translate-y-1 inline-flex items-center"
                >
                  {translations[language].download_cv}
                </a>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative">
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${heroImage})` }}
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        </div>
      </section>

      <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
};

export default Hero;
