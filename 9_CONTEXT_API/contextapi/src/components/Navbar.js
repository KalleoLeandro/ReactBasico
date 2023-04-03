import './Navbar.css';

import { Link } from 'react-router-dom';

const Navbar = () => {
    return <nav>
        <Link to="/Pagina1">Página 1</Link>
        <Link to="/Pagina2">Página 2</Link>
        <Link to="/Pagina3">Página 3</Link>
    </nav>
}

export default Navbar;