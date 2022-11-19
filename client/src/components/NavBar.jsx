import React from 'react' ;
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import logo from '../media/logo.png'
import s from '../styles/navBar.module.css'

export default function Navbar(){
    return (
        <nav className={s.nav}>
            <Link to='/'>
                <span className={s.landinglink}>
                    <img src={logo} width="120" alt="landing" />
                </span>
            </Link>
            <SearchBar />
            <Link to="/pokemon"><button className={s.create}>Create</button></Link>
        </nav>
      );
}