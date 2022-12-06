import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from "./artsi-logo.png";
import './NavBar.css';
import { Button } from './Button';
import SearchBar from './SearchBar';
import Data from './Data.json'

function NavBar() {
    const imgStyle = {
        height: '35%',
        width: '35%',
    };
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    // const showButton = () => {
    //     if(window.innerWidth <= 960) {
    //         setButton(false);
    //     } else {
    //         setButton(true);
    //     }
    // }

    // window.addEventListener('resize', showButton);
    
    return (
        <nav role='nav-exists' className="navbar">
            <div>
                <Link to="/home" className="navbar-logo">
                    <img src={logo} alt="Logo" style={imgStyle}/>
                </Link>
            </div>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <div className={click ? 'nav-menu active' : 'nav-menu'}>
                <SearchBar placeholder="Search Artsi..." data={Data}/>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/practice' className='nav-links' onClick={closeMobileMenu}>
                        Practice
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/profile' className='nav-links' onClick={closeMobileMenu}>
                        Profile
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                        About
                    </Link>
                </li>
                <li className='nav-item'>
                    <div className="nav-login">
                    {button && <Button buttonStyle='btn--outline'>Login</Button>}
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar