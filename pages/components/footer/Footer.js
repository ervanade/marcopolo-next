import React from 'react'
// import './Footer.css'

const Footer = () => {
  return (
    <div className='section__footer'>
      <div className="container">
        <div className="wrapper__footer">
          <div className="logo"><img src={`${process.env.NEXT_PUBLIC_APP_PUBLIC_URL}/assets/ghw_icon.png`} alt="gambar_bahaya_merokok" /></div>
          <div className='perhatian_footer'>
            <p className='!font-semibold'>PERINGATAN:</p>
            <p>KARENA MEROKOK, SAYA TERKENA KANKER TENGGOROKAN. </p>
            <p> LAYANAN BERHENTI MEROKOK. (0800-177-6565)</p>
            <p>DILARANG MENJUAL DAN MEMBERI KEPADA ORANG</p>
            <p>DIBAWAH 21 TAHUN DAN PEREMPUAN HAMIL.</p>
          </div>
          <div className="lingkar_umur"> <p>21+</p></div>
        </div>
      </div>
    </div>
  )
}

export default Footer