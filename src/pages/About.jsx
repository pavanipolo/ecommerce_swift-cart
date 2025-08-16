import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2x1 text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
    <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
    <p>At StyleHive, we believe fashion should be effortless, comfortable, and affordable. Our journey began with a passion for blending modern trends with timeless styles. From cozy everyday essentials to elegant statement pieces, we curate clothing that fits every occasion and personality.

Driven by quality and inspired by our customers, we’re more than just a brand — we’re your go-to style partner. Join us as we bring fashion to your doorstep with love and care.

</p>
    <b className='text-gray-800'> Our Mission</b>
    <p>Our mission is to empower individuals through fashion by offering modern, affordable, and thoughtfully crafted collections that celebrate confidence and self-expression.

</p>
    </div>
      </div>
      <div className='text-4x1 py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
        </div>
        <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
           <b>Quality Assurance:</b> 
           <p className='text-gray-600'>At StyleHive, quality is at the heart of everything we do. From the first stitch to the final packaging, every product goes through a strict quality control process to ensure it meets our high standards.</p>
           <ul>
            <li>Premium Materials:</li>
            <p className='text-gray-500'> We use only carefully selected fabrics that are soft, durable, and comfortable.</p>
            <li>Skilled Craftsmanship:</li>
            <p className='text-gray-500'> Every garment is made by experienced hands with attention to detail in fit, finish, and stitching.</p>
           </ul>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
           <b>Convenienance:</b> 
           <p className='text-gray-600'>We prioritize your ease and satisfaction at every step. From intuitive browsing to seamless checkout, our platform is designed to make your shopping experience fast, simple, and stress-free. With flexible payment options and reliable delivery, shopping with us fits effortlessly into your lifestyle.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
           <b>Exceptional Customer:</b> 
           <p className='text-gray-600'>Your satisfaction is our top priority. Our dedicated support team is always ready to assist you with prompt, friendly, and personalized service. Whether you need help with a product, order, or return, we ensure a smooth and hassle-free experience from start to finish.</p>
          </div>
        </div>
        <NewsletterBox/>
    </div>
  )
}

export default About
