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

import Navbar from './components/navbar/Navbar';

import Footer from './components/footer/Footer';
import './components/footer/Footer.css'
import Layout from './components/Layout';

export default function App({ Component, pageProps }) {
  return (
  <Layout>
  <Component {...pageProps} />
  </Layout>
  )
}
