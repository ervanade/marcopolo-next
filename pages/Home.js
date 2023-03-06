import React, {useState ,useEffect} from 'react'
import Hero from './components/hero/Hero';
import Modal from './components/modal/Modal';
import { useLocation } from "react-router-dom";
import { Helmet } from 'react-helmet';


// import ModalRegister from '../components/modal/ModalRegister';
// import './Home.css'
import { differenceInMonths } from 'date-fns';
// import Footer from '../components/footer/Footer';

const Home = () => {
  const location = useLocation();
  // const yearBirth = localStorage.getItem('yearBirth') ? !(2023 - (localStorage.getItem('yearBirth')) > 18) : true
  const yearBirth = localStorage.getItem('yearBirth') && localStorage.getItem('monthBirth') ? !(differenceInMonths(new Date(), new Date(localStorage.getItem('yearBirth'), localStorage.getItem('monthBirth'), 1)) >= 215) : true
  const [openModal, setOpenModal] = useState(yearBirth)
  console.log(openModal);
  
  useEffect(() => {
    // if(localStorage.getItem("yearBirth")) {

    //   if(2023 - (localStorage.getItem('yearBirth')) > 18) {
    //     setOpenModal(false)
    //   } else {
    //     setOpenModal(true)
    //   }
    // }
  }, [location])
  
  // const [openModalRegister, setOpenModalRegister] = useState(false)

  return (
    <div className='home'>
         <Helmet>
        <title>{`Adventurer & Discoverer - Home`}</title>
        <meta name="description" content={`Adventurer & Discoverer - Home`}/>
        <meta name="keywords" content={`Adventurer & Discoverer - Home`} />
      </Helmet>
        <Hero />
        <Modal open={openModal} setOpenModal={setOpenModal}/>
        
    </div>
  )
}

export default Home