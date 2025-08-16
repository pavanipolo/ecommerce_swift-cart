import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2x1 pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>

      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
<img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
      <div className='flex flex-col justify-center items-start gap-6'>
        <p className='flex-semibold text-x1 text-gray-600'>Our Store</p>
        <p className='text-gray-500'>547009, Wiillms Station, Hyderabad, Telangana, India</p>
        <p className='text-gray-500'> Tel: +91 98765 43210<br/>Email: support@yourstore.com</p>
        <p className='font-semibold text-x1 text-gray-600'>Career at STYLE HIVE</p>
        <p className='text-gray-500'>Join our team and shape the future of fashion with us.</p>
      <button className='border border-black px-8 py-4 text-sm hover:text-white transition-all duration-500'>Explore Careers</button>
      </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact
