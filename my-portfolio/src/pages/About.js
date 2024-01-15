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
                        In the fall of 2023, I graduated from the University of Northern Colorado, with a bachelor's
                        degree in Software Engineering. Now, I am eager to get my start in the ever-changing and
                        fast moving world of tech.
                    </p>
                    <p>
                        4 Years of college computer science courses have given me familiarity with a range of
                        object-oriented programming languages like Python, Java, C#, and JavaScript. My degree
                        in software engineering helped to build a solid foundation in object-oriented concepts,
                        understanding of data structures and algorithms, and familiarity with the software
                        development life cycle and Agile methodology.
                    </p>
                    <p>
                        To get caught up with the software world outside of school, I have focused on learning
                        industry standard technology, like ReactJS, which is what this website is built with.
                        I have also made an effort to incorporate using AI, like ChatGPT, to assist in my
                        learning and programming. AI is no doubt the technology of the future and I want to
                        stay ahead with it! I believe that my independent learning outside of what was required
                        to obtain my degree has made me a much better programmer overall.
                    </p>
                    <p> Outside of tech, you can usually find me riding my skateboard, a hobby I have been
                        practicing for more than ten years now! And when its too cold for that, I love staying
                        in and playing games with my buddies. My weekends are usually spent with my wonderful
                        girlfriend, going to concerts, seeing movies at old theaters, or hunting for vinyl records.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
