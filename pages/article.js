import React, {useState, useEffect} from 'react'
// import './Article.css'
import { Row, Col } from 'react-bootstrap'
import Link from 'next/link';
import { MdOutlineExplore, MdTravelExplore} from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import { ThreeDots } from 'react-loader-spinner'
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Head from 'next/head';
// import { Article as article} from '../data';

const HTMLDecoderEncoder = require("html-encoder-decoder");




const Article = () => {
  const [article, setArticle] = useState(null)
  const [perPage, setPerPage] = useState(6);

  const handleLoadMore = () => {
    setPerPage(perPage + 6);
  };

  const fetchApiArticle = async () => {
    try {
      // eslint-disable-next-line
      const responseUser = await axios({
        method: 'get',
        url: `${process.env.NEXT_PUBLIC_APP_API_KEY}/article`,    
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
  return (
    <div className="article" style={{ backgroundImage: `url("${process.env.NEXT_PUBLIC_APP_PUBLIC_URL}/assets/background-article-5.jpg")` }}>
      <Head>
        <title>{`Adventurer & Discoverer - Article`}</title>
        <meta name="description" content={`Adventurer & Discoverer - Article`}/>
        <meta name="keywords" content={`Adventurer & Discoverer - Article`} />
      </Head>
   
  <div className="container">
    <h1 className='title__page'>Article <MdOutlineExplore /></h1>

 
    <Row className='card__wrapper gx-5'>
      { article ? article?.slice(0, perPage).map((item, index ) => {
        return (
          <Col md='4' sm='6' index={index}>
          <Link href={`/article/${item?.id}-${item?.slug}`}>
          <div className="card__article mt-50">
          <div className="card__article__image">

            <img src={`${process.env.NEXT_PUBLIC_APP_API_PUBLIC}${item?.images[0].image_default}`} alt="article_image" />
          </div>
            <div className="card__description"><h1>{`${item?.title && HTMLDecoderEncoder.decode((item?.title).split(" ").slice(0, 8).join(" "))} ${item?.title.split(" ").length <= 9 ? '' : '...'}`}</h1><p>{item?.subtitle && HTMLDecoderEncoder.decode((item?.excerpt).split(" ").slice(0, 7).join(" "))}...</p><button>Explore<MdTravelExplore className="button__icon" size={20}/></button></div>
           </div>
           </Link>
           </Col>
        )
      })
    : <div className='loading__section'>
    <ThreeDots 
height="80" 
width="80" 
radius="9"
color="#151515" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}
/>
</div>
    }
        
    </Row>
    <div className="button-load-more">
      <button onClick={handleLoadMore}>LOAD MORE</button>
    </div>
    </div>
  </div>
  )
}

export default Article