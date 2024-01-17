import React from 'react';
import '../styles/ProjectCard.css'; // CSS for individual project cards

function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {/* More details or a link to a detailed view */}
        </div>
    );
}

export default ProjectCard;
