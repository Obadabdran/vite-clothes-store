import jeans_01 from '../assets/jeanse/jeans1.jpg'
import jeans_02 from '../assets/jeanse/jeans2.jpg'
import jeans_03 from '../assets/jeanse/jeans3.jpg'
import jeans_04 from '../assets/jeanse/jeans4.jpg'
import tshirt_05 from '../assets/t-shirt/t1.jpg'
import tshirt_06 from '../assets/t-shirt/t2.jpg'
import tshirt_07 from '../assets/t-shirt/t3.jpg'
import tshirt_08 from '../assets/t-shirt/t4.jpg'
import hat_09 from '../assets/hats/h1.jpg'
import hat_10 from '../assets/hats/h2.jpg'
import hat_11 from '../assets/hats/h3.jpg'
import hat_12 from '../assets/hats/h4.jpg'
import sh_13 from '../assets/shoes/sh1.jpg'
import sh_14 from '../assets/shoes/sh2.jpg'
import sh_15 from '../assets/shoes/sh3.jpg'
import sh_16 from '../assets/shoes/sh4.jpg'
import pic_01 from '../assets/shi.webp'
import pic_02 from '../assets/ban.jpg'
import pic_03 from '../assets/die.jpg'
import { FeatureCard } from '../components/index'
const Feature = () => {
    const features=[
        {image:jeans_01,title:"blue jeanse"},
        {image:sh_13,title:"Waeen Shoes "},
        {image:jeans_02,title:"Over jeanse"},
        {image:tshirt_06,title:"Lagost TSHirt"},
        {image:jeans_03,title:"Katty jeanse"},
        {image:hat_10,title:"Kahar Hat "},
        {image:sh_16,title:"Cezar Shoes "},
        {image:jeans_04,title:"Jelly jeanse"},
        {image:tshirt_05,title:"G & H TSHirt"},
        {image:hat_11,title:"Rfad Hat "},
        {image:sh_14,title:"Dasxer Shoes "},
        {image:tshirt_07,title:"Armany TSHirt"},
        {image:hat_12,title:"Daser Hat "},
        {image:tshirt_08,title:"Goerge TSHirt"},
        {image:sh_15,title:"Whize Shoes "},
        {image:hat_09,title:"Whize Hat "},
        
        
       
        
        
    ]
  return (
    <div className='mt-14  '>
        <h1 className='flex justify-center text-xl md:text-3xl font-bodoni font-semibold  text-emerald-900 '>FEATUERED PRODUCTS</h1>
       <div className='flex justify-center mt-8'> <button className='border border-black px-4 py-2 text-sm text-emerald-900 '>SHOP ALL PRODUCTS</button></div>
     <div className='flex flex-row justify-center flex-wrap px-14   mt-4 '>
     {features.map((f)=>(
        <FeatureCard image={f.image} title={f.title}/>
     ))}
     </div>
  

    <div className='flex flex-col md:flex-row mt-16'>
      <div className='relative w-full md:w-[35%] h-80'>
        <img src={pic_02} className='w-full h-full'/>
        <button className='absolute inset-36 w-70 h-20 text-white text-xl -ml-14 px-12 py-2 border-2 border-white font-semibold bg-black bg-opacity-50'>SHOP</button>
      </div>
      
      <img src={pic_01} className=' w-full md:w-[30%] h-80'/>

      <div className=' relative w-full md:w-[35%] h-80'>
        <img src={pic_03} className='w-full h-full'/>
        <button className='absolute inset-36 w-70 h-20 text-white text-xl -ml-14 px-12 py-2 border-2 border-white font-semibold bg-black bg-opacity-50'>DIY SCRIMSHAW</button>
      </div>
    </div>
    </div>
  )
}

export default Feature