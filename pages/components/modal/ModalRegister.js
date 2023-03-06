import React from 'react'
import { FaTimes } from 'react-icons/fa';
import './ModalLogin.css'

const ModalRegister = ({ open, setOpenModal }) => {

    if(!open) return null;
const modalOnClick = () => {
    setOpenModal(false)
}
  return (
    <div className="overlay">
        <div className="modal__container modal__login">
        <button className='close__button__modal' onClick={() => setOpenModal(false)}><FaTimes /></button>
            <div className="content"><p>Situs ini memiliki informasi mengenai produk yang mengandung tembakau dan hanya diperuntukkan bagi perokok berusia 18 tahun keatas yang tinggal di Indonesia.</p><p>Mohon Registrasi Terlebih Dahulu untuk Login dengan Mengisikan Form dibawah ini.</p>
            <form>
            <input type="text" placeholder='Username ...' />
            <input type="email" placeholder='Email ...' />
            <input type="password" placeholder='Password ...' />
            </form>
          <button onClick={() => modalOnClick()}>JOIN US</button>
            </div>
        </div>
    </div>
  )
}

export default ModalRegister