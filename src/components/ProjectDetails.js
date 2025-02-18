import React from 'react';
import { FaGithub, FaGlobe, FaCalendar, FaFolder, FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

const ProjectDetails = ({ project, onBackClick, onPreviousClick, onNextClick }) => {
  const handleNavigation = (e, id) => {
    e.preventDefault();
    if (id === 'projects') {
      onBackClick();
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <article className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={onBackClick}
            className="flex items-center gap-2 text-white/90 px-4 py-2 rounded-lg
              transition-all duration-300 hover:bg-[#14C800] hover:text-white
              hover:shadow-[0_4px_20px_rgba(20,200,0,0.4)]
              transform hover:-translate-y-1"
          >
            <FaArrowLeft />
            <span>Back to Projects</span>
          </button>

          <div className="flex gap-4">
            {onPreviousClick && (
              <button
                onClick={onPreviousClick}
                className="flex items-center gap-2 text-white/90 px-4 py-2 rounded-lg
                  transition-all duration-300 hover:bg-[#14C800] hover:text-white
                  hover:shadow-[0_4px_20px_rgba(20,200,0,0.4)]
                  transform hover:-translate-y-1"
              >
                <FaArrowLeft />
                <span>Previous</span>
              </button>
            )}
            {onNextClick && (
              <button
                onClick={onNextClick}
                className="flex items-center gap-2 text-white/90 px-4 py-2 rounded-lg
                  transition-all duration-300 hover:bg-[#14C800] hover:text-white
                  hover:shadow-[0_4px_20px_rgba(20,200,0,0.4)]
                  transform hover:-translate-y-1"
              >
                <span>Next</span>
                <FaArrowRight />
              </button>
            )}
          </div>
        </div>

        {/* Project Header */}
        <header className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            {project.brief}
          </p>
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Project Image and Description */}
          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-xl overflow-hidden bg-gray-800 shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto"
              />
            </div>
            <div className="prose prose-lg prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
              <p className="text-gray-300">
                {project.description}
              </p>
            </div>
          </div>

          {/* Project Info Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-gray-800 rounded-xl p-6 sticky top-24">
              <h3 className="text-xl font-semibold text-white mb-6">Project Details</h3>
              <dl className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaCalendar className="text-[#14C800] text-xl" />
                  <div>
                    <dt className="text-gray-400 text-sm">Date</dt>
                    <dd className="text-white">{project.date}</dd>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaFolder className="text-[#14C800] text-xl" />
                  <div>
                    <dt className="text-gray-400 text-sm">Category</dt>
                    <dd className="text-white">{project.category}</dd>
                  </div>
                </div>
                
                <div className="pt-6 space-y-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 w-full bg-[#14C800] text-white px-4 py-2 rounded-lg
                        transition-all duration-300 hover:bg-[#14C800]/90 
                        hover:shadow-[0_4px_20px_rgba(20,200,0,0.4)]
                        transform hover:-translate-y-1"
                    >
                      <FaGlobe />
                      <span>View Live Site</span>
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 w-full bg-gray-700 text-white px-4 py-2 rounded-lg
                        transition-all duration-300 hover:bg-gray-600
                        transform hover:-translate-y-1"
                    >
                      <FaGithub />
                      <span>View Repository</span>
                    </a>
                  )}
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </article>
    </div>
  );
};

// Example usage with dummy data
const ExampleProject = {
  title: "E-commerce Platform",
  brief: "A modern e-commerce solution built with React and Node.js, featuring real-time inventory management and secure payment processing.",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  image: "/path/to/project-image.jpg",
  date: "January 2024",
  category: "Web Development",
  liveUrl: "https://example.com",
  repoUrl: "https://github.com/username/project"
};

export default ProjectDetails;
