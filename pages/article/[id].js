import React, { useState, useEffect } from "react";
// import "./ArticlePage.css";
// import { Article } from "../data";
import parse from "html-react-parser";
// import { useParams, Link } from "react-router-dom";
import Link from "next/link";
import { useRouter } from 'next/router'
import Head from 'next/head';
import nprogress from '../../lib/nprogress';
import useSWR, {SWRConfig} from 'swr'
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { format, parseISO } from "date-fns";
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import https from 'https';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const HTMLDecoderEncoder = require("html-encoder-decoder");

const ArticlePage = ({articles}) => {
  // console.log(articles);
    const router = useRouter()
    if (router.isFallback) {
      return  <div className="loading__section">
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
    </div>;
    }
// console.log(article);
  const id = (router.query.id)?.split('-')[0];
  // const [article, setArticle] = useState(null);
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  // const fetchApiArticle = async () => {
  //   try {
  //     // eslint-disable-next-line
  //     const responseUser = await axios({
  //       method: "get",
  //       url: `${process.env.NEXT_PUBLIC_APP_API_KEY}/article/${id}`,
  //     }).then(function (response) {
  //       setArticle(response.data.data[0]);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchApiArticle();
  // }, [id]);

  const fetchApiArticle = async (url) => {
    try {
      const response = await axios.get(url);
      return response.data.data[0];
    } catch (error) {
      console.log(error);
    }
  };
  const swrConfig = {
    fetcher: fetchApiArticle,
    revalidateOnFocus: false, // menonaktifkan refresh otomatis saat aplikasi di-fokuskan
    dedupingInterval: 10000, // mencegah pengambilan data ganda dalam interval 5 detik
  };
  const { data: article, error } = useSWR(
    `${process.env.NEXT_PUBLIC_APP_API_KEY}/article/${id}`,
    swrConfig
  );

  const handleClick = () => {
    navigator.clipboard.writeText(currentUrl);
  };

  if (error) return <div>Failed to load article</div>;

  return (
    <>
     <Head>
        <title>{`Adventurer & Discoverer - Article - ${
          articles?.title && HTMLDecoderEncoder.decode(articles?.title)
        }`}</title>
        <meta
          name="description"
          content={
            articles?.meta_description &&
            HTMLDecoderEncoder.decode(articles?.meta_description)
          }
        />
        <meta
          name="keywords"
          content={`${
            articles?.meta_keywords &&
            HTMLDecoderEncoder.decode(articles?.meta_keywords)
          }`}
        />
        <meta property="og:url" content={currentUrl} />
        <meta content={currentUrl} itemprop="url" />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="article" />

        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="650" />
        <meta property="og:image:height" content="366" />

        <meta
          property="og:title"
          content={
            articles?.title && HTMLDecoderEncoder.decode(articles?.title)
          }
        />
        <meta
          property="og:description"
          content={
            articles?.meta_description &&
            HTMLDecoderEncoder.decode(articles?.meta_description)
          }
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_APP_API_PUBLIC}${articles?.images[0]?.image_default}`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="Adventurer and Discover" />
        <meta name="twitter:site:id" content="Adventurer and Discoverer" />
        <meta name="twitter:creator" content="Adventurer and Discoverer" />
        <meta
          name="twitter:description"
          content={
            articles?.meta_description &&
            HTMLDecoderEncoder.decode(articles?.meta_description)
          }
        />
        <meta
          name="twitter:image"
          content={`${process.env.NEXT_PUBLIC_APP_API_PUBLIC}${articles?.images[0]?.image_default}`}
        />
      </Head>
    
    <div className="article-page">
      {/* <div className='overlay__background'>
    </div> */}
      {article ? (
        <div className="container">
         
          <h1>{article?.title && HTMLDecoderEncoder.decode(article?.title)}</h1>
          <p>
            {article?.publish_at &&
              format(parseISO(article?.publish_at), "yyyy MMM dd")}{" "}
            -{" "}
            <Link
              href={`/category/${article?.category}-${article?.category_name}`}
            >
              {article?.category_name &&
                HTMLDecoderEncoder.decode(article?.category_name)}
            </Link>
          </p>
          <div className="article__image">
            <img
              src={`${process.env.NEXT_PUBLIC_APP_API_PUBLIC}${article?.images[0]?.image_default}`}
              alt={`gambar-Adventurer and discoverer-${
                article?.title && HTMLDecoderEncoder.decode(article?.title)
              }`}
            />
          </div>
          <div className="article__content">
            {article?.content && parse(article?.content)}

            <p>By Admin</p>
          </div>
          <p>Share this on :</p>
          <div className="share__icon">
            <FacebookShareButton
              url={currentUrl}
              title={
                article?.title && HTMLDecoderEncoder.decode(article?.title)
              }
              quote={
                article?.title && HTMLDecoderEncoder.decode(article?.title)
              }
              data-share="true"
              data-width="450"
              data-show-faces="true"
              hashtag={`${
                article?.meta_keywords &&
                HTMLDecoderEncoder.decode(article?.meta_keywords)
              }`}
            >
              <div className="share__icon">
                <img
                  src={`${process.env.NEXT_PUBLIC_APP_PUBLIC_URL}/assets/facebook.png`}
                  alt="fb__icon"
                />
              </div>
            </FacebookShareButton>
            <TwitterShareButton
              url={currentUrl}
              title={
                article?.title && HTMLDecoderEncoder.decode(article?.title)
              }
              data-share="true"
              data-width="450"
              data-show-faces="true"
            >
              <div className="share__icon">
                <img
                  src={`${process.env.NEXT_PUBLIC_APP_PUBLIC_URL}/assets/twitter.png`}
                  alt="fb__icon"
                />
              </div>
            </TwitterShareButton>
            <WhatsappShareButton
              url={currentUrl}
              title={
                article?.title && HTMLDecoderEncoder.decode(article?.title)
              }
            >
              <div className="share__icon">
                <img
                  src={`${process.env.NEXT_PUBLIC_APP_PUBLIC_URL}/assets/whatsapp.png`}
                  alt="fb__icon"
                />
              </div>
            </WhatsappShareButton>
            <TelegramShareButton
              url={currentUrl}
              title={
                article?.title && HTMLDecoderEncoder.decode(article?.title)
              }
            >
              <div className="share__icon">
                <img
                  src={`${process.env.NEXT_PUBLIC_APP_PUBLIC_URL}/assets/telegram.png`}
                  alt="fb__icon"
                />
              </div>
            </TelegramShareButton>
            <img
              src={`${process.env.NEXT_PUBLIC_APP_PUBLIC_URL}/assets/copy-link.png`}
              alt="fb__icon"
              onClick={handleClick}
            />
          </div>
          <hr />
        </div>
      ) : (
        // <div className="loading__section">
        //   <ThreeDots
        //     height="80"
        //     width="80"
        //     radius="9"
        //     color="#151515"
        //     ariaLabel="three-dots-loading"
        //     wrapperStyle={{}}
        //     wrapperClassName=""
        //     visible={true}
        //   />
        // </div>

        <div className="container">
          <h2>
            <Skeleton />
          </h2>
          <p>
            <Skeleton />
          </p>
          <div className="article__image">
            <Skeleton height={500} />
          </div>
          <div className="article__content">
            <p>
              <Skeleton count={10} />
            </p>

            <p>By Admin</p>
          </div>

          <hr />
        </div>
      )}
    </div>
    </>
  );
};

// export async function getStaticPaths() {
//   return {
//     paths: [],
//     fallback: true,
//   };
// }

// export async function getStaticProps({ params }) {
//   nprogress.start();
//   try {
//     const res = await axios.get(`${process.env.NEXT_PUBLIC_APP_API_PUBLIC}/article/${params.id}`, { 
//       httpsAgent: new https.Agent({  
//         rejectUnauthorized: false
//       })
//     });
//     const data = await res.data.data[0];
//     nprogress.done();
//     return {
//       props: {
//         article: data,
//       },
//       revalidate: 60 * 3,
//     };
//   } catch (err) {
//     return {
//       notFound: true,
//     };
//   }
// }
export async function getServerSideProps({ params }) {
  nprogress.start();
  const agent = new https.Agent({
    rejectUnauthorized: false,
  });
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_APP_API_PUBLIC}/api/article/meta/${(params.id).split('-')[0]}`, {
      httpsAgent: agent,
    });
    const data = await res.data.data[0];
    // console.log(data);
    nprogress.done();
    return {
      props: {
        articles: data,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      notFound: true,
    };
  }
}



export default ArticlePage;
