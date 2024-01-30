import React from 'react'
import persons from '../assets/Images/persn.png';


function Aboutus() {
  return (
    <div>
      <div className='content-section-1-sub '>
        <div className='grid-flow-col gap-5 grid-two-box'>
          <div className='pe-4'>
            <div className='text-xs' style={{ color: '#0E33CB' }}>ABOUT US</div>
            <div className='about-text'>
              Empowering Your <br />Buisness With Tailored <br />Logistics Solutions
            </div>

            <div className='text-xs font-bold mt-2 '>
              <div>we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. With years of experience and a team of experts, we are dedicated to empowering your business with seamless shipping experiences.</div>
              <button className='text-white mt-4 px-10 py-2 border rounded-md' style={{ backgroundColor: "#1195D6" }}>Learn More</button>
              <div>
              </div>
            </div>
          </div>
          <div>
            <img src={persons} alt="img" />
          </div>
        </div>
        <div className='flex gap-4 mt-10 flex-make-col'>
          <div className='grow box-align-2'>
            <div className='box-align-text-1'>
              01
            </div>
            <div style={{ borderLeft: '2px dashed #fff', margin: '10px 10px', color: "#ffff" }}></div>
            <div className='box-align-text-2'>
              Expertise and <br /> Experience
            </div>
          </div>
          <div className='grow  box-align-2'>
            <div className='box-align-text-1'>
              02
            </div>
            <div style={{ borderLeft: '2px dashed #fff', margin: '10px 10px', color: "#ffff" }}></div>
            <div className='box-align-text-2'>
              Expertise and <br /> Experience
            </div>
          </div>
          <div className='grow box-align-2'>
            <div className='box-align-text-1'>
              03
            </div>
            <div style={{ borderLeft: '2px dashed #fff', margin: '10px 10px', color: "#ffff" }}></div>
            <div className='box-align-text-2'>
              Expertise and <br /> Experience
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Aboutus;
