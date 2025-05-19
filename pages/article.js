import React, {useState, useEffect, lazy, Suspense} from 'react'
// import './Article.css'
import { Row, Col } from 'react-bootstrap'
import Link from 'next/link';
import { MdOutlineExplore, MdTravelExplore} from "react-icons/md";
import { ThreeDots } from 'react-loader-spinner'
import axios from 'axios';
import Head from 'next/head';
import useSWR, {SWRConfig} from 'swr'
const CardArticle = lazy(() => import('./components/cardArticle/CardArticle'))
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
// import { Article as article} from '../data';

const HTMLDecoderEncoder = require("html-encoder-decoder");

const Article = () => {
  // const [article, setArticle] = useState(null)
  const [perPage, setPerPage] = useState(6);

  const handleLoadMore = () => {
    setPerPage(perPage + 6);
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
  return (
    // <div className="article" style={{ backgroundImage: `url("${process.env.NEXT_PUBLIC_APP_PUBLIC_URL}/assets/background-article-5.jpg")` }}>
    <div className="article" style={{ backgroundImage: `url("/adventure-5_b.jpg")` }}>
      <Head>
        <title>{`Adventurer and discoverer - Article`}</title>
        <meta name="description" content={`Temukan Beragam Tips dan Trik Artikel Setiap Harinya Penuh Eksplorasi Travel Petualang di Website Marcopolo`}/>
        <meta name="keywords" content={`Temukan Beragam Tips dan Trik Artikel Setiap Harinya Penuh Eksplorasi Travel Petualang di Website Marcopolo`} />
      </Head>
   
  <div className="container">
    <h1 className='title__page'>Article <MdOutlineExplore /></h1>

    <Suspense fallback={ <div className="card__article">
            <Col md='4' sm='6' className="mt-50" >
            <Skeleton height={420} />
            </Col>
            <Col md='4' sm='6' className="mt-50" >
            <Skeleton height={420} />
            </Col>
            <Col md='4' sm='6' className="mt-50" >
            <Skeleton height={420} />
            </Col>
          </div>}>
    <Row className='card__wrapper gx-5'>
      { article ? article?.slice(0, perPage).map((item, index ) => {
        return (
          <Col md='4' sm='6' key={index} className="mt-50" >
          <Link href={`/article/${item?.id}-${item?.slug}`}>
          <CardArticle Image={`${process.env.NEXT_PUBLIC_APP_API_PUBLIC}${item?.images[0].image_mid}` || ""} Title={item?.title && HTMLDecoderEncoder.decode((item?.title)) || ""} Excerpt={item?.excerpt && HTMLDecoderEncoder.decode((item?.excerpt)) || ""} Links={`/article/${item?.id}-${item?.slug}` || "#"}></CardArticle>
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
    </Suspense>
    { article && article.length > perPage ?
  <div className="button-load-more">
    <button onClick={handleLoadMore}>LOAD MORE</button>
  </div>
  : null
}
    </div>
  </div>
  )
}

export default Article