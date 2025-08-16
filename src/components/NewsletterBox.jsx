import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event)=>{
           event.preventDefault();
    
        }
  return (
    <div className='text-cecnter'>
      <p className='text-2x1 font-bold text-gray-800'> Subscribe now & get 20% off</p>
      <p className='text-gray-400 mt-3'>
         Don’t Miss Out!
Join our newsletter today and unlock an exclusive 20% discount on your first purchase. Be the first to know about new arrivals, special offers, and style tips straight to your inbox.
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border p1-3'>
        <input className='w-full sm:flex-1 outline-none' type="email"placeholder='Enter Your email'required />
      <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsletterBox
