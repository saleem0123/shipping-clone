import React from 'react'
import img1 from '../assets/Images/Button ship.png'

function Header() {
    return (
        <div>
            <div className='flex flex-row justify-between item-center py-5 px-9 '>
                <div className='mr-15'>
                    massshippping@gmail.com |+1(333)000-0000
                </div>
                <div className='w-40 pr-9 '>
                    <img src={img1} alt='' />
                </div>
            </div>


        </div>
    )
}

export default Header;
