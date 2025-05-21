import React, { useEffect, useRef, useState, lazy, Suspense } from 'react'
// import './Hero.css'
import Slider from "react-slick";
// import { Article as article } from '../../data';
import axios from 'axios';
import useSWR from 'swr'

const CardArticle = lazy(() => import('../cardArticle/CardArticle'))
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';


const HTMLDecoderEncoder = require("html-encoder-decoder");

const Hero = () => {
  const [windowSize, setWindowSize] = useState([
    typeof window !== 'undefined' ? window.innerWidth : undefined, typeof window !== 'undefined' ? window.innerHeight : undefined,
  ]);
  const [showSlide, setShowSlide] = useState([3])
  // const [article, setArticle] = useState(null)
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
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const settingsCard = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    swipeToSlide: true,
    slidesToShow: showSlide,
    slidesToScroll: 1,
    adaptiveHeight: true,
    accessibility: true,
    arrows: false,
    ref: slideRef,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,

  };

  const fetchApiArticle = async (url) => {
    try {
      const response = await axios.get(url);
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  };
  const swrConfig = {
    fetcher: fetchApiArticle,
    revalidateOnFocus: false, // menonaktifkan refresh otomatis saat aplikasi di-fokuskan
    dedupingInterval: 5000, // mencegah pengambilan data ganda dalam interval 5 detik
  };
  const { data: article, error } = useSWR(
    `${process.env.NEXT_PUBLIC_APP_API_KEY}/article/`,
    swrConfig
  );
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
    if (windowSize[0] <= 768) {
      setShowSlide(1)
    } else {
      setShowSlide(3)
    }
  }, [windowSize[0]])

  // console.log(windowSize[0]);

  return (
    <div className='hero'>
      <div className='overlay__background'>
      </div>
      <Slider {...settings}>
        <div>
          <div className='overlay__background'>
          </div>
          {/* <img src={`${process.env.NEXT_PUBLIC_APP_PUBLIC_URL}/assets/adventure-5.jpeg`} alt="hero" className='hero__image'/> */}
          <img src={`/adventure-5.jpg`} alt="hero" className='hero__image' />
          <div className="container">
            <div className="hero__card__article">

              <div className="hero__text">
                {/* <h1>The Journey Has Begin, <br /> Find Your Taste</h1> */}
                <h1 className="text_cover">Setiap Hari <br/>Penuh <br/>Eksplorasi</h1>
                {/* <button>Read More</button> */}
                <div className="article-card">
                  <Suspense fallback={<div className="card__article">
                    <Skeleton height={420} />
                  </div>}>
                    <Slider {...settingsCard}>
                      {article ? article?.slice(0, 6).map((item, index) => {
                        return (
                          <div key={index}>
                            <CardArticle Image={`${process.env.NEXT_PUBLIC_APP_API_PUBLIC}${item?.images[0].image_mid}` || ""} Title={item?.title && HTMLDecoderEncoder.decode((item?.title)) || ""} Excerpt={item?.excerpt && HTMLDecoderEncoder.decode((item?.excerpt)) || ""} Links={`/article/${item?.id}-${item?.slug}` || "#"}></CardArticle>
                          </div>
                        )
                      })
                        : null
                      }

                    </Slider>
                  </Suspense>
                  <div className="card__arrow">
                    <div style={{
                      width: 40,
                      height: 40,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: 30,
                      boxShadow: "0 1px 3px rgb(0 0 0 / 10% )",
                      cursor: "pointer"
                    }} onClick={() => slideRef.current.slickPrev()} className="arrow__button arrow__prev">
                      <BsChevronLeft />
                    </div>
                    <div style={{
                      width: 40,
                      height: 40,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 1px 3px rgb(0 0 0 / 10% )",
                      cursor: "pointer"
                    }} onClick={() => slideRef.current.slickNext()} className="arrow__button arrow__next">
                      <BsChevronRight />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default Hero