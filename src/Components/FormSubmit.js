import React from 'react'
import persons from '../assets/Images/persn.png';


function FormSubmit() {

  const submitForm=()=>{
alert('coming soon')
  }

  return (
    <div>
      <div className='content-section-1-sub'>
        <div className='grid-two-box gap-5'>
          <div className='pe-4 mb-4'>
            <div className='text-xs' style={{ color: '#0E33CB' }}>Contact Us</div>
            <div className='about-text'>
            Take the First Step  <br /> to Streamlined  <br /> Shipping 
            </div>

            <div className='text-xs font-bold mt-2 '>
              
              {/* <button className='text-white mt-4 px-10 py-2 border rounded-md' style={{ backgroundColor: "#1195D6" }}>Learn More</button> */}
              <div>
              </div>
            </div>
          </div>
          <div className='rounded p-10' style={{ background: '#EDF0F3' }}>
            <div className='text-md font-bold' style={{ color: '#121D50' }}>
              Request a Quote Today
            </div>
            <form onSubmit={()=>{submitForm()}}>
              <div className='form-group mt-4'>
                <label for="price" class="block text-xs font-medium leading-6 text-blue-900">YOUR NAME</label>
                <div class="rounded-md">
                  <input type="text" name="price" id="price" class="block w-full rounded-md border-0 py-2 px-2 text-gray-900  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="ENTER YOUR NAME" />
                </div>
              </div>
              <div className='form-group mt-2'>
                <label for="price" class="block text-xs font-medium leading-6 text-blue-900">EMAIL ADDRESS</label>
                <div class="rounded-md">
                  <input type="text" name="price" id="price" class="block w-full rounded-md border-0 py-2 px-2 text-gray-900  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="ENTER@ MAIL" />
                </div>
              </div>
              <div className='form-group mt-2'>
                <label for="price" class="block text-xs font-medium leading-6 text-blue-900">PHONE</label>
                <div class="rounded-md">
                  <input type="text" name="price" id="price" class="block w-full rounded-md border-0 py-2 px-2 text-gray-900  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="(91)+" />
                </div>
              </div>
              <div className='form-group mt-2'>
                <label for="price" class="block text-xs font-medium leading-6 text-blue-900">MESSAGE</label>
                <div class="rounded-md">
                  <input type="text" name="price" id="price" class="block w-full rounded-md border-0 py-2 px-2 text-gray-900  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="TYPE THE TEXT" />
                </div>
              </div>
              <button type='submit' className='text-white mt-4 px-10 py-2 border rounded-md' style={{ backgroundColor: "#1195D6" }}>sumbit</button>
            </form>
          </div>
        </div>
      </div>
    </div >
  )
}

export default FormSubmit;
