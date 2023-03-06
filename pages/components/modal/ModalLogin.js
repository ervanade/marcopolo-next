import React from 'react'
// import './ModalLogin.css'
import { FaTimes } from 'react-icons/fa';

const ModalLogin = ({ open, setOpenModal }) => {

    if(!open) return null;
const modalOnClick = () => {
    setOpenModal(false)
}
  return (
    <div className="overlay">
        <div className="modal__container modal__login">
            <button className='close__button__modal' onClick={() => setOpenModal(false)}><FaTimes /></button>
            <div className="content"><p>Situs ini memiliki informasi mengenai produk yang mengandung tembakau dan hanya diperuntukkan bagi perokok berusia 18 tahun keatas yang tinggal di Indonesia.</p><p>Mohon Isikan Email dan Password Anda untuk Login, Jika Sudah Registrasi.</p>
            <form>
            <input type="email" placeholder='Email ...' />
            <input type="password" placeholder='Password ...' />
            </form>
          <button onClick={() => modalOnClick()}>LOGIN</button>
            </div>
        </div>
    </div>
  )
}

export default ModalLogin