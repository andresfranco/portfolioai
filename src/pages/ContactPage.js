import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from 'react-icons/fa6';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: FaXTwitter, href: 'https://x.com/yourusername', label: 'X (Twitter)' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your email service integration here
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="pt-20">
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-white text-center mb-8">
            Get in Touch
          </h2>
          <p className="text-gray-300 text-center mb-12 text-lg">
            Have a question or want to work together? Feel free to reach out!
          </p>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 
                    focus:outline-none focus:border-[#14C800] transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 
                    focus:outline-none focus:border-[#14C800] transition-colors"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-white mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 
                  focus:outline-none focus:border-[#14C800] transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 
                  focus:outline-none focus:border-[#14C800] transition-colors resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#14C800] text-white px-8 py-3 rounded-lg
                transition-all duration-300 hover:bg-[#14C800]/90 
                hover:shadow-[0_4px_20px_rgba(20,200,0,0.4)]
                transform hover:-translate-y-1 disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {/* Social Links */}
          <div className="border-t border-gray-800 pt-12">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Connect With Me
            </h3>
            <div className="flex justify-center items-center gap-8">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
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
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
