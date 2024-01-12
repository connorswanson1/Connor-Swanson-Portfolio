import React from 'react';
import profilePhoto from '../assets/sunset_portrait.jpg'; // Path to your profile photo

function About() {
    return (
        <div className="about-page">
            <div className="about-content">
                <img src={profilePhoto} alt="Your Name" className="about-profile-photo" />
                <div className="about-text">
                    <h1>I'm Connor Swanson, a software engineer</h1>
                    <p>
                        In the fall of 2023 I graduated from the University of Northern Colorado, with a bachelor's
                        degree in Software Engineering. Now, I am eager to get my start in the ever-changing and
                        fast moving world of tech.
                    </p>
                    <p>
                        4 Years of college computer science courses have given me a well rounded skill set,
                        ranging from ...
                    </p>
                    <p> Outside of tech, you can usually find me riding my skateboard, a hobby I have been
                        practicing for more than ten years now! And when its too cold for that, I love staying
                        in and playing games with my buddies. My weekends are usually spent with my wonderful
                        girlfriend, going to concerts, seeing movies at old theaters, or hunting for records.
                    </p>
                    {/* You can add more paragraphs or sections as needed */}
                </div>
            </div>
        </div>
    );
}

export default About;
