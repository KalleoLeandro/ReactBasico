import './Navbar.css';

import { /*Link,*/ NavLink } from 'react-router-dom';

const Navbar = ()=>{
    return <nav>
        {/*
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>        
        */}
        {/*Exemplo de Navlink com class dinâmica*/}
        {/*
        <NavLink to="/" className={({isActive})=>(isActive ? "ativo" : "naoativo")}>Home</NavLink>
        <NavLink to="/about" className={({isActive})=>(isActive ? "ativo" : "naoativo")}>Sobre</NavLink>        
        */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Sobre</NavLink>        
    </nav>
}

export default Navbar;