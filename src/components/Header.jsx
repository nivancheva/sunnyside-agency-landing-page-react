import './Header.css';
import logo from '../images/logo.svg';
import menuHamburder from '../images/icon-hamburger.svg';
import { useState } from 'react';

const links= [
    {text:'About', url:'#'},
    {text:'Services', url:'#'},
    {text:'Projects', url:'#'}
]


export default function Header() {
    const [menuVisible, setMenuVisible] = useState(false);

    function toggleMenu() {
        setMenuVisible(!menuVisible);
    }

    return (
        <div className='header-wrapper'>
            <header className='header'>
                <picture><img src={logo} alt='logo'/></picture>
                <div className='navigation-bar flex-container'>
                    <nav>
                        <ul className='links-nav flex-container'>
                            {links.map((link, idx) => {
                                return (
                                    <li key={idx}><a className='links' href={link.url}>{link.text}</a></li>
                                )
                            })}
                        </ul>
                    </nav>
                    <button className="button">Contact</button>
                </div>
            
                <button onClick={toggleMenu} className={menuVisible ? 'button-toggle-cliked' : 'button-toggle'}>
                    <img src={menuHamburder}/>
                </button>           
            </header>

            <div>
                <h1>We are creatives</h1>
            </div>
        </div>
    )
}