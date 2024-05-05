import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <h2>NBA Player Stats</h2>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/players">Players Search</Link>
                <Link to="/signup">Sign Up</Link>
                <Link to="/signin">Sign In</Link>
            </div>
        </nav>
    );
}

export default NavBar;