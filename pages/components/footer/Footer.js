import React from 'react'
// import './Footer.css'

const Footer = () => {
  return (
    <div className='section__footer'>
        <div className="container">
            <div className="wrapper__footer">
                <div className="logo"><img src={`${process.env.NEXT_PUBLIC_APP_PUBLIC_URL}/assets/ghw_icon.png`} alt="asdsa" /></div>
                <div className='perhatian_footer'>
                  <h1>PERINGATAN:</h1>
                  <h1>KARENA MEROKOK, SAYA TERKENA KANKER TENGGOROKAN. LAYANAN BERHENTI MEROKOK</h1>
                  <h1>(0800-177-6565)</h1>
                  </div>
                <div className="lingkar_umur"> 18+</div>
            </div>
        </div>
    </div>
  )
}

export default Footer