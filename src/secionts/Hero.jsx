import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import pic_01 from '../assets/jum.jpg'
import pic_02 from '../assets/new.jpg'
import pic_03 from '../assets/uns.jpg'
import pic_04 from '../assets/mil.jpg'
import pic_05 from '../assets/10.webp'
import pic_06 from '../assets/Cool.jpg'
import pic_07 from '../assets/hgh.jpeg'
import pic_08 from '../assets/Lac.jpg'
import pic_09 from '../assets/par.png'
import pic_010 from '../assets/pro.png'
import pic_011 from '../assets/wom.jpg'
import pic_012 from '../assets/clo.jpg'
import pic_013 from '../assets/sur.webp'
import pic_014 from '../assets/fff.webp'






// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Hero = () => {
  return (
    <div className="w-full mt-4 ">
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: false }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
    
    <SwiperSlide className='flex items-center justify-center'>
      <div className='flex flex-row'>
      <img  className='h-[350px] md:h-[650px] w-[40%]' src={pic_07}/>
      <img  className='h-[350px] md:h-[650px] w-[60%]' src={pic_06}/>
      </div>
    </SwiperSlide>

    <SwiperSlide className='flex items-center justify-center'>
      <div  className='flex flex-row'>
      <img  className='h-[350px] md:h-[658px] w-[70%]' src={pic_09}/>
      <img  className='h-[350px] md:h-[650px] w-[30%]' src={pic_05}/>
      </div>
      </SwiperSlide>
    
    <SwiperSlide className='flex items-center justify-center'>
      <div className='flex flex-row items-center justify-center'>
        <img  className='h-[350px] md:h-[650px] w-[65%]' src={pic_08}/>
        <img w className='h-[350px] md:h-[550px] w-[35%]' src={pic_012}/>
      </div>  
    </SwiperSlide>
        
   
    <SwiperSlide className='flex items-center justify-center'>
    <div className='flex flex-row'>
      <div className='flex flex-col'>
      <img  className='h-[200px] md:h-[350px] w-full' src={pic_013}/>
      <img className='h-[150px] md:h-[315px] w-full' src={pic_014}/>
      </div>
      <img  className='h-[350px] md:h-[660px] w-[70%]' src={pic_010}/>
    </div>
    </SwiperSlide>
     ...
  </Swiper>
  </div>
  )
}

export default Hero