import React from 'react';

function Footer() {
    const footerStyle = {
        color: 'white',
        background: '#1891AC', 
        textAlign: 'center',
        marginTop: '3em',
        padding: '1em'
    };
    return (
        <footer style={footerStyle}>
            Make with <span role="img" aria-label="heart">❤️</span> for <a target="_blank" rel="noopener noreferrer" href="https://github.com/condef5/">condef5</a>
        </footer>
    )
}

export default Footer;
