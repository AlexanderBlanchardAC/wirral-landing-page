import React, { useState } from 'react';
import { FiX, FiMenu} from 'react-icons/fi';
import './nav.css';




const Nav = ({ navLinks }) => {

  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
  <nav className='nav'>
    <span className='navLogo'>Wirral</span>
    {menu ? ( 
      <FiX size={25} onClick={toggleMenu} className={'navMenu'} />
    ) : (
      <FiMenu size={25} onClick={toggleMenu} className={'navMenu'} />
    )}
    <ul className={menu ? 'navList navList--active' : 'navList'}>
        {navLinks.map((item, index ) => {
            return (
            <li className='navListItem'
                            key={index}>
                <a className='navListLink' href={item.url}>
                    {item.title}
                </a>
            </li>
            );
        })}
    </ul>
  </nav>
  );
};

export default Nav;
