import React from 'react'
import icon from './assets/Images/Icon (5).png'

function Servies() {
    return (
        <div className='bg-slate-200 content-section-1-sub'>
            <div className='flex flex-col items-center justify-center '>
              <div className='text-xs small-heading'>  Our Services </div>
                <div className='about-text text-center pt-3 mb-4'>Efficient and Reliable Shipping <br/> with FastGo</div>
            </div>

            <div className='grid-two-box-3 grid-flow-col gap-2 overflowX-scroll'>
                <div className='bg-blue-900 grid grid-row-4 mt-3' style={{ height: '240px', width: '100%', borderRadius: '12px' }}>
                    <div className="px-3 py-5">
                        <img className='w-8 h-8' src={icon} alt="" />
                    </div>
                    <div className='text-white pl-5 '>
                        OCEAN SHIPPING
                    </div>
                    <div className='text-sm p-4 text-white'>we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs.
                    </div>
                </div>

                <div className='bg-white grid grid-col-4 mt-3 ' style={{ height: '240px', width: '100%', borderRadius: '12px' }}>
                    <div className="px-3 py-5">
                        <img className='w-8 h-8' src={icon} alt="" />
                    </div>
                    <div className='text-black pl-5 '>
                        AIR SHIPPING
                    </div>
                    <div className='text-sm p-4'>we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs.
                    </div>
                </div>


                <div className='bg-white grid grid-col-4 mt-3 ' style={{ height: '240px', width: '100%', borderRadius: '12px' }}>
                    <div className="px-3 py-5">
                        <img className='w-8 h-8' src={icon} alt="" />
                    </div>
                    <div className='text-black pl-5 '>
                        TRUCK SHIPPING
                    </div>
                    <div className='text-sm p-4'>we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs.
                    </div>
                </div>
                <div className='bg-white grid grid-col-4 mt-3 ' style={{ height: '240px', width: '100%', borderRadius: '12px' }}>
                    <div className="px-3 py-5">
                        <img className='w-8 h-8' src={icon} alt="" />
                    </div>
                    <div className='text-black pl-5 '>
                        CUSTOM CLEARANCE
                    </div>
                    <div className='text-sm p-4'>we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs.
                    </div>
                </div>

                <div className='bg-white grid grid-col-4 mt-3 ' style={{ height: '240px', width: '100%', borderRadius: '12px' }}>
                    <div className="px-3 py-5">
                        <img className='w-8 h-8' src={icon} alt="" />
                    </div>
                    <div className='text-black pl-5 '>
                        FRIEGHT FORWADING
                    </div>
                    <div className='text-sm p-4'>we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs.
                    </div>
                </div>
                <div className='bg-white grid grid-col-4 mt-3 ' style={{ height: '240px', width: '100%', borderRadius: '12px' }}>
                    <div className="px-3 py-5">
                        <img className='w-8 h-8' src={icon} alt="" />
                    </div>
                    <div className='text-black pl-5 '>
                        INSURANCE
                    </div>
                    <div className='text-sm p-4'>we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs.
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Servies;
