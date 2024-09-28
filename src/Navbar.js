import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure this exists

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact Us</Link>
        </nav>
    );
};

export default Navbar;
