import React from 'react';
import ProjectCard from '../components/ProjectCard'; // Assume you have a ProjectCard component
import '../styles/Projects.css'; // CSS file for styling
import proj1Photo from '../assets/gtt_ss.png';

function Projects() {
    // Replace this with actual project data
    const projects = [
        {
            id: 1,
            title: 'Gamified Task Tracker',
            description: 'iOS and Android App used for administering, tracking, and completing tasks.',
            imageUrl: proj1Photo,
            videoUrl: 'https://www.youtube.com/embed/n6FNI6N8nVw?si=DTipHvPzAKcCydYg',
            githubUrl: 'https://github.com/thejacobhardman/Gamified-Task-Tracker',
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
