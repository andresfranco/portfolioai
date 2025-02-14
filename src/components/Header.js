import React from 'react';

const Header = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header className="fixed w-full z-50 bg-black/70 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-white text-2xl font-bold">AMFAPPS</div>
          <ul className="flex space-x-4">
            {['Home', 'Projects', 'Skills', 'Contact'].map((item) => (
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
        </div>
      </nav>
    </header>
  );
};

export default Header;
