import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">home</Link>
            <Link to="/c_code">creative code</Link>
            <Link to="/writing">writing</Link>
            <Link to="/games">games</Link>
            <Link to="/art">art</Link>
        </nav>
    );
}
 
export default Navbar;