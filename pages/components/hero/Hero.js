import React, {useEffect, useRef, useState} from 'react'
// import './Hero.css'
import Slider from "react-slick";
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { MdTravelExplore } from 'react-icons/md';
// import { Article as article } from '../../data';
import axios from 'axios';


import { BsArrowLeft, BsArrowRight, BsChevronBarLeft, BsChevronLeft, BsChevronRight } from 'react-icons/bs';


const HTMLDecoderEncoder = require("html-encoder-decoder");

const Hero = () => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  const [showSlide, setShowSlide] = useState([3])
  const [article, setArticle] = useState(null)
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" +
        (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      Previous
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      Next
    </button>
  );
  const slideRef = useRef(null)
    const settings = {
      dots: true,
      infinite: true,
      speed: 3000,
      autoplay:true,
      autoplaySpeed: 5000,
      arrows:false,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const settingsCard = {
      dots: false,
      infinite: true,
      speed: 1000,
      autoplay:true,
      autoplaySpeed: 5000,
      swipeToSlide: true,
      slidesToShow: showSlide,
      slidesToScroll: 1,
      adaptiveHeight: true,
      accessibility: true,
      arrows:false,
      ref: slideRef,
      prevArrow: <SlickArrowLeft />,
      nextArrow: <SlickArrowRight />,
      // appendDots: dots => (
      //   <div
      //     style={{
      //       // backgroundColor: "#ddd",
      //       borderRadius: "10px",
      //       padding: "10px"
      //     }}
      //   >
      //     <ul style={{ margin: "-10px" }}> {dots} </ul>
      //   </div>
      // ),
      // customPaging: i => (
      //   <div
      //     style={{
      //       width: "30px",
      //       color: "red",
      //       // border: "1px blue solid"
      //     }}
      //   >
      //     {i + 1}
      //   </div>
      // )

    };

  const fetchApiArticle = async () => {
    try {
      // eslint-disable-next-line
      const responseUser = await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_KEY}/article`,    
      })
      .then(function (response) {
          // handle success
       
          setArticle(response.data.data)
         
          // console.log(responseUser)
        })
    
    } catch (error) {
      console.log(error)
    }
}
useEffect(() => {
  fetchApiArticle()
}, [])
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
      if(windowSize[0] <= 768) {
        setShowSlide(1)
      } else {
        setShowSlide(3)
      }
    }, [windowSize[0]])
    
    // console.log(windowSize[0]);

    const handleDragStart = (event) => {
      event.preventDefault();
    };



  return (
    <div className='hero'>
      <div className='overlay__background'>
      </div>
      <Slider {...settings}>
      <div>
      <div className='overlay__background'>
      </div>
      <img src={`${process.env.REACT_APP_PUBLIC_URL}/assets/adventure-5.jpeg`} alt="hero" className='hero__image'/>
    <div className="container">
    <div className="hero__card__article">

    <div className="hero__text">
      {/* <h1>The Journey Has Begin, <br /> Find Your Taste</h1> */}
      <h1 className="text_cover">Setiap Hari <br/>Penuh <br/>Eksplorasi</h1>
      {/* <button>Read More</button> */}
      <div className="article-card">
      <Slider {...settingsCard}>
      { article ? article.map((item, index ) => {
        return (
           <div index={index}>
            
           <div className="card__article">
             <div className="card__article__image">
             <Link draggable="true" onDragStart={handleDragStart} to={`/article/${item?.id}-${item?.slug}`}>
             <img src={`${process.env.REACT_APP_API_PUBLIC}${item?.images[0].image_default}`} alt={`gambar-${item?.title && HTMLDecoderEncoder.decode((item?.title))}`} />
            </Link>
             </div>
             <div className="card__description"><Link draggable="true" onDragStart={handleDragStart} to={`/article/${item?.id}-${item?.slug}`}><h1>{item?.title && HTMLDecoderEncoder.decode((item?.title).split(" ").slice(0, 7).join(" "))}..</h1></Link><p>{item?.subtitle && HTMLDecoderEncoder.decode((item?.excerpt).split(" ").slice(0, 7).join(" "))}...</p><Link to={`/article/${item?.id}-${item?.slug}`}><button className='button__explore' name="button__explore">Explore<MdTravelExplore className="button__icon" size={20}/></button></Link></div>
            </div>
           </div>
        )
      })
    :null
    }
          {/* <div>
            
          <div className="card__article">
            <div className="card__article__image">
          
            <img src={`${process.env.REACT_APP_PUBLIC_URL}/assets/home-1.png`} alt="" />
           
            </div>
            <div className="card__description"><h1>Judul Article I</h1><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam autem mollitia unde.</p><Link to="/article/1"><button>Explore<MdTravelExplore className="button__icon" size={20}/></button></Link></div>
           </div>
          </div>
          <div>
          <div className="card__article">
            <div className="card__article__image">
            
            <img src={`${process.env.REACT_APP_PUBLIC_URL}/assets/home-0.png`} alt="" />
           
            </div>
            <div className="card__description"><h1>Judul Article II</h1><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam autem mollitia unde.</p><Link to="/article/1"><button>Explore<MdTravelExplore className="button__icon" size={20}/></button></Link></div>
           </div>
          </div>
          <div>
          <div className="card__article">
            <div className="card__article__image">
            
            <img src={`${process.env.REACT_APP_PUBLIC_URL}/assets/hero-2.jpg`} alt="" />
           
            </div>
            <div className="card__description"><h1>Judul Article III</h1><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam autem mollitia unde.</p><Link to="/article/1"><button>Explore<MdTravelExplore className="button__icon" size={20}/></button></Link></div>
           </div>
          </div>
          <div>
          <div className="card__article">
            <div className="card__article__image">
            
            <img src={`${process.env.REACT_APP_PUBLIC_URL}/assets/home-0.png`} alt="" />
           
            </div>
            <div className="card__description"><h1>Judul Article IV </h1><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam autem mollitia unde.</p><Link to="/article/1"><button>Explore<MdTravelExplore className="button__icon" size={20}/></button></Link></div>
           </div>
          </div>
          <div>
          <div className="card__article">
            <div className="card__article__image">
            
            <img src={`${process.env.REACT_APP_PUBLIC_URL}/assets/home-0-flip.png`} alt="" />
           
            </div>
            <div className="card__description"><h1>Judul Article V</h1><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam autem mollitia unde.</p><Link to="/article/1"><button>Explore<MdTravelExplore className="button__icon" size={20}/></button></Link></div>
           </div>
          </div>
          <div>
          <div className="card__article">
            <div className="card__article__image">
            
            <img src={`${process.env.REACT_APP_PUBLIC_URL}/assets/home-2.png`} alt="" />
           
            </div>
            <div className="card__description"><h1>Judul Article VI</h1><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam autem mollitia unde.</p><Link to="/article/1"><button>Explore<MdTravelExplore className="button__icon" size={20}/></button></Link></div>
           </div>
          </div> */}
        </Slider>
        <div className="card__arrow">
          <div style={{
                width:40,
                height:40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 30,
                boxShadow: "0 1px 3px rgb(0 0 0 / 10% )",
                cursor: "pointer"
          }} onClick={() => slideRef.current.slickPrev()} className="arrow__button arrow__prev">
            <BsChevronLeft/>
            </div>
          <div style={{
                width:40,
                height:40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 1px 3px rgb(0 0 0 / 10% )",
                cursor: "pointer"
          }} onClick={() => slideRef.current.slickNext()} className="arrow__button arrow__next">
            <BsChevronRight/>
            </div>
          </div>
    </div>
      </div>
     
    </div>
    </div>
      </div>
      {/* <div>
      <img src={`${process.env.REACT_APP_PUBLIC_URL}/assets/home-1.png`} alt="hero" className='hero__image'/>
    <div className="container">

    <div className="hero__text">
      <h1>Taste and <br /> Discover Your Choice</h1>
      <button>Read More</button>
      </div>
    </div>
      </div>
      <div>
      <img src={`${process.env.REACT_APP_PUBLIC_URL}/assets/home-2.png`} alt="hero" className='hero__image'/>
    <div className="container">

    <div className="hero__text">
      <h1>Adventurer and Discoverer</h1>
      <button>Read More</button>
      </div>
    </div>
      </div> */}
      
    </Slider>
    {/* <img src={`${process.env.REACT_APP_PUBLIC_URL}/assets/home-0-flip.png`} alt="hero" className='hero__image'/>
    <div className="container">

    <div className="hero__text">
      <h1>The Journey Has Begin, <br /> Find Your Taste</h1>
      <button>Read More</button>
      </div>
    </div> */}
  </div>
  )
}

export default Hero