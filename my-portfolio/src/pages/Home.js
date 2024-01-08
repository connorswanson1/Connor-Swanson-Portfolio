import React from 'react';
import profilePhoto from '../assets/profile.jpg';

function Home() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '50px' }}>
            <div style={{ flex: 1, paddingRight: '50px' }}>
                <h1>Welcome to My Portfolio!</h1>
                <p>Hello! I'm Connor Swanson, a passionate software engineer.</p>
                <p>I specialize in web development and am excited to share my projects and
                    experiences with you. Feel free to browse through my work and get in touch
                    if you have any questions or opportunities.</p>
            </div>
            <div style={{ flex: 1 }}>
                <img
                    src={profilePhoto}
                    alt="Connor Swanson"
                    style={{ maxWidth: '100%', maxHeight: '400px', borderRadius: '10px' }}
                />
            </div>
        </div>
    );
}

export default Home;
