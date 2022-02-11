import React from 'react';
import {Link} from 'react-router-dom'
import './NavBar.scss'

const NavBar = () => {
    return (
        <div className='navbar'>
            <Link to='/'>Главная</Link>
            <Link to='/tasks'>Задания</Link>
        </div>
    );
};

export default NavBar;
