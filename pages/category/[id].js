import React, {useState, useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import Link from "next/link";
import { MdOutlineExplore, MdTravelExplore} from "react-icons/md";
import { ThreeDots } from 'react-loader-spinner'
import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';

// import { Article as article} from '../data';

const HTMLDecoderEncoder = require("html-encoder-decoder");


const Category = () => {
  const [article, setArticle] = useState(null)
  const router = useRouter()

  const { id } = router.query
  const fetchApiArticle = async () => {
    try {
      // eslint-disable-next-line
      const responseUser = await axios({
        method: 'get',
        url: `${process.env.NEXT_PUBLIC_APP_API_KEY}/article/filter/${id}}`,    
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
// console.log(article);
  return (
    <div className="article" style={{ backgroundImage: `url("${process.env.NEXT_PUBLIC_APP_PUBLIC_URL}/assets/background-article-5.jpg")` }}>
      <Head>
        <title>{`Adventurer & Discoverer - Category - ${article && article[0]?.category_name}`}</title>
        <meta name="description" content={`Adventurer & Discoverer - Category - ${article && article[0]?.category_name}`}/>
        <meta name="keywords" content={`Adventurer & Discoverer - Category - ${article && article[0]?.category_name}`} />
      </Head>
    {/* <div className='overlay__background'>
    </div> */}
  <div className="container">
    <h1 className='title__page'>{article ? article[0]?.category_name : 'Category'} <MdOutlineExplore /></h1>

  {/* <div className="article__wrapper"> */}
    {/* <h1>Article</h1> */}
    <Row className='card__wrapper gx-5'>
      { article ? article?.map((item, index ) => {
        return (
          <Col md='4' sm='6' index={index}>
          <Link href={`/article/${item?.id}-${item?.slug}`}>
          <div className="card__article mt-50">
          <div className="card__article__image">

            <img src={`${process.env.NEXT_PUBLIC_APP_API_PUBLIC}${item?.images[0].image_default}`} alt="article_image" />
          </div>
            <div className="card__description"><h1>{item?.title && HTMLDecoderEncoder.decode(item?.title)}</h1><p>{item?.subtitle && HTMLDecoderEncoder.decode(item?.subtitle)}...</p><button>Explore<MdTravelExplore className="button__icon" size={20}/></button></div>
           </div>
           </Link></Col>
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
        {/* <Col md='4' sm='6' >
          <Link href="/article/1">
          <div className="card__article mt-50">
          <div className="card__article__image">

            <img src={`${process.env.NEXT_PUBLIC_APP_PUBLIC_URL}/assets/home-1.png`} alt="" />
          </div>
            <div className="card__description"><h1>Article</h1><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam autem mollitia unde.</p><button>Explore<MdTravelExplore className="button__icon" size={20}/></button></div>
           </div>
           </Link></Col>
        <Col md='4' sm='6' > 
        <Link href="/article/1">
        <div className="card__article mt-50">
          <div className="card__article__image">

            <img src={`${process.env.NEXT_PUBLIC_APP_PUBLIC_URL}/assets/home-0-flip.png`} alt="" />
          </div>
            <div className="card__description"><h1>Article</h1><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam autem mollitia unde.</p><button>Explore<MdTravelExplore className="button__icon" size={20}/></button></div>
           </div></Link></Col>
        <Col md='4' sm='6' >
          <Link href="/article/1">
          <div className="card__article mt-50">
          <div className="card__article__image">

            <img src={`${process.env.NEXT_PUBLIC_APP_PUBLIC_URL}/assets/home-0.png`} alt="" />
          </div>
            <div className="card__description"><h1>Test</h1><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam autem mollitia unde.</p><button>Explore<MdTravelExplore className="button__icon" size={20}/></button></div>
            </div></Link></Col>
        <Col md='4' sm='6' >
          <Link href="/article/1">
          <div className="card__article mt-50">
          <div className="card__article__image">

            <img src={`${process.env.NEXT_PUBLIC_APP_PUBLIC_URL}/assets/hero-1.jpg`} alt="" />
          </div>
            <div className="card__description"><h1>Test</h1><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam autem mollitia unde.</p><button>Explore<MdTravelExplore className="button__icon" size={20}/></button></div>

            </div></Link></Col>
        <Col md='4' sm='6' >
          <Link href="/article/1">
          <div className="card__article mt-50">
          <div className="card__article__image">

            <img src={`${process.env.NEXT_PUBLIC_APP_PUBLIC_URL}/assets/hero-2.jpg`} alt="" />
          </div>
            <div className="card__description"><h1>Test</h1><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam autem mollitia unde.</p><button>Explore<MdTravelExplore className="button__icon" size={20}/></button></div>
            </div></Link></Col>
        <Col md='4' sm='6' >
          <Link href="/article/1">
          <div className="card__article mt-50">
          <div className="card__article__image">

            <img src={`${process.env.NEXT_PUBLIC_APP_PUBLIC_URL}/assets/home-1.png`} alt="" />
          </div>
            <div className="card__description"><h1>Test</h1><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam autem mollitia unde.</p><button>Explore<MdTravelExplore className="button__icon" size={20}/></button></div>
            </div></Link></Col> */}
    </Row>
    <div className="button-load-more">
      <button>LOAD MORE</button>
    </div>
    {/* </div> */}
    </div>
  </div>
  )
}

export default Category