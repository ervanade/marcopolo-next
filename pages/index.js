import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Modal from './components/modal/Modal';

import Footer from './components/footer/Footer';
import { BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react'
import { differenceInMonths } from 'date-fns';
import styles from '@/styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Home() {
  const [openModalLogin, setOpenModalLogin] = useState(false)
  const [openModalRegister, setOpenModalRegister] = useState(false)
  const [openModal, setOpenModal] = useState(false)


  useEffect(() => {
    const yearBirth = localStorage.getItem('yearBirth')
    const monthBirth = localStorage.getItem('monthBirth')
    if (yearBirth && monthBirth) {
      const isOldEnough = !(differenceInMonths(new Date(), new Date(yearBirth, monthBirth, 1)) >= 215)
      setOpenModal(isOldEnough)
    } else {
      setOpenModal(true)
    }
  }, [])
  return (
    <>
      <Head>
      <title>{`Adventurer & Discoverer - Home`}</title>
        <meta name="description" content={`Adventurer & Discoverer - Home`}/>
        <meta name="keywords" content={`Adventurer & Discoverer - Home`} />
        <link rel="icon" href="/marcopolo__favicon.png" />
      </Head>
      {/* <h1>tes</h1> */}
      <div className='home'>
      <Hero />
      <Modal open={openModal} setOpenModal={setOpenModal}/>
      </div>
      
    </>
  )
}
