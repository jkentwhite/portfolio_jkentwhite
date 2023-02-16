import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink 
                to="/portfolio"
                exact={true}
            >HOME</NavLink>
            <NavLink 
                to="/portfolio/c_code"
            >CODE</NavLink>
            <NavLink 
                to="/portfolio/games"
            >GAMES</NavLink>
            {/* <NavLink 
                to="/portfolio/art"
            >ART</NavLink> */}
        </nav>
    );
}
 
export default Navbar;