import Head from 'next/head'
import Hero from './components/hero/Hero';
import Modal from './components/modal/Modal';
import { useState, useEffect } from 'react'
import { differenceInMonths } from 'date-fns';

export default function Home() {
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
      <title>{`Adventurer and discoverer - Setiap Hari Penuh Eksplorasi`}</title>
        <meta name="description" content={`Temukan Konten Setiap Hari Penuh Eksplorasi serta Panduan Inspirasi Adventurer and Discoverer di website resmi Marcopolo`}/>
        <meta name="keywords" content={`Temukan Konten Setiap Hari Penuh Eksplorasi serta Panduan Inspirasi Adventurer and Discoverer di website resmi Marcopolo`} />
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
