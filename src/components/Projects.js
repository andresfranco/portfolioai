import React from 'react';
import project1 from '../assets/images/project1.jpg';
import project2 from '../assets/images/project2.jpg';
import project3 from '../assets/images/project3.jpg';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="project-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="project-card bg-gray-700 rounded-lg overflow-hidden shadow-lg">
            <img src={project1} alt="Project 1" className="w-full h-52 object-cover" />
            <h3 className="project-title text-xl p-4">E-commerce Platform</h3>
          </div>
          <div className="project-card bg-gray-700 rounded-lg overflow-hidden shadow-lg">
            <img src={project2} alt="Project 2" className="w-full h-52 object-cover" />
            <h3 className="project-title text-xl p-4">Mobile Application</h3>
          </div>
          <div className="project-card bg-gray-700 rounded-lg overflow-hidden shadow-lg">
            <img src={project3} alt="Project 3" className="w-full h-52 object-cover" />
            <h3 className="project-title text-xl p-4">Digital Marketing Campaign</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
