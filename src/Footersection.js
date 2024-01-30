import React from 'react'
import logo from './assets/Images/logo.png'
import man from './assets/Images/man-with-helmet-warehouse 1.png'
import fld from './assets/Images/Filed.png'
import btn from './assets/Images/Button (4).png'

function Footersection() {
    return (
        <div>
            <div className='flex-make-col '>
                <div className='grid-two-box gap-5 bg-blue-950 p-5'>
                    <div className='pe-4 mb-4 '>
                        <div className='text-xs' style={{ color: '#0E33CB' }}>
                            <img src={logo} alt="vec" style={{ width: '6rem' }} />
                        </div>
                        <div className=' text-white'>
                            we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs.
                        </div>
                    </div>

                    <div className='pe-4 mb-4'>
                        <div className='text-2xl font-bold text-white' style={{ color: '#fff' }}>Navigation </div>
                        <div className='text-white'>
                            <div>Home</div>
                            <div>About Us</div>
                            <div>Service</div>
                            <div>Contact</div>
                        </div>
                    </div>

                    <div className='pe-4 mb-4'>
                        <div className='text-2xl font-bold text-white' style={{ color: '#fff' }}>
                            Recent Project
                        </div>
                        <div className='text-white p-2'>
                            <img src={man} alt="hhh" />

                        </div>
                    </div>

                    <div className='pe-4 mb-4 '>
                        <div className='text-2xl font-bold' style={{ color: '#fff' }}>
                            Subscribe Us
                        </div>
                        <div className='text-white p-2'>
                            <div onClick={() => { alert('please enter the name') }}>
                                <img className='pb-2' src={fld} alt="" />
                            </div>
                            <div onClick={() => { alert('Subscription invalid') }}>
                                <img src={btn} alt="" />
                            </div>
                        </div>

                    </div>
                    <div style={{ borderTop: '2px solid', borderStyle: 'dashed', borderColor: 'white', marginBottom: '2rem' }}></div>




                </div>
            </div>

        </div>


    )
}
export default Footersection;

