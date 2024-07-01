import React from 'react';
import ProjectCard from '../components/ProjectCard'; // Assume you have a ProjectCard component
import '../styles/Projects.css'; // CSS file for styling
import proj1Photo from '../assets/tsdb_ss.png';
import proj2Photo from '../assets/gtt_ss.png';

function Projects() {
    // Replace this with actual project data
    const projects = [
        {
            id: 1,
            title: 'TeamSESH Database',
            description: 'Developed a full-stack web application designed to catalog the extensive music library of the artist "Bones", focusing on categorizing tracks by various attributes including producers, release dates, and associated artists. This platform serves as a comprehensive database for fans and researchers, offering detailed insights and an enhanced user experience.',
            imageUrl: proj1Photo,
            siteUrl: 'https://teamseshdatabase.com',
            githubUrl: 'https://github.com/connorswanson1/TeamSesh-Music-Catalog',
        },
        {
            id: 2,
            title: 'Gamified Task Tracker',
            description: 'iOS and Android App built with Dart through Google FLutter used for administering, tracking, and completing tasks. My roles in this project included front-end planning (wireframes and mockups, using Figma) and later with making the app compatible with iOS devices.',
            imageUrl: proj2Photo,
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
