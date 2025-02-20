import React, { useContext } from 'react';
import { FaCalendar, FaArrowLeft, FaArrowRight, FaCode, FaDatabase, FaCloud } from 'react-icons/fa6';
import { translations } from '../data/translations';
import { LanguageContext } from '../context/LanguageContext';

const ExperienceDetails = ({ experience, onBackClick, onPreviousClick, onNextClick }) => {
  const { language } = useContext(LanguageContext);

  // Early validation of required props
  if (!experience || !language) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <p className="text-white text-xl">{translations[language].loading_experience}</p>
      </div>
    );
  }

  // Get icon component based on icon name
  const getIconComponent = (iconName) => {
    switch (iconName) {
      case 'code':
        return FaCode;
      case 'database':
        return FaDatabase;
      case 'cloud':
        return FaCloud;
      default:
        return FaCode;
    }
  };

  const Icon = getIconComponent(experience.icon);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation Bar - Fixed at top */}
      <div className="fixed top-24 left-0 right-0 z-10 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <button
              onClick={onBackClick}
              className="flex items-center gap-2 text-white/90 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-[#14C800] hover:text-white hover:shadow-[0_4px_20px_rgba(20,200,0,0.4)] transform hover:-translate-y-1"
            >
              <FaArrowLeft />
              <span>{translations[language].back_to_home}</span>
            </button>

            <div className="flex gap-4">
              {onPreviousClick && (
                <button
                  onClick={onPreviousClick}
                  className="flex items-center gap-2 text-white/90 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-[#14C800] hover:text-white hover:shadow-[0_4px_20px_rgba(20,200,0,0.4)] transform hover:-translate-y-1"
                >
                  <FaArrowLeft />
                  <span>{translations[language].previous}</span>
                </button>
              )}
              {onNextClick && (
                <button
                  onClick={onNextClick}
                  className="flex items-center gap-2 text-white/90 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-[#14C800] hover:text-white hover:shadow-[0_4px_20px_rgba(20,200,0,0.4)] transform hover:-translate-y-1"
                >
                  <span>{translations[language].next}</span>
                  <FaArrowRight />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Adjusted spacing */}
      <article className="max-w-7xl mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Experience Header - Moved down and added padding */}
          <header className="pt-32 pb-12">
            <div className="mt-16 flex items-center gap-6"> {/* Added extra top margin to clear the navigation */}
              <div className="text-[#14C800] text-5xl">
                <Icon />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {experience.area[language]}
                </h1>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-[#14C800]">{experience.years}+</span>
                  <span className="text-white/80">{translations[language].years_experience}</span>
                </div>
              </div>
            </div>
          </header>

          {/* Experience Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  {translations[language].experience_overview}
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {experience.description[language]}
                </p>
              </div>

              {/* Skills Section */}
              {experience.skills && experience.skills.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">
                    {translations[language].skills_technologies}
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {experience.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gray-900 text-white rounded-full border 
                          border-[#14C800]/30 transition-all duration-300 
                          hover:bg-[#14C800] hover:border-transparent 
                          hover:shadow-[0_4px_20px_rgba(20,200,0,0.4)] 
                          transform hover:-translate-y-1"
                      >
                        {skill.name[language]}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ExperienceDetails;
