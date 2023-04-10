import React from 'react'
// import './Footer.css'

const Footer = () => {
  return (
    <div className='section__footer'>
        <div className="container">
            <div className="wrapper__footer">
                <div className="logo"><img src={`${process.env.NEXT_PUBLIC_APP_PUBLIC_URL}/assets/ghw_icon.png`} alt="gambar_bahaya_merokok" /></div>
                <div className='perhatian_footer'>
                  <p>PERINGATAN:</p>
                  <p>KARENA MEROKOK, SAYA TERKENA KANKER TENGGOROKAN. LAYANAN BERHENTI MEROKOK</p>
                  <p>(0800-177-6565)</p>
                  </div>
                <div className="lingkar_umur"> 18+</div>
            </div>
        </div>
    </div>
  )
}

export default Footer