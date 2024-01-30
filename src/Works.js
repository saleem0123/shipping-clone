import React from 'react'
import lady from './assets/Images/similing lady.png'
import icn from './assets/Images/Icon (6).png'

function Works() {
    return (
        <div>
            <div className='content-section-1-sub'>
                <div className='grid-two-box gap-5'>
                    <div className='mt-3'>
                        <img src={lady} alt="img" />
                    </div>
                    <div className='mt-3'>
                        <div className='text-xs small-heading'>How It Works</div>
                        <div className='about-text'>
                            Simplify Your Shipping Experience with Our Easy Step Process
                        </div>

                        <div className='text-xs font-bold mt-2 '>
                            <div>we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. With years of experience and a team of experts, we are dedicated to empowering your business with seamless shipping experiences.</div>
                            {/* <button className='text-white mt-4 px-10 py-2 border rounded-md' style={{ backgroundColor: "#1195D6" }}>Learn More</button> */}
                            <div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

            <div style={{ borderTop: "2px solid", borderStyle: "dashed", borderColor: "#5C6C7B", marginLeft: "5rem", marginRight: "5rem" }} >
                <div className=' flex flex-make-col justify-around items-center text-center mt-5 mb-8 pb-9'>
                    <div className='flex flex-col justify-center items-center'>
                        <div>
                            <button className='text-center border rounded-2xl px-2 py-1'>step 1</button>
                        </div>
                        <div className='mt-2 flex flex-col items-center ' >
                            <img className='' style={{ width: '140px', height: '80px', objectFit: 'contain' }} src={icn} alt='img' />
                            <div className=' items-center pt-3 text-xl px-5'>Request a Quote</div>
                            <div className='subhead-1 text-sm pt-2'>we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div>
                            <button className='text-center border rounded-2xl px-2 py-1'>step 2</button>
                        </div>
                        <div className='mt-2 flex flex-col items-center' >
                            <img className='' style={{ width: '140px', height: '80px', objectFit: 'contain' }} src={icn} alt='img' />
                            <div className=' items-center pt-3 text-xl px-5'>Provide Details</div>
                            <div className='subhead-2 text-sm pt-2'>we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div>
                            <button className='text-center border rounded-2xl px-2 py-1'>step 3</button>
                        </div>
                        <div className='mt-2 flex flex-col items-center' >
                            <img className='' style={{ width: '140px', height: '80px', objectFit: 'contain' }} src={icn} alt='img' />
                            <div className=' items-center pt-3 text-xl px-5'>Schedule Pick-Up</div>
                            <div className='subhead-3 text-sm pt-2'>we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. </div>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Works
