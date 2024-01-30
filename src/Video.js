import React from 'react'
// import vid from './assets/Images/vidbg.png';

function Video() {
    return (
        <div>
            <div className='content-section-2'>
                <div className='flex flex-col items-center justify-center w-full h-full relative' style={{ background: '#00000080',color:'#fff' }}>
                    <div className='absolute top-16 box-align-text-1 px-3 text-center'>
                        See it in Action
                    </div>
                    <div className='absolute top-36 box-align-text-2 px-3 text-center'>
                        Watch Our Video to Get a Clear Understanding of How It Works
                    </div>
                    <div className='flex items-center justify-center rounded-full bg-white ps-1' style={{ width: '5rem', height: '5rem' }} onClick={()=>{alert("video not availableF !!!")}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 60 60" fill="none">
                            <path d="M12.5 7.5L47.5 30L12.5 52.5V7.5Z" fill="#1195D6" stroke="#1195D6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>


                </div>
            </div>
        </div>

    )
}

export default Video;
