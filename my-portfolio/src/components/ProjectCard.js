import React from 'react';
import '../styles/ProjectCard.css'; // CSS for individual project cards

function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <div className="project-text">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {/* Embed YouTube video if available, if not use photo */}
                {project.videoUrl ? (
                    <div className="video-container">
                        <iframe width="560"
                            height="315"
                            src={project.videoUrl}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>
                        </iframe>
                    </div>
                ) : (
                    project.imageUrl && (
                        <img src={project.imageUrl} alt={project.title} className="project-image" />
                    )
                )}
                {project.githubUrl && (
                    <div className="project-github-link">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                    </div>
                )}
            </div>

        </div>
    );
}


export default ProjectCard;