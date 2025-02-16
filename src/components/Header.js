import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMenuOpen(false);
  };

  const menuItems = ['Home', 'Projects', 'Contact'];

  return (
    <header className="fixed w-full z-50 bg-black/70 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-white text-2xl font-bold">AMFAPPS</div>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-4">
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleScroll(e, item.toLowerCase())}
                  className="text-white/90 px-4 py-2 rounded-lg text-lg
                    transition-all duration-300 hover:bg-[#14C800] hover:text-white
                    hover:shadow-[0_4px_20px_rgba(20,200,0,0.4)]
                    transform hover:-translate-y-1"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`md:hidden fixed inset-0 bg-black/98 backdrop-blur-md z-40 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}>
          <div className="flex flex-col items-center justify-center min-h-screen">
            <ul className="space-y-8">
              {menuItems.map((item) => (
                <li key={item} className="text-center">
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => handleScroll(e, item.toLowerCase())}
                    className="text-white px-8 py-3 rounded-lg text-2xl
                      transition-all duration-300 hover:bg-[#14C800] hover:text-white
                      hover:shadow-[0_4px_20px_rgba(20,200,0,0.4)]
                      transform hover:-translate-y-1 inline-block
                      bg-black/40"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
