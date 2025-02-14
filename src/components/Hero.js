import React, { useState } from 'react';
import heroImage from '../assets/images/hero.jpg';
import ChatModal from './ChatModal';

const Hero = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <section id="home" className="relative min-h-screen w-full">
        {/* Content Container */}
        <div className="relative z-10 flex flex-col-reverse md:flex-row min-h-screen">
          {/* Left Content */}
          <div className="flex-1 flex items-center justify-center px-4 py-12 md:py-0 bg-black/80 md:bg-black/50">
            <div className="text-left max-w-xl">
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg">
                Andres Franco
              </h1>
              <p className="text-xl md:text-3xl text-white/90 mb-12 max-w-2xl">
                Transforming data into actionable insights with cutting-edge technology and creative solutions.
              </p>
              <button 
                onClick={() => setIsChatOpen(true)}
                className="bg-[#14C800] text-white text-xl px-8 py-4 rounded-lg 
                  transition-all duration-300 hover:bg-[#14C800]/90 
                  hover:shadow-[0_4px_20px_rgba(20,200,0,0.4)] 
                  transform hover:-translate-y-1"
              >
                Chat with my AI assistant
              </button>
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
      
      <ChatModal 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
      />
    </>
  );
};

export default Hero;
