import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">Ethical Tech</div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/news">News & Articles</Link></li>
                <li><Link to="/tech-insights">Tech Insights</Link></li>
                <li><Link to="/quizzes">Quizzes</Link></li>
                <li><Link to="/auth">Login/SignUp</Link></li> {/* Updated link */}
            </ul>
        </nav>
    );
};

export default Navbar;