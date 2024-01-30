import React from 'react'
import logo from '../assets/Images/logo.png';
// import bg from './backound.png'
import clients from '../assets/Images/Image Box.png'
import exp from '../assets/Images/Title.png'

function NavBar() {
    return (
        <div>
            <div className='flex justify-between items-center bg-blue-950 py-5 px-16 sticky top-0'>
                <div className='flex flex-col'>
                    <img src={logo} alt="vec" style={{ width: '6rem' }} />
                </div>
                <div className=' gap-3 pe-16 data-hide'>
                    <div style={{color:'#1195D6'}}>HOME</div>
                    <div className='text-white'>ABOUT US</div>
                    <div className='text-white'>SERVICES</div>
                    <div className='text-white'>GALLERY</div>
                    <div className='text-white'>CONTACT US</div>
                </div>
            </div>

            <div className='content-section-1  sm:content-section-1-mob'>
                <div className='absolute w-full h-full' style={{ background: '#00000080', zIndex: '5' }}> </div>
                <div className='content-section-1-sub z-10 sticky'>
                    <sapn className='text-white'>we are best logistic company</sapn>
                    <div className='text-3xl text-white mt-3 '>Streamline Your Shipping with  <br />Our Cargo Services</div>
                    <div className='text-white mt-5 text-sm'>Simplify your shipping process and make it more efficient with our <br /> cargo services. From start to finish, we'll handle everything to ensure <br /> your cargo arrives safely.</div>
                    <div className='flex flex-make-col justify-between items-center w-100 mt-4'>
                        <img className='contain' src={clients} alt="" style={{ width: '200px', height: '100px' }} />
                        <div style={{ borderLeft: '2px dashed #fff', margin: '20px 1px' }}></div>
                        <img className='contain py-3' src={exp} alt="" style={{ width: '130px', height: '100px' }} />
                        <div >
                            <div className=' text-blue-500  flex flex-row w-15'>
                                <button className='text-center  px-4 text-md py-2 blue-box-top-1' >Tracking</button>
                                <button className='px-4 text-md py-2 blue-box-top-2'>Rate & Ship</button>
                            </div>
                            <div className='blue-box p-4' >
                                <form>
                                    <div className='flex justify-between'>
                                        <input type="text" placeholder='Tracking ID' className='blue-box-input' />
                                        <div className='ps-2 grow'>
                                            <button className='blue-box-btn w-100'>Track</button>
                                        </div>
                                    </div>
                                </form>
                                <div className='text-white mt-3' style={{fontSize:'10px'}}>See the tracking id on shipping document.<span className='text-blue-500'> Help</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 
            <div className=' w-full h-screen'>
                <img src={bg} alt='' />
                <div className='absolute  bottom-10 right-5 bg-blue-900 '>
                    <div className=' text-blue-500 gap-1 flex flex-row w-15'>
                        <button className='bg-blue-800 text-center gap-2'>Tracking</button>
                        <button className='bg-black '>Rate & Ship</button>
                    </div>

                    <div>
                        <form>
                            <input type="text" placeholder='Tracking ID' />
                            <button>Track</button>
                        </form>
                        <div className='text-white text-sm'>See the tracking id on shipping document.<span className='text-blue-500'> Help</span></div>
                    </div>

                </div>

                <div className=' bottom-48 left-10 absolute'>
                    <sapn className='text-white'>we are best logistic company</sapn>
                    <div className='text-3xl text-white mt-3 '>Streamline Your Shipping with  <br />Our Cargo Services</div>
                    <div className='text-white mt-5 text-sm'>Simplify your shipping process and make it more efficient with our <br /> cargo services. From start to finish, we'll handle everything to ensure <br /> your cargo arrives safely.</div>
                    <img className='' src={clients} alt="" />
                    <img className='' src={exp} alt="" />
                </div>
            </div> */}


        </div>
    )
}

export default NavBar
