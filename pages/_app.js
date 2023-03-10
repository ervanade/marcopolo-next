import '@/styles/globals.css'
import './components/navbar/Navbar.css'
import './Article.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import './ArticlePage.css'
import './Testi.css'
import './Home.css'
import './components/hero/Hero.css'
import './article/ArticlePage.css'
import './components/modal/Modal.css'
import 'nprogress/nprogress.css';
import { useEffect } from 'react';

import Navbar from './components/navbar/Navbar';

import Footer from './components/footer/Footer';
import './components/footer/Footer.css'
import Layout from './components/Layout';
import TagManager from 'react-gtm-module';


export default function App({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-MPJW2JV" });
  }, []);
  return (
  <Layout>
  <Component {...pageProps} />
  </Layout>
  )
}
