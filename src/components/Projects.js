import React, { useState } from 'react';
import project1 from '../assets/images/project1.jpg';
import project2 from '../assets/images/project2.jpg';
import project3 from '../assets/images/project3.jpg';

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 w-full max-w-4xl rounded-xl overflow-hidden">
        <div className="border-b border-gray-800 p-4 flex justify-between items-center">
          <h3 className="text-white text-2xl font-bold">{project.title}</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>
        <div className="p-6">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <p className="text-gray-300 text-lg mb-6">
            {project.description}
          </p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#14C800] text-white px-6 py-3 rounded-lg
              transition-all duration-300 hover:bg-[#14C800]/90 
              hover:shadow-[0_4px_20px_rgba(20,200,0,0.4)]
              transform hover:-translate-y-1"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      image: project1,
      description: "A comprehensive e-commerce platform with a user-friendly interface and secure payment gateway.",
      link: "#"
    },
    {
      id: 2,
      title: "Mobile Application",
      image: project2,
      description: "A mobile application designed to enhance user experience with intuitive navigation and seamless performance.",
      link: "#"
    },
    {
      id: 3,
      title: "Digital Marketing Campaign",
      image: project3,
      description: "A digital marketing campaign that leverages social media and SEO strategies to boost brand visibility.",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="project-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="relative group cursor-pointer rounded-xl overflow-hidden
                transition-all duration-300 hover:bg-[#14C800]/10
                hover:shadow-[0_4px_20px_rgba(20,200,0,0.4)]
                transform hover:-translate-y-1"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100
                group-hover:bg-black/85 transition-all duration-300 
                flex items-center justify-center">
                <h3 className="text-white text-xl font-bold text-center px-4
                  opacity-0 group-hover:opacity-100 transform 
                  transition-all duration-300">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
