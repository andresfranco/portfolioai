import React, { useEffect } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import ProjectDetails from '../components/ProjectDetails';
import { projectsData } from '../data/projects';

const ProjectDetailsPage = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const currentProjectIndex = projectsData.findIndex(p => p.id.toString() === projectId);
  const project = projectsData[currentProjectIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const handleBackClick = () => {
    navigate('/projects');
  };

  const handlePrevious = () => {
    if (currentProjectIndex > 0) {
      navigate(`/projects/${projectsData[currentProjectIndex - 1].id}`);
    }
  };

  const handleNext = () => {
    if (currentProjectIndex < projectsData.length - 1) {
      navigate(`/projects/${projectsData[currentProjectIndex + 1].id}`);
    }
  };

  return (
    <div className="flex-grow">
      <ProjectDetails 
        project={project}
        onBackClick={handleBackClick}
        onPreviousClick={currentProjectIndex > 0 ? handlePrevious : null}
        onNextClick={currentProjectIndex < projectsData.length - 1 ? handleNext : null}
      />
    </div>
  );
};

export default ProjectDetailsPage;
