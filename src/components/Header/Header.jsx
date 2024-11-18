import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='header-container'>
            <h2>Navbar</h2>
            <nav>
                <span>My Web Site</span>
                <NavLink to ={'/'}>Home</NavLink>
                <NavLink to={'about'}>About</NavLink>
                <NavLink to={'users'}>Users</NavLink>
                <NavLink to={'posts'}>Posts</NavLink>
                <NavLink to={'contact'}>Contact</NavLink>
            </nav>
        </div>
    );
};

export default Header;