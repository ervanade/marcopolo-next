import React, {useState, useEffect} from 'react'
// import './Navbar.css'
import { FaBars, FaTimes } from "react-icons/fa";
import { GiGalleon, GiCoffeeCup } from "react-icons/gi";
import { IoHome } from "react-icons/io5";

import { Link, useLocation } from 'react-router-dom';
import { AiFillHome, AiFillFileText, AiFillCalendar } from "react-icons/ai";




const Navbar = ({openModalLogin, setOpenModalLogin, openModalRegister, setOpenModalRegister}) => {
  const [menuButton, setMenuButton] = useState(false)
  const [navbarSticky, setNavbarSticky] = useState(false)

  const buttonOnChangeBars = () => {
    setMenuButton(!menuButton)
  }
  const buttonOnChangeClose = () => {
    setMenuButton(false)
  }
  // const history = useLocation()

  useEffect(() => {
    if (menuButton) {
    document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [menuButton, setMenuButton] )
  // useEffect(() => {
  //   setMenuButton(false)
  // }, [history])
  // useEffect(() => {
  //   if (history.pathname.includes('/article')) {
  //    setNavbarSticky(true)
  //   } else {
  //    setNavbarSticky(false)
  //   }
  //  }, [history])
  return (
    <div>
    <header className={`${menuButton ? `front` : ``} ${navbarSticky ? `header-fixed` : ``} `}>
        <div className="container">

        <div className="navbar__wrapper">
        <div className="header__left"><div className='logo'><Link to="/"><img src={`${process.env.REACT_APP_PUBLIC_URL}/assets/Marcopolo-Logo.png`} alt="s" /></Link></div> 
            </div>
        <div className="header__right">
          <div className="nav__links">
            <ul><li><Link to="/"><IoHome className='nav__icon'/> Home</Link></li>
            <li><Link to="/article">
              Articles</Link></li>
            <li><Link to="/testimoni">
            Testimony</Link></li>

            </ul></div>
          </div>
        <div className='searchbar'>
      
            <button classname="button__bars" name="button__bars" onClick={buttonOnChangeBars}><FaBars className='navbar__icon'/></button>
            </div>
           
        </div>
        
        </div>
    
    <div className={`navbar_overlay ${menuButton ? `show` : ``}`}>
            <ul className='nav_ul'>
            <button onClick={buttonOnChangeClose} classname="button__close__navbar" name="button__close__navbar"><FaTimes className='navbar__icon'/></button>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/article">Articles</Link></li>
                <li><Link to="/testimoni">Testimony</Link></li>
            
            </ul>
        </div>


    </header>

        </div>
  )
}

export default Navbar