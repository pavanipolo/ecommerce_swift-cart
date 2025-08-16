import React , {useContext, useEffect,useState} from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    
    const { products } = useContext(ShopContext);
    const [latestProducts,setLatestProducts] = useState([]);

  useEffect(()=>{
   setLatestProducts(products.slice(0,10));
  },[])
  
  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3x1'>
        <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
       <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
       Discover our latest collections that bring fashion, comfort, and affordability together. Whether you're dressing up for a celebration or keeping it casual at home, we've got the perfect picks for you — all crafted with care and style.
       Every season, we introduce thoughtfully curated collections designed to match the evolving needs of our customers. From modern silhouettes to timeless classics, explore what’s new and experience the best in style and quality.</p>      </div>

    {/* Rendering Products */}
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4  gap-y-6'>
       {
        latestProducts.map((item,index)=>(
          <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
        ))
       }
    </div>
    </div>
  
  )
}

export default LatestCollection
