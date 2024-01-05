import React from 'react';

function Footer() {
    return (
        <footer style={{ backgroundColor: '#333', color: 'white', padding: '10px 0', textAlign: 'center' }}>
            <p>Copyright © {new Date().getFullYear()} Connor Swanson</p>
        </footer>
    );
}

export default Footer;
