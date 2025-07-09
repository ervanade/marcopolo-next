import React, {useState, useEffect} from 'react'
// import './Navbar.css'
import { FaBars, FaTimes } from "react-icons/fa";
import { GiGalleon, GiCoffeeCup } from "react-icons/gi";
import { IoHome } from "react-icons/io5";

// import { Link, useLocation } from 'react-router-dom';
import Link from 'next/link';
import { AiFillHome, AiFillFileText, AiFillCalendar } from "react-icons/ai";
import { useRouter } from 'next/router';
import Image from 'next/image';




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
  const history = useRouter();


  useEffect(() => {
    if (menuButton) {
    document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [menuButton, setMenuButton] )
  useEffect(() => {
    setMenuButton(false)
  }, [history])
  useEffect(() => {
    if (history.pathname.includes('/article')) {
     setNavbarSticky(true)
    } else {
     setNavbarSticky(false)
    }
   }, [history])
  return (
    <div>
    <header className={`${menuButton ? `front` : ``} ${navbarSticky ? `header-fixed` : ``} `}>
        <div className="container">

        <div className="navbar__wrapper">
        <div className="header__left"><div className='logo'><Link href="/">
          {/* <Image
      src={`${process.env.NEXT_PUBLIC_APP_PUBLIC_URL}/assets/Marcopolo-Logo.png`}
      alt="logo"
      width={154}
      height={65}
    /> */}
    {/* <img src={`${process.env.NEXT_PUBLIC_APP_PUBLIC_URL}/assets/Marcopolo-Logo.png`} alt="logo" /> */}
    <img src={`/Marcopolo-Logo.png`} alt="logo" />
    </Link></div> 
            </div>
        <div className="header__right">
          <div className="nav__links">
            <ul><li><Link href="/"><IoHome className='nav__icon'/> Home</Link></li>
            <li><Link href="/article">
              Articles</Link></li>
            <li><Link href="/testimoni">
            Testimony</Link></li>
            <li><a target="_blank"
                  rel="noopener noreferrer"
                  href='https://www.instagram.com/followthemarc?igsh=MWVnZWtkMjA1ZTFvbg=='>
                    <Image
                    src="/ig-icon.png"
                    width={24}
                    height={24}
                    alt="Social Media Icons"
                  />
                  </a></li>
                  <li><a target="_blank"
                  rel="noopener noreferrer"
                  href='https://www.tiktok.com/@followthemarc?_t=ZS-8xqUpo2xk2B&_r=1'>
                   <Image
                    src="/tiktok-icon.png"
                    width={24}
                    height={24}
                    alt="Social Media Icons"
                  />
                  </a></li>

            </ul></div>
          </div>
        <div className='searchbar'>
      
            <button className="button__bars" name="button__bars" onClick={buttonOnChangeBars} aria-label="bars"><FaBars className='navbar__icon'/></button>
            </div>
           
        </div>
        
        </div>
    
    <div className={`navbar_overlay ${menuButton ? `show` : ``}`}>
            <ul className='nav_ul'>
            <button onClick={buttonOnChangeClose} className="button__close__navbar" name="button__close__navbar" aria-label="button__close__navbar"><FaTimes className='navbar__icon'/></button>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/article">Articles</Link></li>
                <li><Link href="/testimoni">Testimony</Link></li>
                <li style={{display: "flex", alignItems: "center"}}><a target="_blank"
                  rel="noopener noreferrer"
                  href='https://www.instagram.com/followthemarc?igsh=MWVnZWtkMjA1ZTFvbg=='>
                    <Image
                    src="/ig-icon.png"
                    width={24}
                    height={24}
                    alt="Social Media Icons"
                  />
                  </a><a target="_blank"
                  rel="noopener noreferrer"
                  href='https://www.tiktok.com/@followthemarc?_t=ZS-8xqUpo2xk2B&_r=1'>
                   <Image
                    src="/tiktok-icon.png"
                    width={24}
                    height={24}
                    alt="Social Media Icons"
                  />
                  </a></li>
            
            </ul>
        </div>


    </header>

        </div>
  )
}

export default Navbar