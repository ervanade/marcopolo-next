import React, {useState} from 'react'
import { useEffect } from 'react'
// import './Modal.css'
import { differenceInMonths } from 'date-fns'



const Modal = ({ open, setOpenModal }) => {
  const [year, setYear] = useState("2023")
  const [month, setMonth] = useState("1")
  const [failedYear, setFailedYear] = useState(false)

  const result1 = differenceInMonths(new Date(), new Date(year, month, 1))
    if(!open) return null;
    const yearOptions = []
    for ( let i = 2015; i > 1960; i--) {
      yearOptions.push(i)
    }
    const yearOnChange = (e) => {
      setYear(e.target.value)
      localStorage.setItem('yearBirth', e.target.value)
    }
    const handleMonth = (e) => {
      setMonth(e.target.value)
      localStorage.setItem('monthBirth', e.target.value)
    }
  

  
    
// const modalOnClick = () => {
//   if(year && 2022 - year > 17 ) {
//     setOpenModal(false)
//     setFailedYear(false)
//   } else {
//     setFailedYear(true)
//   }
//   return null
// }
const modalOnClick = () => {
  if(differenceInMonths(new Date(), new Date(year, month, 1)) >= 215) {
    setOpenModal(false)
    setFailedYear(false)
  } else {
    setFailedYear(true)
  }
  return null
}

  return (
    <div className="overlay">
        <div className="modal__container">
            <div className="content"><p>Situs ini memiliki informasi mengenai produk yang mengandung tembakau dan hanya diperuntukkan bagi perokok berusia 18 tahun keatas yang tinggal di Indonesia.</p><p>Mohon Isi Bulan dan Tahun Lahir Anda.</p>
            <p className={`year__failed ${failedYear ? "show__failed" : ""} `}>Mohon Maaf Usia Anda kurang dari 18 Tahun.</p>
            <form>
            <div class="select">
                    <select id="select__month" name='month' onChange={handleMonth}>
                      <option value="" selected disabled hidden>Bulan</option>
                      <option value="1">Januari</option>
                      <option value="2">Februari</option>
                      <option value="3">Maret</option>
                      <option value="4">April</option>
                      <option value="5">Mei</option>
                      <option value="6">Juni</option>
                      <option value="7">Juli</option>
                      <option value="8">Agustus</option>
                      <option value="9">September</option>
                      <option value="10">Oktober</option>
                      <option value="11">November</option>
                      <option value="12">Desember</option>
                    </select>
                    <span class="focus"></span>
          </div>
                <div class="select">
                    <select id="select__year" name='year' value={year} onChange={yearOnChange}>
                      <option value="" selected disabled hidden>Tahun</option>
                      {yearOptions.map((val, index) => {
                        return (
                          <><option key={index} value={`${val}`}>{val}</option></>
                        )
                      })}
                    </select>
                    <span class="focus"></span>
          </div>
            </form>
          <button classname="button__modal__submit" name="button__modal__submit" onClick={() => modalOnClick()}>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Modal