import React, { useContext,useEffect,useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {

  const {products} = useContext(ShopContext);
  const [BestSeller,setBesteller] = useState([]);

useEffect(()=>{
  const bestProduct = products.filter((item)=>(item.bestseller));
  setBesteller(bestProduct.slice(0,5))
},[])

  return (
    <div className='my-10'>
      <div className='text-center text-3x1 py-8'>
        <Title text1={'BEST'} text2={'SELLERS'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        These are the products everyone’s talking about! Our Best Sellers are customer favorites — handpicked based on top reviews, fast-moving stock, and consistent love from our shoppers. Don’t miss out on what’s trending now.</p>
      </div>
       <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-col-5 gap-4 gap-y-6'>
        {
            BestSeller.map((item,index)=>(
                <ProductItem key={index} id={item.id} name={item.name} image={item.image} price={item.price}/>
            ))
        }
       </div>
    </div>
  )
}

export default BestSeller
