import React, {useEffect, useState} from 'react'
// import './Article.css'
// import './Testi.css'
import Slider from "react-slick";

import { Row, Col } from 'react-bootstrap'
import Head from 'next/head';

const Testi = () => {
  const [windowSize, setWindowSize] = useState([
    typeof window !== 'undefined' ? window.innerWidth : undefined,typeof window !== 'undefined' ? window.innerHeight : undefined ,
  ]);
  const [showSlide, setShowSlide] = useState([3])
  const settingsCardTesti = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay:true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    arrows:false,
    slidesToShow: showSlide,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });
  useEffect(() => {
    if(windowSize[0] < 768) {
      setShowSlide(1)
    } else {
      setShowSlide(3)
    }
  }, [windowSize[0]])
  return (
    <div className="testi">
      <Head>
        <title>{`Adventurer and discoverer - Testimoni Adventusias`}</title>
        <meta name="description" content={`Dengarkan pendapat Mereka Tentang Rekomendasi Travel & Hari-Hari Penuh Eksplorasi Petualang di Indonesia`}/>
        <meta name="keywords" content={`Dengarkan pendapat Mereka Tentang Rekomendasi Travel & Hari-Hari Penuh Eksplorasi Petualang di Indonesia`} />
      </Head>

    {/* <div className='overlay__background'>
    </div> */}
  <div className="container">
    <h1>Testimony</h1>

  {/* <div className="article__wrapper"> */}
    {/* <h1>Article</h1> */}
    <Slider {...settingsCardTesti}>
          <div>
          <div className="card__testi mt-50">
          <div className="card__testi__image">

            <img src={`${process.env.NEXT_PUBLIC_APP_PUBLIC_URL}/assets/home-1.png`} alt="" />
          </div>
            <div className="card__description"><h1>Testimony</h1><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam autem mollitia unde.</p></div>
           </div>
          </div>
          <div>
          <div className="card__testi mt-50">
          <div className="card__testi__image">

            <img src={`${process.env.NEXT_PUBLIC_APP_PUBLIC_URL}/assets/home-0.png`} alt="" />
          </div>
            <div className="card__description"><h1>Testimony</h1><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam autem mollitia unde.</p></div>
           </div>
          </div>
          <div>
          <div className="card__testi mt-50">
          <div className="card__testi__image">

            <img src={`${process.env.NEXT_PUBLIC_APP_PUBLIC_URL}/assets/home-0-flip.png`} alt="" />
          </div>
            <div className="card__description"><h1>Testimony</h1><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam autem mollitia unde.</p></div>
           </div>
          </div>
          <div>
          <div className="card__testi mt-50">
          <div className="card__testi__image">

            <img src={`${process.env.NEXT_PUBLIC_APP_PUBLIC_URL}/assets/hero-1.jpg`} alt="" />
          </div>
            <div className="card__description"><h1>Testimony</h1><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam autem mollitia unde.</p></div>
           </div>
          </div>
          <div>
          <div className="card__testi mt-50">
          <div className="card__testi__image">

            <img src={`${process.env.NEXT_PUBLIC_APP_PUBLIC_URL}/assets/hero-2.jpg`} alt="" />
          </div>
            <div className="card__description"><h1>Testimony</h1><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam autem mollitia unde.</p></div>
           </div>
          </div>
          <div>
          <div className="card__testi mt-50">
          <div className="card__testi__image">

            <img src={`${process.env.NEXT_PUBLIC_APP_PUBLIC_URL}/assets/home-1.png`} alt="" />
          </div>
            <div className="card__description"><h1>Testimony</h1><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam autem mollitia unde.</p></div>
           </div>
          </div>
          <div>
          <div className="card__testi mt-50">
          <div className="card__testi__image">

            <img src={`${process.env.NEXT_PUBLIC_APP_PUBLIC_URL}/assets/home-0.png`} alt="" />
          </div>
            <div className="card__description"><h1>Testimony</h1><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam autem mollitia unde.</p></div>
           </div>
          </div>
          <div>
          <div className="card__testi mt-50">
          <div className="card__testi__image">

            <img src={`${process.env.NEXT_PUBLIC_APP_PUBLIC_URL}/assets/home-1.png`} alt="" />
          </div>
            <div className="card__description"><h1>Testimony</h1><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam autem mollitia unde.</p></div>
           </div>
          </div>
          <div>
          <div className="card__testi mt-50">
          <div className="card__testi__image">

            <img src={`${process.env.NEXT_PUBLIC_APP_PUBLIC_URL}/assets/home-1.png`} alt="" />
          </div>
            <div className="card__description"><h1>Testimony</h1><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam autem mollitia unde.</p></div>
           </div>
          </div>
        </Slider>
    
    </div>
  </div>
  )
}

export default Testi