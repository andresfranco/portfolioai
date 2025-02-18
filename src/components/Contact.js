import React from 'react';
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: FaXTwitter, href: 'https://x.com/yourusername', label: 'X (Twitter)' },
    { 
      icon: FaEnvelope, 
      isRoute: true,
      path: '/contact',
      label: 'Contact Form'
    },
  ];

  return (
    <main className="pt-20">
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
          Connect With Me
          </h2>
          <div className="flex justify-center items-center gap-8">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return social.isRoute ? (
                <button
                  key={index}
                  onClick={() => navigate(social.path)}
                  className="text-white/90 p-4 rounded-lg text-3xl
                    transition-all duration-300 hover:bg-[#14C800] hover:text-white
                    hover:shadow-[0_4px_20px_rgba(20,200,0,0.4)]
                    transform hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <Icon />
                </button>
              ) : (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 p-4 rounded-lg text-3xl
                    transition-all duration-300 hover:bg-[#14C800] hover:text-white
                    hover:shadow-[0_4px_20px_rgba(20,200,0,0.4)]
                    transform hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
