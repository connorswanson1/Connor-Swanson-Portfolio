import React from 'react';
import ProjectCard from '../components/ProjectCard'; // Assume you have a ProjectCard component
import '../styles/Projects.css'; // CSS file for styling

function Projects() {
    // Replace this with actual project data
    const projects = [
        {
            id: 1,
            title: 'Project One',
            description: 'Brief description of Project One...',
            imageUrl: 'url-to-image',
            // ... other project details
        },
        // ... more projects
    ];

    return (
        <div className="projects-container">
            {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
}

export default Projects;
