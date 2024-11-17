import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='header-container'>
            <h2>Navbar</h2>
            <nav>
                <span>My Web Site</span>
                <Link to={'/'}>Home</Link>
                <Link to={'about'}>About</Link>
                <Link to={'users'}>Users</Link>
                <Link to={'posts'}>Posts</Link>
                <Link to={'contact'}>Contact</Link>
            </nav>
        </div>
    );
};

export default Header;