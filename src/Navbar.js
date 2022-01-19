import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Blog</h1>
            <class className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </class>
        </nav>
     );
}
 
export default Navbar;