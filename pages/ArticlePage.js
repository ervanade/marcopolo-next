import React, { useState, useEffect } from "react";
// import "./ArticlePage.css";
import { Row, Col } from "react-bootstrap";
import { Article } from "./data";
import parse from "html-react-parser";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { format, parseISO } from "date-fns";
import { Helmet } from "react-helmet";
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";

const HTMLDecoderEncoder = require("html-encoder-decoder");

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const currentUrl = window.location.href;

  const fetchApiArticle = async () => {
    try {
      // eslint-disable-next-line
      const responseUser = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_KEY}/article/${id}`,
        // url: "https://monogram.co.id/api/section",
        // withCredentials: true,
        // headers: {
        //   // 'Cookie': 'ci_session=958be67be75ec79e9946daf9301536e408937a29',
        //   'Content-Type': 'application/json; charset=UTF-8',
        //   // 'set-cookie': 'ci_session=958be67be75ec79e9946daf9301536e408937a29',
        //   'X-API-Key': '635d1f6f7abc38-23672912-13095431'}
      }).then(function (response) {
        // handle success
        setArticle(response.data.data[0]);
        // console.log(responseUser)
      });
    } catch (error) {
      console.log(error);
    }
  };
    const handleClick = () => {
      navigator.clipboard.writeText(currentUrl);
    };

  useEffect(() => {
    fetchApiArticle();
  }, [Article]);
  // const article = Article.find(data => data.id === parseInt(id))
  // console.log(article);
  return (
    <div className="article-page">
      {/* <div className='overlay__background'>
    </div> */}
      {article ? (
        <div className="container">
          <Helmet 
          defer={false}
          title={article?.title && HTMLDecoderEncoder.decode(article?.title)}
          defaultTitle={
            article?.title && HTMLDecoderEncoder.decode(article?.title)
          }
          titleTemplate={`%s`}
          meta={[
            {
              name: 'description',
              content: article?.meta_description &&
              HTMLDecoderEncoder.decode(article?.meta_description),
            },
            {
              name: 'keywords',
              content: article?.meta_keywords &&
              HTMLDecoderEncoder.decode(article?.meta_keywords),
            },
            {
              name: 'og:description',
              content: article?.meta_description &&
              HTMLDecoderEncoder.decode(article?.meta_description),
            },
            {
              name: 'og:image',
              content: `${process.env.REACT_APP_API_PUBLIC}${article?.images[0]?.image_default}`,
            },
        
          ]
          
          }
          links={[
            {
                 rel: 'article',
                 href: currentUrl,
             },
           ]}
          >
            <title>{`Adventurer & Discoverer - Article - ${
              article?.title && HTMLDecoderEncoder.decode(article?.title)
            }`}</title>
            <meta
              name="description"
              content={
                article?.meta_description &&
                HTMLDecoderEncoder.decode(article?.meta_description)
              }
            />
            <meta
              name="keywords"
              content={`${
                article?.meta_keywords &&
                HTMLDecoderEncoder.decode(article?.meta_keywords)
              }`}
            />
             <meta property="og:url" content={currentUrl} />
             <meta content={currentUrl} itemprop="url" />

             <meta property="og:type" content="article" />
             <meta property="og:site_name" content="article" />  

             <meta property="og:image:type" content="image/jpg" />
    	<meta property="og:image:width" content="650" />
    	<meta property="og:image:height" content="366" />
      
               
  <meta property="og:title" content={article?.title && HTMLDecoderEncoder.decode(article?.title)} />
  <meta property="og:description" content={article?.meta_description && HTMLDecoderEncoder.decode(article?.meta_description)} />
  <meta property="og:image" content={`${process.env.REACT_APP_API_PUBLIC}${article?.images[0]?.image_default}`} />
  
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="Adventurer and Discover" />
        <meta name="twitter:site:id" content="Adventurer and Discoverer" />
        <meta name="twitter:creator" content="Adventurer and Discoverer" />
        <meta name="twitter:description" content={article?.meta_description && HTMLDecoderEncoder.decode(article?.meta_description)} />
        <meta name="twitter:image" content={`${process.env.REACT_APP_API_PUBLIC}${article?.images[0]?.image_default}`} />

          </Helmet>
          <h2>{article?.title && HTMLDecoderEncoder.decode(article?.title)}</h2>
          <p>
            {article?.publish_at &&
              format(parseISO(article?.publish_at), "yyyy MMM dd")}{" "}
            -{" "}
            <Link to={`/category/${article?.category}`}>
              {article?.category_name &&
                HTMLDecoderEncoder.decode(article?.category_name)}
            </Link>
          </p>
          <div className="article__image">
            <img
              src={`${process.env.REACT_APP_API_PUBLIC}${article?.images[0]?.image_default}`}
              alt={`gambar-${article?.title && HTMLDecoderEncoder.decode((article?.title))}`} 
            />
          </div>
          <div className="article__content">
            {article?.content &&
              parse(HTMLDecoderEncoder.decode(article?.content))}
            {/* 
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum velit quas voluptate corporis! Adipisci facere, id reiciendis quibusdam aperiam dolorum molestiae ut eveniet esse consequuntur inventore illum totam aspernatur nisi!
    Repellat temporibus qui, numquam explicabo, veniam ullam a repellendus est adipisci, totam optio tenetur pariatur eius blanditiis officiis nulla nobis expedita deleniti ut error sequi enim? Vero in eligendi ducimus.
    Culpa earum nulla repudiandae, commodi cum eum obcaecati quasi, minima eaque nobis maiores ducimus omnis quae. Aspernatur nemo eveniet aperiam amet. Ullam voluptate expedita, amet accusamus beatae error nisi commodi?
    Atque molestiae quae quis et sit aspernatur suscipit, officiis qui, ipsam velit eius, impedit omnis odit rem consequatur? Corrupti ratione perferendis libero magni incidunt ipsa hic cupiditate facere accusantium delectus.
    Voluptatem autem soluta mollitia, quo corporis, aliquid officiis voluptate harum suscipit fugit, ea aspernatur ab consequuntur modi. Sequi asperiores similique, quos, dignissimos nemo architecto, sed reprehenderit iure laboriosam alias expedita.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nobis quidem modi eum ipsa quasi corporis voluptatum cumque ad quod. Placeat deserunt iste nobis incidunt necessitatibus in. Error, ea soluta!
    Laborum architecto soluta asperiores perspiciatis alias numquam nesciunt quo dolores nisi, qui, aperiam placeat quidem tempore veniam aspernatur beatae. Voluptate, tenetur rem architecto numquam ullam nesciunt dolor sunt dolorum nihil?
    Necessitatibus recusandae repudiandae aperiam. Maiores iste impedit blanditiis reiciendis magnam delectus accusantium consequatur, consequuntur repellendus, labore optio quo! Numquam voluptate consequatur maiores asperiores omnis laboriosam repudiandae ratione nam est ducimus!
    Amet, soluta doloremque officiis ducimus ullam delectus consequatur sit pariatur fuga, hic accusantium veritatis eum nobis quibusdam quas et! Excepturi ut deleniti iste eius quos repudiandae temporibus dolor reiciendis! Quasi!
    Non nemo necessitatibus perferendis vitae laborum ullam quo dolor, eius magnam! Commodi reiciendis illo iusto vero quos, odit id! Sunt nesciunt optio sequi hic unde at vel mollitia doloremque cum?
    Animi, magni beatae dicta temporibus eos provident atque aspernatur illo sequi soluta porro! Expedita reiciendis minima veritatis quibusdam natus sapiente repellat, nemo optio voluptatibus tempore praesentium distinctio officiis excepturi modi.</p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste assumenda dolor molestiae? Molestiae itaque temporibus magni adipisci, iste possimus pariatur reprehenderit quibusdam maiores excepturi commodi at dolores nulla quidem quo.
    Magni hic, eaque doloribus commodi modi facere atque minus fugiat recusandae dolore ea delectus veniam reiciendis accusantium, quia dignissimos qui ipsa voluptatem voluptate ducimus nobis! Dicta laboriosam consequatur velit impedit?
    Ipsum tempora dicta tempore porro esse delectus, minima sed, veritatis iusto consequatur distinctio quos quas perspiciatis ex adipisci hic inventore. Id voluptas cupiditate quas? Veritatis non laudantium exercitationem officia iure!</p> */}

            <p>By Admin</p>
          </div>
          <p>Share this on :</p>
          <div className="share__icon">
            {/* <img
              src={`${process.env.REACT_APP_PUBLIC_URL}/assets/facebook.png`}
              alt="fb__icon"
            />
            <img
              src={`${process.env.REACT_APP_PUBLIC_URL}/assets/twitter.png`}
              alt="fb__icon"
            />
            <img
              src={`${process.env.REACT_APP_PUBLIC_URL}/assets/whatsapp.png`}
              alt="fb__icon"
            />
            <img
              src={`${process.env.REACT_APP_PUBLIC_URL}/assets/telegram.png`}
              alt="fb__icon"
            />
            <img
              src={`${process.env.REACT_APP_PUBLIC_URL}/assets/copy-link.png`}
              alt="fb__icon"
            /> */}
            <FacebookShareButton
              url={currentUrl}
              title={article?.title && HTMLDecoderEncoder.decode(article?.title)}
              quote={article?.title && HTMLDecoderEncoder.decode(article?.title)}
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
                  src={`${process.env.REACT_APP_PUBLIC_URL}/assets/facebook.png`}
                  alt="fb__icon"
                />
              </div>
            </FacebookShareButton>
            <TwitterShareButton
              url={currentUrl}
              title={article?.title && HTMLDecoderEncoder.decode(article?.title)}
              data-share="true"
              data-width="450"
              data-show-faces="true"
            >
              <div className="share__icon">
                <img
                  src={`${process.env.REACT_APP_PUBLIC_URL}/assets/twitter.png`}
                  alt="fb__icon"
                />
              </div>
            </TwitterShareButton>
            <WhatsappShareButton
              url={currentUrl}
              title={article?.title && HTMLDecoderEncoder.decode(article?.title)}
            >
              <div className="share__icon">
                <img
                  src={`${process.env.REACT_APP_PUBLIC_URL}/assets/whatsapp.png`}
                  alt="fb__icon"
                />
              </div>
            </WhatsappShareButton>
            <TelegramShareButton
              url={currentUrl}
              title={article?.title && HTMLDecoderEncoder.decode(article?.title)}
            >
              <div className="share__icon">
                <img
                  src={`${process.env.REACT_APP_PUBLIC_URL}/assets/telegram.png`}
                  alt="fb__icon"
                />
              </div>
            </TelegramShareButton>
                <img
                  src={`${process.env.REACT_APP_PUBLIC_URL}/assets/copy-link.png`}
                  alt="fb__icon" onClick={handleClick}
                />
          </div>
          <hr />
        </div>
      ) : (
        <div className="loading__section">
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
      )}
    </div>
  );
};

export default ArticlePage;
